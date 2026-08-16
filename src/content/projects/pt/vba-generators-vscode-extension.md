---
title: 'VBA Generators — Extensão para VS Code'
slug: 'vba-generators-vscode-extension'
summary: 'Extensão open source para VS Code que gera construtores, getters/setters e singleton factories a partir de declarações de classes VBA — mais de 13 mil downloads.'
company: 'Pessoal / open source'
role: 'Autor'
dateStart: '2018-08'
dateEnd: '2018-11'
tags: ['Open source', 'Ferramentas para desenvolvedores']
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

Escrever boilerplate VBA à mão — construtores, getters/setters, singleton factories — enquanto o desenvolvimento de uma pipeline de BI de logística era lento e propenso a erros, e nenhuma ferramenta existente no VS Code cobria as particularidades de sintaxe do VBA.

## Abordagem

Uma extensão para VS Code foi escrita para analisar as declarações de propriedades de uma classe e gerar sob demanda o construtor, os acessores e o boilerplate de singleton factory por demanda, resultando na publicação no Marketplace e na abertura o código como open source.

## Impacto

- Mais de 13 mil downloads no VS Code Marketplace.
- Ainda mantida como projeto pessoal open source.
- Transformação de hack pessoal de produtividade em uma ferramenta usada por outros desenvolvedores VBA.
