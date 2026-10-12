export interface Bilingual {
  en: string;
  pt: string;
}

export interface ExperienceEntry {
  company: string;
  role: Bilingual;
  location: Bilingual;
  mode: Bilingual;
  start: string;
  end: string | null;
  bullets: Bilingual[];
}

export const headline: Bilingual = {
  en: 'Senior Platform Engineer & Site Reliability Engineer — Kubernetes, Terraform, GitOps, AWS, GCP and observability',
  pt: 'Senior Platform Engineer & Site Reliability Engineer — Kubernetes, Terraform, GitOps, AWS, GCP e observabilidade',
};

export const location: Bilingual = {
  en: 'Londrina, Paraná, Brazil',
  pt: 'Londrina, Paraná, Brasil',
};

export const availability: Bilingual = {
  en: 'Available for global remote freelance roles · EU citizen with full working rights',
  pt: 'Disponível para vagas freelance remotas globais · Cidadão da UE com permissão de trabalho',
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Toptal',
    role: { en: 'Senior Site Reliability & Platform Engineer', pt: 'Senior Site Reliability & Platform Engineer' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Remote, Contractor', pt: 'Remoto, PJ' },
    start: '2025-08',
    end: '2026-09',
    bullets: [
      {
        en: 'Refactored an internal Python/Flask GitOps platform with Kustomize and GitHub webhooks, cutting aggregate GitHub Actions execution time by approximately one hour per day and enabling granular image updates in multi-container deployments.',
        pt: 'Refatorei uma plataforma interna de GitOps em Python/Flask com Kustomize e webhooks do GitHub, reduzindo em aproximadamente uma hora por dia o tempo agregado de execução do GitHub Actions e permitindo atualizações granulares de imagens em deployments multi-container.',
      },
      {
        en: 'Hardened the platform with repository-level authorization, automatic GitHub OAuth, HMAC-signed webhooks, Firestore caching and ETag-based conditional requests, reducing UI load time to approximately 350 ms.',
        pt: 'Reforcei a plataforma com autorização por repositório, OAuth automático do GitHub, webhooks assinados com HMAC, cache no Firestore e requisições condicionais com ETag, reduzindo o carregamento da interface para aproximadamente 350 ms.',
      },
      {
        en: 'Reduced Google Cloud Artifact Registry storage costs by approximately 19% with a Python lifecycle process that enforced 365-day retention while protecting pinned in-use images; Datadog monitoring also identified three production deployments running outdated versions.',
        pt: 'Reduzi os custos de armazenamento do Google Cloud Artifact Registry em aproximadamente 19% com um processo de ciclo de vida em Python que aplicava retenção de 365 dias sem remover imagens em uso; o monitoramento no Datadog também identificou três deployments de produção desatualizados.',
      },
      {
        en: 'Eliminated approximately 20 minutes of manual validation per development release by implementing automated integration tests for the GitOps platform with Playwright.',
        pt: 'Eliminei aproximadamente 20 minutos de validação manual por release de desenvolvimento ao implementar testes de integração automatizados da plataforma GitOps com Playwright.',
      },
      {
        en: 'Restored Renovate automation for custom runners and base images after approximately one month of stalled pull-request creation, enabling service repositories to adopt newer base-image versions.',
        pt: 'Restaurei a automação do Renovate para runners customizados e imagens base após aproximadamente um mês sem criação de pull requests, permitindo que os repositórios de serviços adotassem versões mais recentes.',
      },
      {
        en: 'Reduced Docker runner image size by 76% and attack surface by 84% through distroless containers and Docker Hardened Images.',
        pt: 'Reduzi o tamanho das imagens Docker dos runners em 76% e a superfície de ataque em 84% por meio de containers distroless e Docker Hardened Images.',
      },
      {
        en: 'Resolved more than 50 Datadog-reported CVEs by rolling out Kubernetes image garbage-collection configuration through Terraform, limiting unused cached images to a maximum age of 24 hours.',
        pt: 'Resolvi mais de 50 CVEs reportadas pelo Datadog ao distribuir via Terraform uma configuração de garbage collection de imagens no Kubernetes, limitando imagens não utilizadas em cache a no máximo 24 horas.',
      },
      {
        en: 'Co-architected the migration of Kafka infrastructure to Terraform, removing approximately 40% of stale resources, retiring legacy release tooling and automating multi-environment deployments with GitHub Actions.',
        pt: 'Co-arquitetei a migração da infraestrutura Kafka para Terraform, removendo aproximadamente 40% dos recursos obsoletos, aposentando ferramentas legadas de release e automatizando deployments multiambiente com GitHub Actions.',
      },
      {
        en: 'Decoupled application and infrastructure delivery by moving Kubernetes manifests into dedicated GitOps repositories and implementing Argo CD ApplicationSets for environment-based deployments.',
        pt: 'Desacoplei a entrega de aplicações e infraestrutura ao mover manifestos Kubernetes para repositórios GitOps dedicados e implementar ApplicationSets do Argo CD para deployments baseados em ambiente.',
      },
    ],
  },
  {
    company: 'Kawasaki Web Soluções',
    role: { en: 'Independent Consultant', pt: 'Consultor Independente' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Remote (Global), Self-employed', pt: 'Remoto (Global), PJ' },
    start: '2020-02',
    end: null,
    bullets: [
      {
        en: 'Reduced Kubernetes observability infrastructure costs and resource consumption by 20% by centralizing logs, metrics and distributed traces in a dedicated AWS cluster using Grafana, Loki, Tempo, Mimir and Helm.',
        pt: 'Reduzi em 20% os custos e o consumo de recursos da infraestrutura de observabilidade Kubernetes ao centralizar logs, métricas e traces distribuídos em um cluster dedicado na AWS com Grafana, Loki, Tempo, Mimir e Helm.',
      },
      {
        en: 'Global workflow standards: refactored and documented multi-repository GitHub CI/CD workflows as reusable self-service templates, reducing developer friction and supporting async collaboration.',
        pt: 'Padrões globais de workflow: refatorei e documentei workflows de CI/CD do GitHub para múltiplos repositórios como templates self-service reutilizáveis, reduzindo o atrito operacional e apoiando a colaboração assíncrona.',
      },
      {
        en: 'Orchestrated the migration of more than five legacy applications from on-premises infrastructure to AWS and GCP, improving availability and data consistency while reducing infrastructure-related incidents by 30%.',
        pt: 'Orquestrei a migração de mais de cinco aplicações legadas de infraestrutura on-premises para AWS e GCP, melhorando disponibilidade e consistência de dados enquanto reduzia em 30% incidentes relacionados à infraestrutura.',
      },
      {
        en: 'Deployed sharded Redis clusters on AWS for a real-estate startup, improving website First Contentful Paint (FCP) by 2 seconds.',
        pt: 'Implantei clusters Redis com sharding na AWS para uma startup imobiliária, melhorando o First Contentful Paint (FCP) do site em 2 segundos.',
      },
      {
        en: 'Developed automated integration tests with Postman, Newman and MFA for a fintech startup, accelerating the detection and resolution of microservice defects.',
        pt: 'Desenvolvi testes de integração automatizados com Postman, Newman e MFA para uma startup de fintech, acelerando a detecção e a resolução de falhas em microsserviços.',
      },
      {
        en: 'Published test metrics to Prometheus over mTLS and built custom Grafana dashboards, giving fintech engineering teams actionable quality signals.',
        pt: 'Publiquei métricas de testes no Prometheus via mTLS e construí dashboards customizados no Grafana, oferecendo sinais acionáveis de qualidade aos times de engenharia da fintech.',
      },
      {
        en: 'Replaced Google Maps with Mapbox in a React.js application for a real-estate startup, reducing geolocation-service costs by approximately 30%.',
        pt: 'Substituí o Google Maps pelo Mapbox em uma aplicação React.js de uma startup imobiliária, reduzindo os custos do serviço de geolocalização em aproximadamente 30%.',
      },
      {
        en: 'Led technical architecture, DevOps and full-stack engineering for an early-stage startup, scaling and mentoring three distributed remote teams through written specifications, asynchronous workflows and structured Agile delivery.',
        pt: 'Liderei arquitetura técnica, DevOps e engenharia full stack para uma startup em estágio inicial, escalando e mentorando três times remotos distribuídos com especificações escritas, fluxos assíncronos e entrega Agile estruturada.',
      },
      {
        en: 'Introduced semantic versioning and automated GitHub Actions release workflows, reducing manual deployment effort by approximately two developer-days per week.',
        pt: 'Introduzi versionamento semântico e automação de releases com GitHub Actions, reduzindo o esforço manual de deployment em aproximadamente dois dias de trabalho de desenvolvedor por semana.',
      },
      {
        en: 'Enriched application logs with user metadata and centralized them in AWS Elasticsearch through Filebeat and Logstash, increasing business visibility into website behavior by approximately 50%.',
        pt: 'Enriqueci logs de aplicação com metadados de usuários e os centralizei no AWS Elasticsearch por meio de Filebeat e Logstash, aumentando em aproximadamente 50% a visibilidade do negócio sobre o comportamento no site.',
      },
    ],
  },
  {
    company: 'Arista Networks',
    role: { en: 'Senior DevOps & Site Reliability Engineer', pt: 'Senior DevOps & Site Reliability Engineer' },
    location: { en: 'Dublin, Ireland', pt: 'Dublin, Irlanda' },
    mode: { en: 'Remote (Ireland), Contractor', pt: 'Remoto (Irlanda), PJ' },
    start: '2023-08',
    end: '2025-08',
    bullets: [
      {
        en: 'Async incident response and DR: engineered zero-touch disaster recovery for the main corporate website with Python and GitHub Actions, cutting execution from hours to under 10 minutes and authoring runbooks for global on-call teams.',
        pt: 'Resposta assíncrona a incidentes e DR: desenvolvi a recuperação de desastre zero-touch do site corporativo principal com Python e GitHub Actions, reduzindo a execução de horas para menos de 10 minutos e escrevendo runbooks para times globais de on-call.',
      },
      {
        en: 'Resolved recurring website downtime through on-call incident response and postmortem root-cause analysis, implementing VCL-based RSS caching and malicious-IP blocklisting that prevented recurrence during the next similar event.',
        pt: 'Resolvi indisponibilidades recorrentes do site por meio de resposta on-call e análise de causa raiz pós-incidente, implementando cache de RSS baseado em VCL e bloqueio de IPs maliciosos que evitaram recorrência no evento semelhante seguinte.',
      },
      {
        en: 'Infrastructure as Code self-service: designed a scalable Docker-based Jenkins cluster that used Terraform and Ansible to provision cloud VMs dynamically, reducing development environment setup to 15 minutes.',
        pt: 'Self-service com Infraestrutura como Código: projetei um cluster Jenkins escalável em Docker que usava Terraform e Ansible para provisionar VMs na nuvem dinamicamente, reduzindo a criação de ambientes de desenvolvimento para 15 minutos.',
      },
      {
        en: 'Security and compliance automation: developed Ansible playbooks and GitHub Actions pipelines for DKIM key renewal across distributed Postfix infrastructure, reducing manual risk and execution time to under 5 minutes.',
        pt: 'Automação de segurança e compliance: desenvolvi playbooks Ansible e pipelines do GitHub Actions para renovar chaves DKIM em uma infraestrutura Postfix distribuída, reduzindo riscos manuais e o tempo de execução para menos de 5 minutos.',
      },
      {
        en: 'Custom tooling: created a Python plugin for Ansible that dynamically redacted sensitive telemetry payloads, strengthening internal data-privacy controls.',
        pt: 'Ferramentas internas: criei um plugin Python para Ansible que removia dinamicamente dados sensíveis de payloads de telemetria, reforçando os controles internos de privacidade.',
      },
      {
        en: 'Standardized reusable GitHub Actions CI/CD workflows, simplifying pipeline maintenance and deployments across teams.',
        pt: 'Padronizei workflows reutilizáveis de CI/CD no GitHub Actions, simplificando a manutenção de pipelines e deployments entre times.',
      },
      {
        en: 'Led the automation team’s Jira delivery process, coordinating priorities, technical discussions and task ownership while contributing to a 20% productivity improvement.',
        pt: 'Liderei o processo de entrega do time de automação no Jira, coordenando prioridades, discussões técnicas e responsabilidades, contribuindo para uma melhoria de 20% na produtividade.',
      },
      {
        en: 'Coordinated technical engagements with AWS, HashiCorp and Fastly, aligning internal requirements with vendor support, training and solution adoption.',
        pt: 'Coordenei iniciativas técnicas com AWS, HashiCorp e Fastly, alinhando requisitos internos com suporte de fornecedores, treinamentos e adoção de soluções.',
      },
    ],
  },
  {
    company: 'Starops',
    role: { en: 'DevOps & Data Engineer', pt: 'Engenheiro DevOps & Data' },
    location: { en: 'San Diego, USA', pt: 'San Diego, EUA' },
    mode: { en: 'Remote (Brazil), Contractor', pt: 'Remoto (Brasil), PJ' },
    start: '2021-09',
    end: '2023-08',
    bullets: [
      {
        en: 'Implemented Keycloak SSO with OIDC for Vue.js and Node.js applications, standardising social and enterprise authentication across products.',
        pt: 'Implementei SSO com Keycloak e OIDC em aplicações Vue.js e Node.js, padronizando a autenticação social e corporativa entre produtos.',
      },
      {
        en: 'Migrated 100% of active legacy users to Keycloak through an automated email-based password-reset workflow, completing the identity transition without account loss.',
        pt: 'Migrei 100% dos usuários legados ativos para o Keycloak por meio de um fluxo automatizado de redefinição de senha por e-mail, concluindo a transição de identidade sem perda de contas.',
      },
      {
        en: 'Built reusable Terraform modules for AWS and GCP environments designed around HIPAA and GDPR requirements, accelerating new-client infrastructure bootstrap by 20%.',
        pt: 'Construí módulos Terraform reutilizáveis para ambientes AWS e GCP alinhados a requisitos de HIPAA e GDPR, acelerando em 20% o bootstrap de infraestrutura para novos clientes.',
      },
      {
        en: 'Enabled client microservices to reach Kubernetes production in under two weeks by architecting versioned Terraform environments and automating infrastructure delivery with GitHub Actions and semantic versioning.',
        pt: 'Permiti que microsserviços de clientes chegassem à produção no Kubernetes em menos de duas semanas ao arquitetar ambientes Terraform versionados e ao automatizar a entrega de infraestrutura com GitHub Actions e versionamento semântico.',
      },
      {
        en: 'Co-architected an Argo CD GitOps delivery model on Kubernetes, standardizing application release and rollback procedures across stakeholders.',
        pt: 'Co-arquitetei um modelo de entrega GitOps com Argo CD no Kubernetes, padronizando procedimentos de release e rollback entre stakeholders.',
      },
      {
        en: 'Rebuilt a POS data pipeline from MongoDB to BigQuery with Apache Beam and Python, processing 20M+ records five times per day in under 20 minutes.',
        pt: 'Reconstruí um pipeline de dados de PDV do MongoDB para o BigQuery com Apache Beam e Python, processando mais de 20M de registros cinco vezes ao dia em menos de 20 minutos.',
      },
      {
        en: 'Architected a Koa.js API with Jest unit tests to encrypt proprietary image data before external transmission, protecting sensitive data and meeting compliance requirements.',
        pt: 'Arquitetei uma API em Koa.js com testes unitários em Jest para criptografar dados proprietários de imagem antes da transmissão externa, protegendo dados sensíveis e atendendo a requisitos de compliance.',
      },
    ],
  },
  {
    company: 'Dextra (CI&T)',
    role: { en: 'Senior Software Engineer / DevOps Engineer', pt: 'Senior Software Engineer / DevOps Engineer' },
    location: { en: 'Curitiba, Brazil', pt: 'Curitiba, Brasil' },
    mode: { en: 'Remote (Brazil), FTE', pt: 'Remoto (Brasil), CLT' },
    start: '2020-08',
    end: '2021-09',
    bullets: [
      {
        en: 'Accelerated AWS environment provisioning from weeks to days through reusable Terraform infrastructure and automated GitHub and GitLab CI/CD pipelines supporting HIPAA-regulated healthcare workloads.',
        pt: 'Acelerei o provisionamento de ambientes AWS de semanas para dias com infraestrutura Terraform reutilizável e pipelines automatizados de CI/CD no GitHub e GitLab para workloads de healthcare regulados pela HIPAA.',
      },
      {
        en: 'Increased automated test coverage by 45% while developing Node.js API microservices with Mocha and Sinon for international healthcare platforms.',
        pt: 'Aumentei a cobertura de testes automatizados em 45% ao desenvolver microsserviços de API em Node.js com Mocha e Sinon para plataformas internacionais de healthcare.',
      },
      {
        en: 'Collaborated across three global Agile teams on application architecture, DevOps and backend delivery through pair programming and code reviews.',
        pt: 'Colaborei com três times Agile globais em arquitetura de aplicações, DevOps e entrega backend por meio de programação em pares e revisões de código.',
      },
      {
        en: 'Mentored engineers across international healthcare projects, supporting technical design, implementation and engineering best practices.',
        pt: 'Mentorei engenheiros em projetos internacionais de healthcare, apoiando em projetos técnicos, implementações e boas práticas de engenharia.',
      },
    ],
  },
  {
    company: 'DSV — Global Transport and Logistics',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    location: { en: 'Horsens, Denmark', pt: 'Horsens, Dinamarca' },
    mode: { en: 'On-site (Denmark), FTE', pt: 'Presencial (Dinamarca), CLT' },
    start: '2018-07',
    end: '2019-12',
    bullets: [
      {
        en: 'Architected a parallel BI pipeline with .NET Core, Parallel LINQ and SQL Server to ingest European logistics data and support route-optimisation decisions.',
        pt: 'Arquitetei um pipeline paralelo de BI com .NET Core, Parallel LINQ e SQL Server para ingerir dados logísticos europeus e apoiar decisões de otimização de rotas.',
      },
      {
        en: 'Published an open-source VS Code extension that generates VBA constructors and singleton factories, reaching more than 13,000 Marketplace downloads.',
        pt: 'Publiquei uma extensão open source para VS Code que gera construtores e singleton factories em VBA, alcançando mais de 13 mil downloads no Marketplace.',
      },
      {
        en: 'Unified backend automations in a central React.js dashboard that enabled operations teams to manage Laravel back-office job queues.',
        pt: 'Unifiquei automações de backend em um dashboard React.js centralizado, permitindo que times de operações gerenciassem filas de jobs do back-office em Laravel.',
      },
      {
        en: 'Designed robotic process automations with Kofax Kapow and Selenium, enabling freight forwarders to manage workflows directly at the business level.',
        pt: 'Projetei automações de processos com Kofax Kapow e Selenium, permitindo que agentes de carga gerenciassem workflows diretamente no nível de negócio.',
      },
      {
        en: 'Contributed to an automation program associated with a management-reported 54.7% improvement in process performance and efficiency and 4.8% EBIT growth.',
        pt: 'Contribuí para um programa de automação associado a uma melhoria de 54,7% em desempenho e eficiência de processos e a um crescimento de 4,8% no EBIT, segundo dados da gestão.',
      },
    ],
  },
  {
    company: 'Let’s Comunicação e Desenvolvimento',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Hybrid (Brazil), Part-time', pt: 'Híbrido (Brasil), Part-time' },
    start: '2018-02',
    end: '2018-06',
    bullets: [
      {
        en: 'Delivered front-end, backend and infrastructure work for startup clients using AngularJS, LoopBack, Gulp and Jenkins across DigitalOcean and Linode environments.',
        pt: 'Entreguei soluções de front-end, backend e infraestrutura para clientes startups usando AngularJS, LoopBack, Gulp e Jenkins em ambientes DigitalOcean e Linode.',
      },
      {
        en: 'Improved maintainability through reusable AngularJS and LoopBack component modularization across private repositories.',
        pt: 'Melhorei a manutenibilidade por meio da modularização reutilizável de componentes AngularJS e LoopBack em repositórios privados.',
      },
      {
        en: 'Standardized application delivery by automating deployments with Gulp and Jenkins across DigitalOcean and Linode infrastructure.',
        pt: 'Padronizei a entrega de aplicações ao automatizar deployments com Gulp e Jenkins em infraestruturas DigitalOcean e Linode.',
      },
      {
        en: 'Collaborated with distributed teams on technical planning, delivery, training and knowledge sharing through Redmine, Slack and remote-first workflows.',
        pt: 'Colaborei com times distribuídos no planejamento técnico, entrega, treinamento e compartilhamento de conhecimento por meio de Redmine, Slack e fluxos remotos.',
      },
    ],
  },
  {
    company: 'RAIS Saúde',
    role: { en: 'Co-founder / Full Stack Developer', pt: 'Cofundador / Desenvolvedor Full Stack' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Hybrid (Brazil), Partner', pt: 'Híbrido (Brasil), Sócio' },
    start: '2016-01',
    end: '2017-06',
    bullets: [
      {
        en: 'Co-founded a healthcare technology startup and led full-stack application architecture, translating customer requirements and user flows into production software.',
        pt: 'Cofundei uma startup de tecnologia para healthcare e liderei a arquitetura full stack, traduzindo requisitos de clientes e fluxos de usuários em software de produção.',
      },
      {
        en: 'Developed AngularJS and JavaScript frontend apps with Jasmine tests, converting wireframes and UX requirements into reusable interfaces.',
        pt: 'Desenvolvi aplicações frontend em AngularJS e JavaScript com testes em Jasmine, convertendo wireframes e requisitos de UX em interfaces reutilizáveis.',
      },
      {
        en: 'Built backend services with Java and Spring MVC and contributed to architecture, code reviews, pair programming and technical documentation.',
        pt: 'Construí serviços backend com Java e Spring MVC e contribuí com arquitetura, revisões de código, programação em pares e documentação técnica.',
      },
      {
        en: 'Automated build and deployment workflows with Gulp and Jenkins across IBM Bluemix, AWS and Microsoft Azure.',
        pt: 'Automatizei fluxos de build e deployment com Gulp e Jenkins em IBM Bluemix, AWS e Microsoft Azure.',
      },
    ],
  },
  {
    company: 'Ligue Site',
    role: { en: 'Frontend Engineer', pt: 'Engenheiro Frontend' },
    location: { en: 'Cornélio Procópio, Brazil', pt: 'Cornélio Procópio, Brasil' },
    mode: { en: 'Hybrid (Brazil), Internship', pt: 'Híbrido (Brasil), Estágio' },
    start: '2012-10',
    end: '2015-07',
    bullets: [
      {
        en: 'Built marketing websites and digital campaigns with HTML, CSS, JavaScript, Facebook Ads and Google Analytics while supporting client acquisition and account service.',
        pt: 'Desenvolvi sites de marketing e campanhas digitais com HTML, CSS, JavaScript, Facebook Ads e Google Analytics, além de apoiar a prospecção e o atendimento a clientes.',
      },
    ],
  },
];

export const education = [
  {
    school: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    degree: { en: 'Bachelor of Engineering, Computer Engineering', pt: 'Bacharelado em Engenharia da Computação' },
    period: '2014 – 2018',
  },
  {
    school: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    degree: { en: 'Technical Diploma, Electrotechnics', pt: 'Técnico em Eletrotécnica' },
    period: '2010 – 2013',
  },
];

export const certifications: Bilingual[] = [
  { en: 'Google Cloud Platform Solutions Architect (2024-2027)', pt: 'Google Cloud Platform Solutions Architect (2024-2027)' },
  { en: 'GCP Professional Data Engineer (2023-2025)', pt: 'GCP Professional Data Engineer (2023-2025)' },
];

export const languageProficiency = [
  { language: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' } },
  { language: { en: 'English', pt: 'Inglês' }, level: { en: 'Full professional', pt: 'Fluente' } },
  { language: { en: 'Danish', pt: 'Dinamarquês' }, level: { en: 'Elementary', pt: 'Básico' } },
  { language: { en: 'Spanish', pt: 'Espanhol' }, level: { en: 'Limited working', pt: 'Intermediário' } },
];

export const topSkills = ['Platform Engineering', 'Kubernetes', 'Terraform', 'GitOps', 'Observability'];

export const skillGroups: { title: Bilingual; items: string[] }[] = [
  {
    title: { en: 'Infrastructure & IaC', pt: 'Infraestrutura & IaC' },
    items: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Azure', 'Docker'],
  },
  {
    title: { en: 'Platform, IDP & GitOps', pt: 'Plataforma, IDP & GitOps' },
    items: ['Kubernetes', 'Argo CD', 'Kustomize', 'Helm', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Renovate', 'Developer self-service'],
  },
  {
    title: { en: 'Observability', pt: 'Observabilidade' },
    items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Loki', 'Tempo', 'Mimir', 'Datadog', 'Elasticsearch'],
  },
  {
    title: { en: 'Software, Data & Security', pt: 'Software, Dados & Segurança' },
    items: ['Python', 'Node.js', 'JavaScript', 'Java', '.NET Core', 'Apache Beam', 'BigQuery', 'Kafka', 'Redis', 'PostgreSQL', 'Keycloak / OIDC', 'mTLS', 'Bash'],
  },
];

export interface EarlierVenture {
  title: string;
  description: Bilingual;
  period: string;
  url?: string;
}

export const earlierVentures: EarlierVenture[] = [
  {
    title: 'VBA Generators — VS Code Extension',
    description: {
      en: 'Built and published an open-source extension that generates VBA constructors, accessors and singleton factories, reaching 13K+ downloads.',
      pt: 'Desenvolvi e publiquei uma extensão open source que gera construtores, acessores e singleton factories em VBA, alcançando mais de 13 mil downloads.',
    },
    period: '2018',
    url: 'https://marketplace.visualstudio.com/items?itemName=davikawasaki.VBGenerators',
  },
  {
    title: 'ELLP Group',
    description: {
      en: 'Co-founded a volunteer technology-education group recognised by Mapa Educação in 2015 among Brazil’s 100 leading education projects.',
      pt: 'Cofundei um grupo voluntário de educação tecnológica reconhecido pelo Mapa Educação em 2015 entre os 100 principais projetos para a educação brasileira.',
    },
    period: '2014 – 2016',
    url: 'http://grupoellp.com.br/',
  },
  {
    title: '1st place — TOTVS Agribusiness Hackathon',
    description: {
      en: 'Built an Intel Edison IoT irrigation-monitoring solution that won first place among 28 teams.',
      pt: 'Desenvolvi uma solução IoT de monitoramento de irrigação com Intel Edison que conquistou o primeiro lugar entre 28 equipes.',
    },
    period: '2015',
  },
  {
    title: '1st place — Urban Mobility Hackathon (ECO.TI)',
    description: {
      en: "Built an Arduino UDOO check-in and GPS-tracking system for Londrina's bus network, winning first place.",
      pt: 'Desenvolvi um sistema de check-in e rastreamento por GPS com Arduino UDOO para a rede de ônibus de Londrina, conquistando o primeiro lugar.',
    },
    period: '2015',
  },
  {
    title: 'Conte um Conto',
    description: {
      en: 'Co-founded a volunteer web platform that helped low-income students in Brazil develop reading and writing skills.',
      pt: 'Cofundei uma plataforma web voluntária que ajudou estudantes de baixa renda no Brasil a desenvolver habilidades de leitura e escrita.',
    },
    period: '2017 – 2018',
  },
  {
    title: 'Arrhythmia ECG Recognition',
    description: {
      en: 'Developed an ECG arrhythmia classifier using discrete wavelet transforms and machine learning, achieving 97.9% SVM accuracy.',
      pt: 'Desenvolvi um classificador de arritmias em sinais de ECG com transformada wavelet discreta e machine learning, alcançando 97,9% de acurácia com SVM.',
    },
    period: '2017',
    url: 'https://github.com/davikawasaki/arrhythmia-ecg-analysis-ai',
  },
  {
    title: 'Computer-theme Question Classification (Thesis)',
    description: {
      en: 'Developed an NLP classifier for computer-science exam questions, achieving 83% precision with Multinomial Naive Bayes.',
      pt: 'Desenvolvi um classificador de questões de computação com NLP, alcançando 83% de precisão com Multinomial Naive Bayes.',
    },
    period: '2017',
    url: 'https://github.com/davikawasaki/utfpr-ce-undergrad-final-project',
  },
  {
    title: 'Rotary Club Recognition',
    description: {
      en: 'Recognized as best Computer Engineering student in Cornélio Procópio, Brazil.',
      pt: 'Reconhecido como melhor aluno de Engenharia da Computação em Cornélio Procópio, Brasil.',
    },
    period: '2017',
  },
];
