---
title: 'Registro de Decisão Arquitetural: promover microserviços com pull requests em repositório GitOps'
slug: 'adr-gitops-promotion-pull-requests'
description: 'Um Registro de Decisão Arquitetural higienizado de uma plataforma interna: cada promoção é escrita como um pull request, e um controlador reconcilia o cluster a partir do repositório.'
pubDate: 2026-08-24
tags: ['ADR', 'GitOps', 'Engenharia de Plataforma']
draft: false
lang: 'pt'
---

Este é um Registro de Decisão Arquitetural higienizado. Escrevi a versão original para uma plataforma interna de desenvolvimento, e esta versão não traz nomes, regras de negócio nem dados proprietários. O raciocínio por trás da decisão continua o mesmo.

**Status:** aceito, com a plataforma em produção.

## Contexto

Um time de plataforma atende cerca de 20 repositórios de produto, e cada repositório de produto tem um repositório GitOps com vários serviços dentro. Cada serviço é servido por overlays Kustomize, em que cada overlay é um diretório para um ambiente e fixa a versão exata da imagem (ou das imagens) daquele ambiente. O controlador ArgoCD, dentro do cluster, reconcilia o estado vivo com esses overlays.

O repositório guarda o estado desejado, e o controlador compara esse estado com o estado vivo a cada poucos segundos, alterando o estado vivo até que os dois concordem. Promover um microserviço significa, portanto, alterar uma tag de imagem fixada no repositório GitOps. A pergunta em aberto nunca foi o conteúdo dessa mudança, e sim quem pode escrevê-la e por qual mecanismo.

Quem forçou a decisão foi o uso facilitado de um dashboard, não o a forma de deploy. As pessoas desenvolvedoras liam o estado de deploy em uma página estática que o sistema de integração contínua reconstruía a cada merge.

Essa página tinha três problemas: estava sempre um rebuild atrás do estado real, não reagia a nenhum evento e assumia uma única imagem por serviço, de modo que qualquer serviço com sidecars aparecia com dados incompletos.

Algumas vezes as pessoas voltavam a ler os arquivos de overlay diretamente do repositório GitOps, o que é lento e propenso a erro justamente em momentos em que dados fidedignos mais importam. Toda solução que consideramos precisava de um caminho de escrita para a plataforma, então esse caminho tinha que ser decidido primeiro.

## O que a decisão precisava preservar

- **Um único autor no cluster.** A reconciliação é uma garantia enquanto nada mais altera o estado real.
- **Auditoria de graça.** A plataforma precisa mostrar quem promoveu o quê e quando, sem um sistema de auditoria extra separado.
- **Um rollback comum.** Reverter não pode ser uma funcionalidade especial da plataforma e não deveria ser estrita a Kubernetes rollouts.
- **Um congelamento que os times consigam se mover livremente.** O congelamento deve parar o releases automáticos sem bloquear quem está corrigindo um incidente.
- **Serviços com várias imagens.** Essas imagens dentro de um serviço precisam ter a capacidade de se mover de forma independente.

## As opções

### Opção 1. A plataforma escreve no cluster

Uma ação do dashboard altera o estado real pela API do Kubernetes. Rejeitamos essa opção porque ela cria um segundo autor: o controlador reverte tudo o que não escreveu, e faz isso em silêncio, então quem fez a mudança nunca fica sabendo. Essa opção também requere de stakeholders terem accesso baseado em roles (RBAC) em Kubernetes, além de conhecimento na ferramenta, o que não é recomendado ou aceitável em alguns casos.

O repositório também deixa de descrever o que realmente está sendo executado, o que obriga a reconstruir auditoria e rollback dentro da plataforma.

### Opção 2. A plataforma faz commit no branch padrão

Essa opção mantém um único autor e dá o histórico git de graça, mas um commit direto passa por cima das regras de proteção de branch e não dispara as verificações de CI que uma mudança proposta executaria.

Ele também não deixa nada para aprovar, comentar ou barrar, então um possível congelamento vira uma flag somente dentro da plataforma em vez de algo visível no repositório onde a mudança chega.

### Opção 3. A plataforma abre um pull request

A plataforma cria um branch, faz o commit da nova tag de imagem e abre um pull request no repositório GitOps. As regras de revisão e as verificações usuais se aplicam, o merge (auto-merge ou não) dispara o deploy e o controlador reconcilia o cluster. Foi a opção que escolhemos.

### Opção 4. Um observador promove de forma automática

