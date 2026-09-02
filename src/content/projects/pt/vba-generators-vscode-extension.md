---
title: 'VBA Generators — Extensão para VS Code'
slug: 'vba-generators-vscode-extension'
summary: 'Ferramenta self-service open source que gera boilerplate VBA dentro do VS Code — adotada por meio de mais de 13 mil downloads no Marketplace.'
company: 'Pessoal / open source'
role: 'Autor'
dateStart: '2018-08'
dateEnd: '2018-11'
tags: ['Open Source', 'Ferramentas para Desenvolvedores', 'Self-service']
techStack: ['JavaScript', 'Node.js', 'VS Code API']
featured: false
order: 10
links:
  [
    { label: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=davikawasaki.VBGenerators' },
    { label: 'GitHub', url: 'https://github.com/davikawasaki/vb-vscode-generators' },
  ]
lang: 'pt'
---

## Problema

Escrever construtores, getters, setters e singleton factories à mão atrasava o trabalho em um pipeline de BI de logística e introduzia erros evitáveis. As ferramentas existentes no VS Code não suportavam bem a sintaxe do VBA para eliminar esse trabalho repetitivo.

## Abordagem

Construí uma extensão para VS Code que analisa as propriedades de uma classe e gera sob demanda o construtor, os acessores e o boilerplate de singleton factory. Em seguida, publiquei a ferramenta e seu código para uso de outros desenvolvedores.

## Impacto

- Mais de 13 mil downloads no VS Code Marketplace.
- Ainda mantida como projeto pessoal open source.
- Transformação de uma automação pessoal de produtividade em uma ferramenta self-service usada por outros desenvolvedores VBA.
