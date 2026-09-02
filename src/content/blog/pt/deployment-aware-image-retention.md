---
title: 'Como apagar imagens de container em artefatos de registros com mais de um ano exceto as que estão em uso'
slug: 'deployment-aware-image-retention'
description: 'Uma política de registry baseada em idade e posição consegue apagar uma imagem que produção ainda em uso. Este job de remoção primeiro lê o estado de deploy, para quando a entrada não é confiável e publica o plano dias antes de apagar qualquer recurso.'
pubDate: 2026-08-31
tags: ['SRE', 'Kubernetes', 'Confiabilidade']
draft: false
lang: 'pt'
---

Este é um relato simplificado de um sistema de remoção que arquitetei para os registros de container de uma plataforma interna. Os nomes e as regras de negócio ficaram de fora, mas o contexto de falha e a arquitetura se aplicam a outros sistemas.

## A falha

Registros de container oferecem políticas de retenção, e a mais comum diz o seguinte: mantenha as 10 versões mais recentes de cada imagem e apague tudo o que tiver mais de 365 dias. As duas condições falam de posição e de tempo de criação, e nenhuma delas enxerga quais imagens ainda estão em uso.

Isso é seguro para um serviço que faz deploy com frequência, porque a versão em uso fica sempre perto do topo da lista. Não é seguro para um serviço que faz deploy raramente, e nele a falha chega devagar, em seis passos:

1. O time promove o serviço uma vez. Ele funciona, e ninguém mexe nele por um ano.
2. O sistema de build continua gerando versões novas da imagem mesmo assim, já que uma troca de imagem base ou um job noturno é o suficiente para tal evento.
3. A versão em uso cai abaixo do teto de 10 versões e, depois, passa dos 365 dias.
4. O registry apaga exatamente a versão em uso em produção.
5. Nada acontece. Os pods em execução já têm a imagem no nó, então nunca a baixam de novo. Nenhum alarme dispara, e o dashboard continua verde.
6. Algumas semanas ou dias depois algum recurso se renova — uma troca de nó, um scale-up, um pod novo, um rollback — e o pull falha.

O intervalo entre o passo 4 e o passo 6 é o ponto central. A remoção é silenciosa, e o alarme chega tarde e longe da causa. O incidente que revela a falha costuma ser justamente aquele em que você precisava do rollback. Uma política de retenção que não enxerga o estado de deploy é uma indisponibilidade agendada com prazo desconhecido.

## A decisão

Use o **estado de deploy** ao invés de somente a posição na lista.

Uma versão em uso é aquela que um manifesto Kubernetes nomeia de forma exata, de modo que o cluster baixa aquela versão e nenhuma outra.

Antes que o job monte um plano, ele constrói um índice de versões em uso a partir de duas fontes:

- cada versão de imagem em um overlay de ambiente nos repositórios GitOps;
- cada versão de imagem nos manifestos Kubernetes dos ambientes temporários, como o ambiente de preview de um pull request. Esse estado fica em outro lugar e é fácil de esquecer.

O job nunca apaga uma versão que está nesse índice, não importa o tempo de criação dela nem quantas versões mais novas existam.

Para cada imagem, ele ordena as versões da mais nova para a mais antiga e  então protege um grupo no topo dessa sequência:

```text
[ ...versões mais novas... , versão fixada mais antiga , ...N anteriores... ]
  \_________________________________________________/   \________________/
       versões em uso e tudo que veio depois delas       folga p/ rollback
```

- Tudo que seja mais novo que a versão em uso mais antiga fica protegido, o que cobre três ambientes parados em três versões diferentes.
- Uma quantidade fixa de versões abaixo desse ponto também fica protegida, então um rollback para a versão imediatamente anterior ainda tem a imagem disponível.
- Qualquer coisa abaixo do grupo protegido vira candidata, mas só é apagada se também for mais antiga que a janela de retenção: 365 dias para um registry de produção e 90 dias para um temporário, por exemplo. São duas condições antes de uma remoção, não uma.

Se nada fixa uma imagem, o grupo protegido volta a ser o teto comum de 10 versões, o que faz da política nova um superconjunto da política que ela substitui.

Existe uma exceção detalhe não cabe em uma política: imagens compartilhadas que residem dentro de um único registry de um time. O índice usa como chave o caminho no registry, e não o nome do time que declarou a como em uso, então quando um time constrói uma imagem compartilhada e outros três também a definem como em uso, o índice deve proteger essa imagem para todos eles.

## Como o job falha sem dano colateral

Um job que apaga dados precisa de um modelo de falhas antes de chegar em produção. Falhar sem dano colateral significa parar antes que o problema se espalhe; o oposto significa continuar e talvez se espalhar. Este job precisa sempre falhar sem dano colateral, e a distinção útil é entre **abortar** e **conter**.

