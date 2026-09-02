---
title: 'VBA Generators — VS Code extension'
slug: 'vba-generators-vscode-extension'
summary: 'Open-source self-service developer tool that generates VBA boilerplate inside VS Code — adopted through 13K+ Marketplace downloads.'
company: 'Personal / open source'
role: 'Author'
dateStart: '2018-08'
dateEnd: '2018-11'
tags: ['Open Source', 'Developer Tooling', 'Self-service']
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

Writing constructors, getters, setters and singleton factories by hand slowed work on a logistics BI pipeline and introduced avoidable errors. Existing VS Code tooling did not support VBA's syntax well enough to remove that toil.

## Approach

I built a VS Code extension that parses class property declarations and generates the matching constructor, accessors and singleton-factory boilerplate on demand, then published the tool and its source for other developers to use.

## Impact

- Over 13,000 downloads on VS Code Marketplace.
- Still maintained as an open-source side project.
- Turned a personal productivity automation into a self-service tool used by other VBA developers.