Um controlador percebe um build novo e atualiza o overlay sozinho. Rejeitamos essa opção como caminho padrão porque os times queriam uma pessoa em cada promoção para produção, e porque o movimento automático torna as regras de congelamento mais difíceis de explicar. A opção de promoção automática é voluntária (de forma granular ou não) por meio de agendamentos.

## A decisão

**A plataforma abre um pull request no repositório GitOps por ação do usuário.** Ela não escreve no cluster e não faz push em branch padrão. Um serviço com várias imagens pode selecionar quais delas vão ser inclusas em um único pull request, de modo que os containers relacionados podem se mover separados e as verificações rodam uma vez só.

Mais duas decisões derivam desta.

### O modelo de leitura é um espelho que você consegue reconstruir

Um dashboard que lê o repositório em tempo real é lento demais, então a plataforma mantém uma projeção do estado de deploy e a atualiza a partir dos eventos de push do repositório por meio de webhooks. Uma regra mantém essa projeção honesta: todo cache precisa de um mecanismo barato para obter uma atualização completa.

Uma única função reconstrói o estado completo de um projeto a partir do HEAD atual do repositório, e quatro casos de recuperação passam por ela:

- um marcador ausente na primeira execução;
- um marcador apontando para um commit que não está mais no histórico;
- um force push;
- uma diferença grande demais para uma atualização incremental.

Um job agendado chama a mesma funcionalidade toda noite. A projeção mostra sempre o estado presente, e não uma reprodução do histórico, o qual é deferido para o histórico do git.

### O recém-atualizado é o último commit processado

A plataforma não empurra o estado para os navegadores. Ela guarda o último commit que processou de cada repositório e envia esse commit como entity tag, o cabeçalho HTTP ETag, de modo que os clientes fazem requisições condicionais e recebem "não modificado" com uma leitura só, até o commit mudar.

Isso é barato o bastante para consultas de poucos em poucos segundos e não exige sticky sessions, e ainda tem uma propriedade que o mecanismo de push não tem: o recém-atualizado também é o marcador de correção da projeção, então um dashboard defasado e um espelhamento travado não conseguem discordar.

### O acesso acompanha o controle de versão

Uma pessoa somente consegue ler o estado de um projeto se possui acesso ao repositório correspondente. A plataforma verifica isso no sistema de controle de versão e guarda a resposta por pouco tempo, então não existe um segundo modelo de permissão para causar um falta de sincronia.

## Consequências

### O que ganhamos

- O histórico de deploys é o histórico do repositório: cada promoção tem autoria, horário, diferença e revisão.
- Um rollback é a processo reverso de uma mudança já mergeada, uma operação conhecida por engenheiros e que continua funcionando mesmo com a plataforma fora do ar.
- Um congelamento vive no mesmo repositório. Ele para o fluxo automático de promoção, mas ainda permite uma mudança manual revisada.
- O alcance de impacto é pequeno. As credenciais da plataforma abrem um pull request e nada além disso, e ela não guarda nenhuma credencial capaz de modificar recursos no cluster.
- O self-service é real: um time promove o próprio serviço sem um Platform Engineer e sem uma reunião, porque o caminho do deploy e a trilha de auditoria são o mesmo objeto.

### O que custou

- A promoção ficou meio que lenta, já que inclui as verificações e a revisão. Aceitamos esse custo, porque a revisão é o controle que dá valor ao dado de auditoria, além de proteger o ambiente de produção.
- A projeção é um problema de sistemas distribuídos e não um cache simples. Dois eventos de push do mesmo projeto não podem rodar ao mesmo tempo, então a plataforma estabelece um lease curto por projeto e devolve um erro sob contenção, deixando que o remetente envie o evento outra vez. Essa é a maior parte da complexidade acidental que a decisão traz.
- A plataforma precisa descobrir o que mudou entre dois commits e tratar todos os casos complexos: eventos duplicados, eventos fora de ordem, eventos perdidos, pushes forçados e comparações truncadas. Cada um deles volta para um processo diário de reconstrução.
- Operadores continuam alterando o repositório na mão, então a plataforma precisa tratar o repositório como fonte da verdade das próprias ações dela.

## O que manter em uma arquitetura parecida

A ferramenta não é a parte interessante. Duas propriedades são: a interface de deploy e o log de auditoria são o mesmo artefato, e toda visão derivada tem um caminho de reconstrução de única etapa. Mantenha essas duas e você troca o dashboard ou o controlador sem quebrar o processo de promoção.
