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
  en: 'Senior Site Reliability & Platform Engineer — self-service infrastructure, GitOps and developer experience',
  pt: 'Senior Site Reliability & Platform Engineer — infraestrutura self-service, GitOps e experiência do desenvolvedor',
};

export const location: Bilingual = {
  en: 'Londrina, Paraná, Brazil',
  pt: 'Londrina, Paraná, Brasil',
};

export const availability: Bilingual = {
  en: 'Available for global remote roles · EU citizen with full working rights',
  pt: 'Disponível para vagas remotas globais · Cidadão da UE com direito pleno ao trabalho',
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Toptal',
    role: { en: 'Senior Site Reliability & Platform Engineer', pt: 'Senior Site Reliability & Platform Engineer' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Remote, Contractor', pt: 'Remoto, PJ' },
    start: '2025-08',
    end: null,
    bullets: [
      {
        en: 'Internal Platform Engineering: co-architected the import of legacy Kafka resources into Terraform, replacing an outdated deployment application with automated, version-controlled self-service infrastructure pipelines.',
        pt: 'Engenharia de Plataforma Interna: co-arquitetei a importação de recursos Kafka legados para Terraform, substituindo uma aplicação de deploy obsoleta por pipelines de infraestrutura self-service, automatizados e versionados.',
      },
      {
        en: 'Developer Experience (IDP): refactored a mission-critical internal GitOps application to support multiple Kustomize images per deployment and surface near-real-time versions through automated GitHub history polling.',
        pt: 'Experiência do Desenvolvedor (IDP): refatorei uma aplicação interna crítica de GitOps para suportar múltiplas imagens do Kustomize por deployment e exibir versões próximas do tempo real por meio de consultas automatizadas ao histórico do GitHub.',
      },
      {
        en: 'Architecture isolation: decoupled application code from Kubernetes configuration and designed ArgoCD ApplicationSets with environment-based promotion, enabling cross-functional teams to deploy autonomously.',
        pt: 'Isolamento de arquitetura: desacoplei o código das aplicações das configurações Kubernetes e projetei ApplicationSets do ArgoCD com promoção por ambiente, permitindo deploys autônomos por times multifuncionais.',
      },
    ],
  },
  {
    company: 'Kawasaki Web Soluções',
    role: { en: 'IT Consultant / Tech Lead', pt: 'Consultor de TI / Tech Lead' },
    location: { en: 'Londrina, Brazil', pt: 'Londrina, Brasil' },
    mode: { en: 'Remote (Global), Self-employed', pt: 'Remoto (Global), PJ' },
    start: '2020-02',
    end: null,
    bullets: [
      {
        en: 'Unified telemetry systems: built production-ready Grafana/LGTM stacks that aggregate logs, distributed traces and metrics from multiple Kubernetes clusters, reducing AWS costs and simplifying cross-environment operations.',
        pt: 'Sistemas unificados de telemetria: construí stacks Grafana/LGTM prontas para produção que agregam logs, traces distribuídos e métricas de múltiplos clusters Kubernetes, reduzindo custos de AWS e simplificando operações entre ambientes.',
      },
      {
        en: 'Global workflow standards: refactored and documented multi-repository GitHub CI/CD workflows as reusable self-service templates, reducing developer friction and supporting async collaboration.',
        pt: 'Padrões globais de workflow: refatorei e documentei workflows de CI/CD do GitHub para múltiplos repositórios como templates self-service reutilizáveis, reduzindo o atrito operacional e apoiando a colaboração assíncrona.',
      },
      {
        en: 'Migrated legacy on-premises systems to AWS and GCP for startup clients, increasing scalability and availability.',
        pt: 'Migrei sistemas legados on-premises de clientes startups para AWS e GCP, aumentando a escalabilidade e a disponibilidade.',
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
        en: 'E-commerce startup: led technical architecture and mentored three globally distributed remote teams using written specifications and async-first working practices.',
        pt: 'Startup de e-commerce: liderei a arquitetura técnica e mentorei três times remotos distribuídos globalmente usando especificações escritas e práticas de trabalho async-first.',
      },
      {
        en: 'Introduced semantic versioning and GitHub-based release automation across startup teams, saving developers days of manual deployment work each week.',
        pt: 'Introduzi versionamento semântico e automação de releases via GitHub em times de startups, economizando dias de trabalho manual de deploy por semana.',
      },
      {
        en: 'Restructured application logs with richer user metadata and shipped them through Filebeat and Logstash to Elasticsearch on AWS, increasing business-user insights by 50%.',
        pt: 'Reestruturei logs de aplicação com metadados de usuário mais ricos e os enviei via Filebeat e Logstash para o Elasticsearch na AWS, aumentando em 50% os insights para usuários de negócio.',
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
        en: 'Authored secure, reusable and documented Terraform infrastructure modules that gave development clients a standardised self-service path for cloud environment provisioning on AWS and GCP.',
        pt: 'Criei módulos de infraestrutura Terraform seguros, reutilizáveis e documentados, oferecendo aos clientes de desenvolvimento um caminho self-service padronizado para provisionar ambientes na AWS e GCP.',
      },
      {
        en: 'Led GitOps adoption with ArgoCD on Kubernetes, enabling transparent releases, seamless rollbacks and self-healing deployments for product teams.',
        pt: 'Liderei a adoção de GitOps com ArgoCD no Kubernetes, permitindo releases transparentes, rollbacks simples e deploys com self-healing para os times de produto.',
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
    company: 'Dextra',
    role: { en: 'Senior Software Engineer II', pt: 'Senior Software Engineer II' },
    location: { en: 'Curitiba, Brazil', pt: 'Curitiba, Brasil' },
    mode: { en: 'Remote (Brazil), FTE', pt: 'Remoto (Brasil), CLT' },
    start: '2021-06',
    end: '2021-09',
    bullets: [
      {
        en: 'Contributed to an international DevOps and backend project through architecture design, pair programming, code reviews and engineering mentorship.',
        pt: 'Contribuí para um projeto internacional de DevOps e backend por meio de definição de arquitetura, programação em pares, revisão de código e mentoria de engenharia.',
      },
    ],
  },
  {
    company: 'Dextra',
    role: { en: 'Senior Software Engineer I', pt: 'Senior Software Engineer I' },
    location: { en: 'Curitiba, Brazil', pt: 'Curitiba, Brasil' },
    mode: { en: 'Remote (Brazil), FTE', pt: 'Remoto (Brasil), CLT' },
    start: '2020-08',
    end: '2021-06',
    bullets: [
      {
        en: 'Introduced automated environment bootstrapping with Terraform and custom GitLab CI pipelines, shortening AWS application-environment turnaround from weeks to days.',
        pt: 'Introduzi o bootstrapping automatizado de ambientes com Terraform e pipelines customizados do GitLab CI, reduzindo de semanas para dias a preparação de ambientes de aplicação na AWS.',
      },
      {
        en: 'Developed trait-based Node.js microservices with Mocha and Sinon test coverage, collaborating with three global teams in an Agile delivery environment.',
        pt: 'Desenvolvi microsserviços Node.js orientados a traits com cobertura de testes em Mocha e Sinon, colaborando com três times globais em um ambiente de entrega ágil.',
      },
    ],
  },
  {
    company: 'DSV — Global Transport and Logistics',
    role: { en: 'Backend Engineer / IT Specialist', pt: 'Engenheiro Backend / Especialista de TI' },
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
        en: 'Improved process efficiency by 54.7% and contributed to 4.8% EBIT growth through automation and operational optimisation.',
        pt: 'Aumentei a eficiência dos processos em 54,7% e contribuí para um crescimento de 4,8% no EBIT por meio de automação e otimização operacional.',
      },
    ],
  },
  {
    company: 'Let’s Comunicação e Desenvolvimento',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
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
        en: 'Contributed to three startup products — MedMobi Crônicos, AVP and Farmdome — across application development and deployment automation.',
        pt: 'Contribuí para três produtos de startups — MedMobi Crônicos, AVP e Farmdome — em desenvolvimento de aplicações e automação de deploy.',
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
        en: 'Co-founded a health-tech startup and delivered the product end to end, from customer discovery and wireframes to AngularJS and Spring MVC development, automated testing and cloud deployment on AWS and Azure.',
        pt: 'Cofundei uma startup de health-tech e entreguei o produto de ponta a ponta, da descoberta com clientes e wireframes ao desenvolvimento com AngularJS e Spring MVC, testes automatizados e deploy na AWS e Azure.',
      },
    ],
  },
  {
    company: 'Ligue Site Cornélio Procópio',
    role: { en: 'Web Designer', pt: 'Web Designer' },
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
  { en: 'GCP Professional Cloud Architect (2024-2026)', pt: 'GCP Professional Cloud Architect (2024-2026)' },
  { en: 'GCP Professional Data Engineer (2023-2025)', pt: 'GCP Professional Data Engineer (2023-2025)' },
  { en: 'AWS Certified Cloud Practitioner (2022-2024)', pt: 'AWS Certified Cloud Practitioner (2022-2024)' },
  { en: 'HIPAA Training (2021)', pt: 'Treinamento HIPAA (2021)' },
];

