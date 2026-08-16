export interface Bilingual {
  en: string;
  pt: string;
}

export interface ExperienceEntry {
  company: string;
  role: Bilingual;
  location: string;
  mode: Bilingual;
  start: string;
  end: string | null;
  bullets: Bilingual[];
}

export const headline: Bilingual = {
  en: 'Senior DevOps & SRE — Terraform, Kubernetes, GitOps, GCP & AWS',
  pt: 'Senior DevOps & SRE — Terraform, Kubernetes, GitOps, GCP e AWS',
};

export const location = 'Londrina, Paraná, Brazil';

export const experience: ExperienceEntry[] = [
  {
    company: 'Adeva',
    role: { en: 'Senior Site Reliability Engineer', pt: 'Senior Site Reliability Engineer' },
    location: 'Düsseldorf / Germany',
    mode: { en: 'Remote (Brazil), Contractor', pt: 'Remoto (Brasil), PJ' },
    start: '2025-09',
    end: null,
    bullets: [
      {
        en: 'Allocated to the Fashion Digital client, collaborating with SRE and Cloud Engineering teams.',
        pt: 'Alocado no cliente Fashion Digital, colaborando com os times de SRE e Cloud Engineering.',
      },
      {
        en: 'Project co-architecture to import Kafka resources into Terraform, deprecating an outdated deployment application, versioning multi-environment resources, and automating deployment with infrastructure as code.',
        pt: 'Co-arquitetura de projeto para importar recursos do Kafka para Terraform, depreciando uma aplicação de deploy desatualizada, versionando recursos multi-ambiente e automatizando o deploy com infraestrutura como código.',
      },
      {
        en: 'Internal GitOps deployment application refactor to apply Kustomize with multiple images in the same deployment and to get real-time version updates across all company-wide microservice projects.',
        pt: 'Refatoração de aplicação interna de deploy GitOps para aplicar Kustomize com múltiplas imagens no mesmo deployment e para obter atualizações de versões em tempo real por todos os projetos de microsserviços da empresa.',
      },
      {
        en: 'Microservice projects refactor to move Kubernetes manifests into separate repositories, splitting infrastructure responsibility and setting up ArgoCD ApplicationSets with environment-based promotion.',
        pt: 'Refatoração de projetos de microsserviços para mover manifestos Kubernetes em repositórios separados, dividindo a responsabilidade de infraestrutura e configurando ApplicationSets de ArgoCD com promoções por ambientes.',
      },
    ],
  },
  {
    company: 'Kawasaki Web Soluções',
    role: { en: 'Information Technology Consultant', pt: 'Consultor de Tecnologia da Informação' },
    location: 'Londrina, Brazil',
    mode: { en: 'Remote (Global), Self-employed', pt: 'Remoto (Global), PJ' },
    start: '2020-02',
    end: null,
    bullets: [
      {
        en: 'Fintech startup: centralized observability by aggregating logs, traces and metrics from multiple environment Kubernetes clusters into operations cluster using the LGTM stack. This reduced AWS costs and simplified cross-environment monitoring.',
        pt: 'Startup de fintech: unificação de observabilidade agregando logs, traces e métricas de clusters Kubernetes de múltiplos ambientes em um cluster de operações usando a stack LGTM. Isso reduziu custos de AWS e simplificou o monitoramento entre ambientes.',
      },
      {
        en: 'Fintech startup: GitHub CI/CD workflows refactor/modularize into reusable templates, streamlining maintenance and teams productivity across multiple repositories.',
        pt: 'Startup de fintech: Refatoração e modularização de workflows de CI/CD do GitHub em templates reutilizáveis, simplificando a manutenção e aumentando a produtividade dos times em múltiplos repositórios.',
      },
      {
        en: 'Startups: Legacy on-prem systems migration to the cloud (AWS and GCP), increasing scalability and availability.',
        pt: 'Startups: Migração de sistemas legados on-premise para a nuvem (AWS e GCP), aumentando escalabilidade e disponibilidade.',
      },
      {
        en: 'Real-state startup: Sharded Redis clusters deployment on AWS, improving website first contentful paint (FCP) by 2 seconds.',
        pt: 'Startup imobiliária: Implantação de clusters Redis com sharding na AWS, melhorando o first contentful paint (FCP) do site em 2 segundos.',
      },
      {
        en: 'Fintech startup: Automated integration testing development with Postman/Newman and MFA, enabling faster detection and resolution of microservice-related bugs.',
        pt: 'Startup de fintech: Desenvolvimento de testes de integração automatizados com Postman/Newman e MFA, permitindo detecção e resolução mais rápidas de bugs em microsserviços.',
      },
      {
        en: 'Fintech startup: Test metrics integration into Prometheus using mTLS, with visualization through custom Grafana dashboards.',
        pt: 'Startup de fintech: Integração de métricas de testes no Prometheus usando mTLS, com visualização por meio de dashboards customizados no Grafana.',
      },
      {
        en: 'Real-state startup: Google Maps replacement with Mapbox on React.js, reducing geolocation service costs by ~30%.',
        pt: 'Startup imobiliária: Substituição do Google Maps por Mapbox em React.js, reduzindo os custos do serviço de geolocalização em ~30%.',
      },
      {
        en: 'E-commerce startup: Architecture leadership and full-stack development, managing three remote teams with agile methodologies and mentoring junior engineers.',
        pt: 'Startup de e-commerce: Liderança de arquitetura e desenvolvimento full-stack, gerenciando três times remotos com metodologias ágeis e mentorando engenheiros júniores.',
      },
      {
        en: 'Startups: DevOps culture promotion with semantic versioning and GitHub-based release automation, saving developers days per week on manual deployments.',
        pt: 'Startups: Incentivo à cultura DevOps com versionamento semântico e automação de releases via GitHub, economizando dias inteiros por semana em deploys manuais para os desenvolvedores.',
      },
      {
        en: 'Real-state startup: Application logs restructure with detailed user metadata, shipping them with Filebeat/Logstash to a deployed AWS Elasticsearch cluster, increasing business user insights by 50%.',
        pt: 'Startup imobiliária: Reestruturação de logs de aplicação com metadados detalhados de usuário, enviando-os via Filebeat/Logstash para um cluster Elasticsearch na AWS, aumentando em 50% os insights de negócio.',
      },
    ],
  },
  {
    company: 'Arista Networks',
    role: { en: 'Senior DevOps Engineer', pt: 'Senior DevOps Engineer' },
    location: 'Dublin, Ireland',
    mode: { en: 'Remote (Ireland), Contractor', pt: 'Remoto (Irlanda), PJ' },
    start: '2023-08',
    end: '2025-08',
    bullets: [
      {
        en: 'Disaster recovery automation of the main corporate website using Python and GitHub Actions, cutting execution time from hours to under 10 minutes.',
        pt: 'Automatização da recuperaçäo de desastre do site corporativo principal usando Python e GitHub Actions, reduzindo o tempo de execução de horas para menos de 10 minutos.',
      },
      {
        en: 'Docker-based Jenkins cluster design and deployment to provision VM instances via Terraform and Ansible, reducing provisioning time to 15 minutes.',
        pt: 'Projeto e implantação de cluster Jenkins em Docker para provisionar instâncias de VM via Terraform e Ansible, reduzindo o tempo de provisionamento para 15 minutos.',
      },
      {
        en: 'Ansible playbooks and GitHub Actions pipelines development to automate DKIM key renewal for Postfix servers, reducing manual errors and runtime to under 5 minutes.',
        pt: 'Desenvolviemnto de playbooks Ansible e pipelines de GitHub Actions para automatizar a renovação de chaves DKIM em servidores Postfix, reduzindo erros manuais e o tempo de execução para menos de 5 minutos.',
      },
      {
        en: 'Custom Python plugin development for Ansible to redact sensitive data, strengthening internal data privacy.',
        pt: 'Desenvolvimento de plugin Python customizado para Ansible, o qual omite dados sensíveis, reforçando a privacidade de dados internos.',
      },
    ],
  },
  {
    company: 'Starops',
    role: { en: 'DevOps Engineer / Infrastructure Engineer / DataOps', pt: 'DevOps Engineer / Infrastructure Engineer / DataOps' },
    location: 'San Diego, USA',
    mode: { en: 'Remote (Brazil), Contractor', pt: 'Remoto (Brasil), PJ' },
    start: '2021-09',
    end: '2023-08',
    bullets: [
      {
        en: 'Keycloak-based SSO implementation with OIDC for Vue.js/Node.js apps, supporting both social and enterprise login.',
        pt: 'Implementação de SSO baseado em Keycloak com OIDC para aplicações Vue.js/Node.js, suportando login social e corporativo.',
      },
      {
        en: 'Reusable Terraform infrastructure modules development for client cloud provisioning on AWS/GCP.',
        pt: 'Desenvolvimento de módulos de infraestrutura Terraform reutilizáveis para provisionamento de nuvem de clientes na AWS/GCP.',
      },
      {
        en: 'GitOps adoption with ArgoCD on Kubernetes, streamlining release management and rollback procedures for every stakeholder level.',
        pt: 'Adoção de GitOps com ArgoCD no Kubernetes, simplificando o gerenciamento de releases e os procedimentos de rollback para todos os níveis de stakeholders.',
      },
      {
        en: 'POS data pipeline rebuilt from MongoDB to BigQuery using Apache Beam (Python), reducing ETL time for 20M+ rows (5x/day) to under 20 minutes.',
        pt: 'Reconstrução de pipeline de dados de PDV do MongoDB para o BigQuery usando Apache Beam (Python), reduzindo o tempo de ETL de mais de 20M de linhas (5x/dia) para menos de 20 minutos.',
      },
      {
        en: 'Koa.js API architecture with Jest unit tests for encrypting proprietary image data before external transmission, ensuring data privacy and compliance.',
        pt: 'Arquitetura de API em Koa.js com testes unitários em Jest para criptografar dados de imagem proprietários antes da transmissão externa, garantindo privacidade e compliance.',
      },
    ],
  },
  {
    company: 'Dextra',
    role: { en: 'Senior Software Engineer II', pt: 'Senior Software Engineer II' },
    location: 'Curitiba, Brazil',
    mode: { en: 'Remote (Brazil), FTE', pt: 'Remoto (Brasil), CLT' },
    start: '2021-06',
    end: '2021-09',
    bullets: [
      {
        en: 'Focus on an international project spanning DevOps and backend processes, participating in architecture design, pair programming, code reviews and mentoring.',
        pt: 'Foco em um projeto internacional em DevOps e processos de backend, participando de definição de arquitetura, programação em pares, revisão de código e mentorias.',
      },
    ],
  },
  {
    company: 'Dextra',
    role: { en: 'Senior Software Engineer I', pt: 'Senior Software Engineer I' },
    location: 'Curitiba, Brazil',
    mode: { en: 'Remote (Brazil), FTE', pt: 'Remoto (Brasil), CLT' },
    start: '2020-08',
    end: '2021-06',
    bullets: [
      {
        en: 'Provisioning automation of AWS environments using Terraform and CI/CD pipelines construction with GitHub/GitLab, accelerating environment setup from weeks to days.',
        pt: 'Automatização do provisionamento de ambientes AWS usando Terraform e construção de pipelines de CI/CD com GitHub/GitLab, acelerando a criação de ambientes de semanas para dias.',
      },
      {
        en: 'Trait-based Node.js microservices development with Mocha/Sinon test coverage, collaborating with three global teams in an Agile environment using JIRA.',
        pt: 'Desenvolvimento de microsserviços Node.js orientados a traits com cobertura de testes em Mocha/Sinon, colaborando com três times globais em ambiente Ágil usando JIRA.',
      },
    ],
  },
  {
    company: 'DSV — Global Transport and Logistics',
    role: { en: 'IT Specialist', pt: 'IT Specialist' },
    location: 'Horsens, Denmark',
    mode: { en: 'On-site (Denmark), FTE', pt: 'Presencial (Dinamarca), CLT' },
    start: '2018-07',
    end: '2019-12',
    bullets: [
      {
        en: 'BI pipeline architecture, ingesting logistics data via Parallel LINQ and .NET Core into SQL Server, enabling critical management decisions over EU parcel routes.',
        pt: 'Arquitetura de pipeline de BI ingerindo dados logísticos via Parallel LINQ e .NET Core em SQL Server, viabilizando decisões gerenciais críticas sobre rotas de encomendas na União Europeia.',
      },
      {
        en: 'Open-source VBA singleton-factory library release with over 13K downloads on the VS Code Marketplace.',
        pt: 'Publicação de biblioteca open-source de um singleton factory para VBA com mais de 13 mil downloads no Marketplace do VS Code.',
      },
      {
        en: 'Backend automation unification into a centralized React.js dashboard to manage Laravel backoffice job queues.',
        pt: 'Unificação de automações de backend em um dashboard centralizado em React.js para gerenciar filas administrativas de jobs do Laravel.',
      },
      {
        en: 'Automation processes architecture using the robotic tools Kofax Kapow and Selenium, letting freight forwarders contribute at a business level.',
        pt: 'Arquitetura de processos de automação usando as ferramentas robóticas Kofax Kapow e Selenium, permitindo que agentes de carga contribuíssem a nível de negócio.',
      },
      {
        en: 'EBIT growth contribution by 4.8% and process performance/efficiency by 54.7%.',
        pt: 'Contribuição para crescimento de 4,8% no EBIT e 54,7% na performance/eficiência dos processos.',
      },
    ],
  },
  {
    company: 'Lets Comunicação e Desenvolvimento',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    location: 'Londrina, Brazil',
    mode: { en: 'Hybrid (Brazil), Part-time', pt: 'Híbrido (Brasil), Part-time' },
    start: '2018-02',
    end: '2018-06',
    bullets: [
      {
        en: "Semi-remote work on startup clients' projects across web front-end, back-end and infrastructure architecture, using AngularJS/Loopback and deploy automation with Gulp and Jenkins on DigitalOcean/Linode.",
        pt: 'Trabalho semi-remoto em projetos de clientes startups em front-end, back-end e arquitetura de infraestrutura, usando AngularJS/Loopback e automação de deploy com Gulp e Jenkins em DigitalOcean/Linode.',
      },
      {
        en: 'Three projects contribution: MedMobi Crônicos, AVP and Farmdome.',
        pt: 'Contribuição em três projetos: MedMobi Crônicos, AVP e Farmdome.',
      },
    ],
  },
  {
    company: 'RAIS Saúde',
    role: { en: 'Co-founder / Design Manager / Developer', pt: 'Co-fundador / Gerente de Design / Desenvolvedor' },
    location: 'Londrina, Brazil',
    mode: { en: 'Hybrid (Brazil), Partner', pt: 'Híbrido (Brasil), Sócio' },
    start: '2016-01',
    end: '2017-06',
    bullets: [
      {
        en: 'Health-tech startup co-found end-to-end: requirements gathering with customers, wireframes, front-end in AngularJS with Jasmine tests, back-end in Spring MVC, deployment on AWS and Azure with Gulp/Jenkins/AWS Pipeline.',
        pt: 'Co-fundação de startup de health-tech de ponta a ponta: levantamento de requisitos com clientes, wireframes, front-end em AngularJS com testes em Jasmine, back-end em Spring MVC, deploy em AWS e Azure com Gulp/Jenkins/AWS Pipeline.',
      },
    ],
  },
  {
    company: 'Ligue Site Cornélio Procópio',
    role: { en: 'Webdesigner', pt: 'Webdesigner' },
    location: 'Cornélio Procópio, Brazil',
    mode: { en: 'Hybrid (Brazil), Internship', pt: 'Híbrido (Brasil), Estágio' },
    start: '2012-10',
    end: '2015-07',
    bullets: [
      {
        en: 'Websites and digital media development, plus client prospecting and support (HTML/CSS/JavaScript, Facebook Ads, Google Analytics).',
        pt: 'Desenvolvimento de websites e mídias digitais, além de prospecção e suporte a clientes (HTML/CSS/JavaScript, Facebook Ads, Google Analytics).',
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

export const topSkills = ['Terraform', 'ArgoCD', 'Kubernetes', 'GitHub Actions'];

export const skillGroups: { title: Bilingual; items: string[] }[] = [
  {
    title: { en: 'Infrastructure & IaC', pt: 'Infraestrutura & IaC' },
    items: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Azure', 'Docker'],
  },
  {
    title: { en: 'Platform & GitOps', pt: 'Plataforma & GitOps' },
    items: ['Kubernetes', 'ArgoCD', 'Kustomize', 'Helm', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: { en: 'Observability', pt: 'Observabilidade' },
    items: ['Prometheus', 'Grafana', 'Datadog', 'Elasticsearch', 'Filebeat / Logstash'],
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
      en: 'Open-source extension generating constructors, getters/setters and singleton factories for VBA classes — 13K+ downloads.',
      pt: 'Extensão open source que gera construtores, getters/setters e singleton factories para classes VBA — mais de 13 mil downloads.',
    },
    period: '2018',
    url: 'https://marketplace.visualstudio.com/items?itemName=davikawasaki.VBGenerators',
  },
  {
    title: 'ELLP Group',
    description: {
      en: 'Volunteer tech-education group co-found; recognized by Mapa Educação in 2015 as one of the 100 best projects for Brazilian education.',
      pt: 'Co-fundação de grupo voluntário de educação tecnológica; reconhecido pelo Mapa Educação em 2015 como um dos 100 melhores projetos para a educação brasileira.',
    },
    period: '2014 – 2016',
    url: 'http://grupoellp.com.br/',
  },
  {
    title: '1st place — TOTVS Agribusiness Hackathon',
    description: {
      en: 'IoT irrigation-monitoring solution on Intel Edison that won 1st place among 28 teams.',
      pt: 'Solução de IoT para monitoramento de irrigação em Intel Edison que venceu em 1º lugar entre 28 equipes.',
    },
    period: '2015',
  },
  {
    title: '1st place — Urban Mobility Hackathon (ECO.TI)',
    description: {
      en: "Arduino UDOO-based check-in and GPS tracking system for Londrina's bus network, winning 1st place.",
      pt: 'Sistema de check-in e rastreamento por GPS em Arduino UDOO para a rede de ônibus de Londrina, vencendo em 1º lugar.',
    },
    period: '2015',
  },
  {
    title: 'Conte um Conto',
    description: {
      en: 'Volunteer web platform co-found to help low-income students in Brazil develop reading and writing skills.',
      pt: 'Co-fundação de plataforma web voluntária para ajudar estudantes de baixa renda no Brasil a desenvolver habilidades de leitura e escrita.',
    },
    period: '2017 – 2018',
  },
  {
    title: 'Arrhythmia ECG Recognition',
    description: {
      en: 'Undergraduate research classifying cardiac arrhythmia from ECG signals using discrete wavelet transform and machine learning (97.9% SVM accuracy).',
      pt: 'Pesquisa de graduação para classificar arritmia cardíaca a partir de sinais de ECG usando transformada wavelet discreta e machine learning (97,9% de acurácia com SVM).',
    },
    period: '2017',
    url: 'https://github.com/davikawasaki/arrhythmia-ecg-analysis-ai',
  },
  {
    title: 'Computer-theme Question Classification (Thesis)',
    description: {
      en: 'Undergraduate thesis using NLP and machine learning to classify computer-science questions, 83% precision with Multinomial Naive Bayes.',
      pt: 'Trabalho de conclusão de curso usando NLP e machine learning para classificar questões de computação, com 83% de precisão usando Multinomial Naive Bayes.',
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
