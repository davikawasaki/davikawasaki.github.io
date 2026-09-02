export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.theme': 'Toggle theme',
    'nav.menu': 'Menu',

    'hero.badge': 'Senior SRE & Platform Engineer',
    'hero.headline': 'Davi Kawasaki',
    'hero.subhead':
      'Building reliable self-service platforms, automated delivery paths and clear operating models for distributed engineering teams.',
    'hero.ctaPrimary': 'View resume',
    'hero.ctaSecondary': 'See projects',

    'about.title': 'About',
    'about.body1':
      "I'm a Senior Site Reliability & Platform Engineer with an EU Passport, relocating to Dublin, Ireland in March 2027 (available for global remote contracts). Over the past several years I've engineered cloud infrastructure across US, European and LATAM tech companies. I specialise in building Internal Developer Platforms (IDP), automated GitOps pipelines, and scaling cloud telemetry.",
    'about.body2':
      'My mission is to champion developer self-service autonomy and to eliminate operational toil through clear asynchronous documentation and written architectural standards. Also working on my own SaaS projects in my spare time: Ecomfw, Zyfinbot & Fisihome.',
    'about.cta': 'Read the full resume',

    'skills.title': 'Tools & Skills',
    'skills.subtitle': 'Technologies and practices I use to build reliable platforms and reduce developer toil',

    'projects.title': 'Selected engineering case studies',
    'projects.subtitle': 'Internal platforms, reliability automation and developer tooling with measurable outcomes',
    'projects.viewAll': 'View all projects',
    'projects.viewProject': 'Read case study',
    'projects.backToProjects': 'Back to projects',
    'projects.role': 'Role',
    'projects.timeline': 'Period at the company',
    'projects.company': 'Company',
    'projects.stack': 'Tech stack',
    'projects.links': 'Links',
    'projects.pageTitle': 'Projects',
    'projects.pageSubtitle':
      'Case studies in internal platforms, self-service infrastructure, reliability and developer tooling for distributed engineering teams.',

    'blog.title': 'Latest posts',
    'blog.subtitle': 'Practical findings on infrastructure, platform engineering and developer experience',
    'blog.viewAll': 'View all posts',
    'blog.backToBlog': 'Back to blog',
    'blog.pageTitle': 'Blog',
    'blog.pageSubtitle': 'Writing on SRE, platform engineering and things I learn along the way.',
    'blog.empty': "No posts yet — I'm writing the first one. Check back soon, or read older posts on Medium.",
    'blog.readOnMedium': 'Read on Medium',

    'resume.title': 'Resume',
    'resume.subtitle': 'Senior SRE and Platform Engineer focused on internal developer platforms, self-service infrastructure and reliable async operations',
    'resume.experience': 'Experience',
    'resume.education': 'Education',
    'resume.certifications': 'Certifications',
    'resume.languages': 'Languages',
    'resume.skills': 'Skills',
    'resume.earlier': 'Earlier ventures & awards',
    'resume.present': 'Present',

    'contact.title': "Let's talk",
    'contact.subtitle':
      'Need to build a platform, improve reliability or simplify a complex delivery workflow?',
    'contact.emailCta': 'Email me',
    'contact.social': 'Where else to find me',

    'postCta.title': 'Need to solve this on your team?',
    'postCta.delivery.subtitle':
      'I turn work that needed a specialist and a ticket into a path teams take on their own, with the guardrails that make it safe to run in production.',
    'postCta.durability.subtitle':
      'I build internal platforms that outlive the person who built them: self-service, observable, documented, and safe for a team to operate on its own.',
    'postCta.reliability.subtitle':
      'I work on the parts of infrastructure where a mistake reaches production: delivery paths, recovery automation and telemetry, built so the safe move is the default one.',
    'postCta.button': "Let's talk",

    'cta.title': 'Need a more reliable platform?',
    'cta.subtitle': "Let's discuss self-service infrastructure, automation and the operating practices that help engineering teams move safely.",
    'cta.button': 'Get in touch',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with Astro, deployed on Cloudflare Pages.',

    '404.title': 'Page not found',
    '404.body': "The page you're looking for doesn't exist or has moved.",
    '404.cta': 'Back home',
  },
  pt: {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.resume': 'Currículo',
    'nav.contact': 'Contato',
    'nav.theme': 'Alternar tema',
    'nav.menu': 'Menu',

    'hero.badge': 'Senior SRE & Platform Engineer',
    'hero.headline': 'Davi Kawasaki',
    'hero.subhead':
      'Construindo plataformas self-service confiáveis, fluxos de entrega automatizados e modelos operacionais claros para times de engenharia distribuídos.',
    'hero.ctaPrimary': 'Ver currículo',
    'hero.ctaSecondary': 'Ver projetos',

    'about.title': 'Sobre',
    'about.body1':
      'Atuo como Senior Site Reliability & Platform Engineer com cidadania europeia, em processo de realocação para Dublin, Irlanda em março de 2027 (disponível para contratos remotos globais). Nos últimos anos, desenvolvi projetos de infraestrutura em nuvem para empresas de tecnologia nos EUA, Europa e LATAM. Sou especialista na construção de Plataformas Internas de Desenvolvimento (IDP), pipelines de GitOps automatizados e escalabilidade de observabilidade.',
    'about.body2':
      'Minha missão é promover a autonomia self-service para times de desenvolvimento e eliminar o trabalho manual por meio de documentação assíncrona clara e padrões arquiteturais escritos. No meu tempo livre também trabalho nos meus próprios projetos SaaS: Ecomfw, Zyfinbot & Fisihome.',
    'about.cta': 'Ler o currículo completo',

    'skills.title': 'Ferramentas & Habilidades',
    'skills.subtitle': 'Tecnologias e práticas que uso para construir plataformas confiáveis e reduzir o trabalho operacional dos desenvolvedores',

    'projects.title': 'Estudos de caso de engenharia',
    'projects.subtitle': 'Plataformas internas, automação de confiabilidade e ferramentas para desenvolvedores com resultados mensuráveis',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.viewProject': 'Ler estudo de caso',
    'projects.backToProjects': 'Voltar aos projetos',
    'projects.role': 'Função',
    'projects.timeline': 'Tempo na empresa',
    'projects.company': 'Empresa',
    'projects.stack': 'Stack técnica',
    'projects.links': 'Links',
    'projects.pageTitle': 'Projetos',
    'projects.pageSubtitle':
      'Estudos de caso em plataformas internas, infraestrutura self-service, confiabilidade e ferramentas para times de engenharia distribuídos.',

    'blog.title': 'Últimas postagens',
    'blog.subtitle': 'Aprendizados práticos sobre infraestrutura, engenharia de plataforma e experiência do desenvolvedor',
    'blog.viewAll': 'Ver todas as postagens',
    'blog.backToBlog': 'Voltar ao blog',
    'blog.pageTitle': 'Blog',
    'blog.pageSubtitle': 'Textos sobre SRE, engenharia de plataforma e aprendizados ao longo do caminho.',
    'blog.empty': 'Ainda não há postagens — estou escrevendo a primeira. Volte em breve, ou leia postagens antigas no Medium.',
    'blog.readOnMedium': 'Ler no Medium',

    'resume.title': 'Currículo',
    'resume.subtitle': 'Senior SRE e Platform Engineer com foco em plataformas internas, infraestrutura self-service e operações assíncronas confiáveis',
    'resume.experience': 'Experiência',
    'resume.education': 'Educação',
    'resume.certifications': 'Certificações',
    'resume.languages': 'Idiomas',
    'resume.skills': 'Habilidades',
    'resume.earlier': 'Projetos e prêmios anteriores',
    'resume.present': 'Atual',

    'contact.title': 'Vamos conversar',
    'contact.subtitle':
      'Precisa construir uma plataforma, melhorar a confiabilidade ou simplificar um fluxo complexo de entrega?',
    'contact.emailCta': 'Me envie um email',
    'contact.social': 'Onde mais me encontrar',

    'postCta.title': 'Precisa resolver isso no seu time?',
    'postCta.delivery.subtitle':
      'Transformo o que dependia de um especialista e de um chamado em um caminho que o time percorre sozinho, com as travas que tornam isso seguro em produção.',
    'postCta.durability.subtitle':
      'Construo plataformas internas que sobrevivem a quem as construiu: self-service, observáveis, documentadas e seguras para o time operar sozinho.',
    'postCta.reliability.subtitle':
      'Atuo nas partes da infraestrutura em que um erro chega em produção: caminhos de entrega, automação de recuperação e telemetria, construídos para que o movimento seguro seja o padrão.',
    'postCta.button': 'Vamos conversar',

    'cta.title': 'Precisa de uma plataforma mais confiável?',
    'cta.subtitle': 'Vamos conversar sobre infraestrutura self-service, automação e práticas operacionais que ajudam times de engenharia a entregar com segurança.',
    'cta.button': 'Entre em contato',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.builtWith': 'Feito com Astro, hospedado no Cloudflare Pages.',

    '404.title': 'Página não encontrada',
    '404.body': 'A página que você procura não existe ou foi movida.',
    '404.cta': 'Voltar ao início',
  },
} as const;
