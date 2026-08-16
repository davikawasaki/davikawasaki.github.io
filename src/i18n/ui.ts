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

    'hero.badge': 'Cloud & Platform Engineer',
    'hero.headline': 'Davi Kawasaki',
    'hero.subhead':
      'Resilient infrastructure architecture and automation + end-to-end solutions development.',
    'hero.ctaPrimary': 'View resume',
    'hero.ctaSecondary': 'See projects',

    'about.title': 'About',
    'about.body1':
      "I'm currently working as a Senior Site Reliability Engineer at Toptal, based in Londrina / Brazil. Over the past several years I've worked across multinationals and startups in the US, Europe and LATAM — Fashion Digital, Arista Networks, Starops, DSV, CI&T — building APIs, platforms, infrastructure-as-code, GitOps pipelines and observability solutions for teams spanning multiple time zones and cultures.",
    'about.body2':
      'I always strive to deliver the smallest effective solution: automating away toil, giving teams clear signal instead of noise, and always keeping end users in mind. Also working on my own SaaS projects in my spare time: Zyfinbot & Fisihome.',
    'about.cta': 'Read the full resume',

    'skills.title': 'Tools & Skills',
    'skills.subtitle': 'What I reach for day to day and I am experience at',

    'projects.title': 'Selected work cases',
    'projects.subtitle': 'A few recent infrastructure and platform case studies',
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
      'Infrastructure, platform and automation work from recent roles, plus a few things I built on my own time.',

    'blog.title': 'Latest posts',
    'blog.subtitle': 'Findings on infrastructure, tools and lessons learned',
    'blog.viewAll': 'View all posts',
    'blog.backToBlog': 'Back to blog',
    'blog.pageTitle': 'Blog',
    'blog.pageSubtitle': 'Writing on SRE, platform engineering and things I learn along the way.',
    'blog.empty': "No posts yet — I'm writing the first one. Check back soon, or read older posts on Medium.",
    'blog.readOnMedium': 'Read on Medium',

    'resume.title': 'Resume',
    'resume.subtitle': 'Experience, education and the skills I bring to a team',
    'resume.experience': 'Experience',
    'resume.education': 'Education',
    'resume.certifications': 'Certifications',
    'resume.languages': 'Languages',
    'resume.skills': 'Skills',
    'resume.earlier': 'Earlier ventures & awards',
    'resume.present': 'Present',

    'contact.title': "Let's talk",
    'contact.subtitle':
      "Have an infrastructure to build, a system to untangle, or have any order of business to discuss?",
    'contact.emailCta': 'Email me',
    'contact.social': 'Other places that I am online',

    'cta.title': 'Have a project in mind?',
    'cta.subtitle': "I'm all ears to talk infrastructure, automation, or how to make your system more reliable. Let's talk?",
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

    'hero.badge': 'Senior DevOps & SRE',
    'hero.headline': 'Davi Kawasaki',
    'hero.subhead':
      'Arquitetura e automação de infraestrutura resiliente + desenvolvimento de soluções de ponta a ponta.',
    'hero.ctaPrimary': 'Ver currículo',
    'hero.ctaSecondary': 'Ver projetos',

    'about.title': 'Sobre',
    'about.body1':
      'Atualmente atuo como Senior Site Reliability Engineer na Toptal, baseado em Londrina / Brasil. Nos últimos anos trabalhei em multinacionais e startups nos EUA, Europa e LATAM — Fashion Digital, Arista Networks, Starops, DSV, CI&T — construindo APIs, plataformas, infrastructure as code, pipelines GitOps e soluções de observabilidade para times distribuídos em diversos fusos horários e culturas.',
    'about.body2':
      'Sempre me esforço em entregar a solução mais simples e eficaz: automatizando trabalho repetitivo, clarificando monitoramento para times, e sempre pensando em quem está do outro lado do sistema. No meu tempo livre também trabalho nos meus próprios projetos SaaS: Zyfinbot & Fisihome.',
    'about.cta': 'Ler o currículo completo',

    'skills.title': 'Ferramentas & Habilidades',
    'skills.subtitle': 'O que uso no dia a dia e tenho experiência',

    'projects.title': 'Casos de trabalho selecionados',
    'projects.subtitle': 'Alguns estudos de caso recentes de infraestrutura e plataforma',
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
      'Trabalhos de infraestrutura, plataforma e automação de cargos recentes, além de projetos pessoais.',

    'blog.title': 'Últimas postagens',
    'blog.subtitle': 'Aprendizados sobre infraestrutura, ferramentas e aprendizados',
    'blog.viewAll': 'Ver todas as postagens',
    'blog.backToBlog': 'Voltar ao blog',
    'blog.pageTitle': 'Blog',
    'blog.pageSubtitle': 'Textos sobre SRE, engenharia de plataforma e aprendizados ao longo do caminho.',
    'blog.empty': 'Ainda não há postagens — estou escrevendo a primeira. Volte em breve, ou leia postagens antigas no Medium.',
    'blog.readOnMedium': 'Ler no Medium',

    'resume.title': 'Currículo',
    'resume.subtitle': 'Experiência, educação e as habilidades que trago para um time',
    'resume.experience': 'Experiência',
    'resume.education': 'Educação',
    'resume.certifications': 'Certificações',
    'resume.languages': 'Idiomas',
    'resume.skills': 'Habilidades',
    'resume.earlier': 'Projetos e prêmios anteriores',
    'resume.present': 'Atual',

    'contact.title': 'Vamos conversar',
    'contact.subtitle':
      'Tem uma infraestrutura para construir, um sistema para descomplicar, ou tem algum negócio em mente?',
    'contact.emailCta': 'Me envie um email',
    'contact.social': 'Outros locais que estou presente',

    'cta.title': 'Tem um projeto em mente?',
    'cta.subtitle': 'Estou disponível para conversar sobre infraestrutura, automação ou como tornar seu sistema mais confiável. Vamos conversar?',
    'cta.button': 'Entre em contato',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.builtWith': 'Feito com Astro, hospedado no Cloudflare Pages.',

    '404.title': 'Página não encontrada',
    '404.body': 'A página que você procura não existe ou foi movida.',
    '404.cta': 'Voltar ao início',
  },
} as const;
