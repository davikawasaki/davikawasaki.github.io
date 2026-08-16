---
title: 'VBA Generators — VS Code extension'
slug: 'vba-generators-vscode-extension'
summary: 'Open-source VS Code extension that generates constructors, getters/setters and singleton factories from VBA class declarations — 13K+ downloads.'
company: 'Personal / open source'
role: 'Author'
dateStart: '2018-08'
dateEnd: '2018-11'
tags: ['Open source', 'Developer tooling']
techStack: ['JavaScript', 'Node.js', 'VS Code API']
featured: false
order: 10
links:
  [
    { label: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=davikawasaki.VBGenerators' },
    { label: 'GitHub', url: 'https://github.com/davikawasaki/vb-vscode-generators' },
  ]
lang: 'en'
---

## Problem

Writing boilerplate VBA by hand — constructors, getters/setters, singleton factories — while development of a a logistics BI pipeline was slow and error-prone, and no existing VS Code tooling covered VBA's syntax quirks.

## Approach

VS Code extension was written to parse a class's property declarations and to generate the matching constructor, accessors and singleton-factory boilerplate on demand, resulting in Marketplace publisha and open-sourced the code.

## Impact

- Over 13,000 downloads on VS Code Marketplace.
- Still maintained as an open-source side project.
- Turned a personal productivity hack into a tool other VBA developers rely on.