export const languageProficiency = [
  { language: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' } },
  { language: { en: 'English', pt: 'Inglês' }, level: { en: 'Full professional', pt: 'Fluente' } },
  { language: { en: 'Danish', pt: 'Dinamarquês' }, level: { en: 'Elementary', pt: 'Básico' } },
  { language: { en: 'Japanese', pt: 'Japonês' }, level: { en: 'Elementary', pt: 'Básico' } },
  { language: { en: 'Spanish', pt: 'Espanhol' }, level: { en: 'Limited working', pt: 'Intermediário' } },
];

export const topSkills = ['Platform Engineering', 'Terraform', 'Kubernetes', 'GitOps'];

export const skillGroups: { title: Bilingual; items: string[] }[] = [
  {
    title: { en: 'Infrastructure & IaC', pt: 'Infraestrutura & IaC' },
    items: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Azure', 'Docker'],
  },
  {
    title: { en: 'Platform, IDP & GitOps', pt: 'Plataforma, IDP & GitOps' },
    items: ['Kubernetes', 'ArgoCD', 'Kustomize', 'Helm', 'Jenkins', 'GitHub Actions', 'Developer self-service'],
  },
  {
    title: { en: 'Observability', pt: 'Observabilidade' },
    items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Datadog', 'Elasticsearch', 'Filebeat / Logstash'],
  },
  {
    title: { en: 'Languages & Data', pt: 'Linguagens & Dados' },
    items: ['Python', 'Node.js', 'TypeScript', 'Rails', 'Apache Beam', 'BigQuery', 'SQL', 'Bash'],
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