**Uma única condição aborta a execução inteira: um índice de versões em uso vazio.** Um índice vazio significa que a leitura do estado de deploy falhou, e não que o cluster não roda nada. Se você aceita esse índice, o job trata toda versão de todo registry como não em uso, então o plano não parece estar um pouco errado mas sim sem sentido, e nenhuma parte dele é segura de se executar. O job para, não apaga nada e devolve um código de erro.

Toda outra falha reduz a execução ao invés de interrompê-la:

- **Um projeto que não contribuiu com nenhuma image em uso é pulado.** Um estado ilegível de um projeto costuma ser uma falha parcial de leitura, enquanto um projeto sem nenhum deploy é bem mais raro. Pular limita o resultado a "sem limpeza no projeto X" em vez de "apagar todas as imagens do projeto X".
- **Um projeto com um manifesto Kubernetes que o job não consegue parsear é pulado.** Um manifesto ilegível nunca pode parecer um manifesto sem imagens em uso, ou a janela curta de 90 dias apaga a imagem de um ambiente temporário em uso.
- **Uma imagem cuja lista de versões não pode ser lida é pulada.** O cliente já tentou realizar o retry de processamento erros transitórios, a leitura completa passa de mil requisições sequenciais e o job não guarda estado para retomar, então uma resposta ruim não pode desperdiçar uma execução inteira. Essa falha é segura na direção certa, porque o job acaba apagando menos. Uma versão em uso que o job não consegue ler é o caso oposto, já que falha com dano colateral, e esse caso continua fatal.
- **Um plano maior que o teto é reduzido**, mantendo os candidatos mais antigos. Abortar por tamanho causa um bloqueio: uma pilha grande de versões velhas nunca diminui, porque toda execução a recusa do mesmo jeito. Com um teto, essa pilha reduz ao longo de várias execuções.

Cada um desses casos emite o próprio evento, e os monitores de observabilidade alertam sobre todos eles. "O job passou" não é o sinal interessante; a quantidade de trabalho que ele se recusou a fazer é.

## A última verificação antes de uma remoção

A fase de plano lê o estado de deploy outra vez depois de montar o plano e descarta tudo o que apareceu em uso enquanto o plano era montado. Isso fecha o intervalo entre a leitura das listas de versão e a produção do plano, mas termina antes da primeira remoção.

A fase de remoção é um problema diferente: milhares de requisições sequenciais ao longo de dezenas de minutos, tempo suficiente para um plano correto no início ficar incorreto no meio do caminho.

Por isso o job continua lendo o estado de deploy em intervalos curtos durante toda a fase de remoção, e verifica cada versão com um estado atualizado no momento anterior a apagá-la. Essa verificação é o último mecanismo de segurança que acontece antes das imagens serem apagadas.

Se ela encontra uma versão em uso, o job pula essa versão, reporta e segue em frente. Seguir é seguro por um motivo: toda versão seguinte passa pela mesma verificação, então nada do que a verificação protege pode escapar. Parar também sai caro, já que em um possível agendamento mensal isso pode custar um mês inteiro de limpeza para proteger uma versão que a verificação já tinha protegido.

A regra geral: verifique durante o planejamento para ter um bom plano, e verifique de novo imediatamente antes da operação destrutiva para obter um resultado assertivo. Qualquer intervalo entre essas duas verificações é uma falha, e um deploy que cair dentro dele vai encontrá-la.

## O prazo de aviso para engenheiros

O job pode apagar dados uma vez por mês ou por semana, e N execuções de prévia (também conhecidos como dry-runs) vêm antes dele, na semana anterior. Cada prévia monta o plano completo e aplica todas as proteções, e não apaga nada.

Essa sequência é a parte da arquitetura voltada aos engenheiros. O plano fica visível por dias antes de qualquer remoção, um cancelamento aparece bem antes da execução que apaga, e um time que vê uma de suas imagens em uma prévia tem tempo de bloquear essa imagem para remoção ou de se manifestar. Isso também faz da primeira execução de uma política nova um evento menor, porque todo mundo já viu N prévias dela.

## O que se aplica a outros sistemas

- A retenção deve ser responsabilidade do estado de deploy, e não da posição na lista. O tempo de criação dá permissão para apagar; mas não é motivo para apagar.
- Decida o modelo de falhas primeiro, e deixe-o assimétrico: pare a execução quando o dado de entrada não é confiável, e reduza a execução quando apenas a saída fica incompleta.
- A verificação de segurança que importa é a imediatamente anterior à operação destrutiva.
- Um job destrutivo que publica o plano por alguns dias permite que as pessoas auditem a automação em vez de confiar nela cegamente.
