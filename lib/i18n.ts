export type Locale = 'es' | 'en'

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'INICIO',
      guides: 'Guías',
      favorites: 'FAVORITOS',
      language: 'Idioma',
    },
    // Home
    home: {
      versionTag: '[ guides_v1.0 // build_2026 ]',
      title: 'Guías de recursos gratuitos para programadores',
      description: 'Aprende, mejora y crece como dev.',
      descriptionEnd: 'Creado con 💜 para mi audiencia tech.',
      byLine: '// by elijs.dev',
      exploreGuides: 'Explorar Guías',
      favoritesCount: 'Favoritos',
      guidesCount: 'Guías',
      resourcesCount: 'Recursos',
      freeLabel: 'Gratis',
      viewGuide: 'Ver guia',
      resources: 'recursos',
      searchPlaceholder: 'Buscar Guías...',
      allGuides: 'GUÍAS_DISPONIBLES',
      noResults: 'No se encontraron Guías',
      clearSearch: 'Limpiar busqueda',
    },
    // Guide pages
    guide: {
      backToHome: 'cd ..',
      searchPlaceholder: 'grep -i "recurso"',
      copyLink: 'Copiar enlace',
      share: 'Compartir',
      addToFavorites: 'Agregar a favoritos',
      removeFromFavorites: 'Quitar de favoritos',
      linkCopied: 'Enlace copiado',
      visit: 'Visitar',
      noResults: 'No se encontraron recursos',
      resources: 'recursos',
    },
    // Favorites
    favorites: {
      title: 'MIS_FAVORITOS',
      empty: 'No tienes favoritos guardados',
      emptyDesc: 'Explora las Guías y agrega recursos a tus favoritos',
      explore: 'Explorar Guías',
    },
    // Footer
    footer: {
      madeWith: 'Hecho con',
      by: 'por',
      support: 'Apoyame',
    },
    // Terminal
    terminal: {
      title: 'elijs@dev:~$',
      commands: [
        '$ cat recursos.txt',
        '> Cargando Guías de programacion...',
        '> [OK] 5 Guías encontradas',
        '> [OK] Recursos listos',
        '$ echo "Happy coding!"',
        '> Happy coding! 💜',
      ],
    },
    // Guides metadata
    guides: {
      'learn-programming-games': {
        title: 'Aprende a Programar Jugando',
        description: 'Plataformas para dominar lenguajes de programacion mientras te diviertes superando retos y niveles.',
      },
      'improve-programming-2026': {
        title: 'Guia para Mejorar en Programacion 2026',
        description: 'Tu valor ya no reside en recordar la sintaxis, sino en tu capacidad para disenar soluciones y resolver problemas complejos.',
      },
      'free-resources-2026': {
        title: 'Recursos Gratuitos para Programar 2026',
        description: 'Recopilacion de plataformas y cursos especificos para convertirte en desarrollador Frontend, Backend o Fullstack.',
      },
      'frontend-react-project': {
        title: 'Proyecto Frontend con React',
        description: 'Recursos de aprendizaje para construir un proyecto frontend en React conectado con Google Sheets.',
      },
      'web-optimization': {
        title: 'Optimizacion Web y Rendimiento',
        description: 'Guia completa para optimizar la experiencia del usuario y el SEO de tu sitio web.',
      },
      'portfolio-resources': {
        title: 'Recursos para tu Portafolio',
        description: 'Plataformas, desafios y proyectos practicos para construir un portafolio profesional que destaque.',
      },
      'cv-portfolio-github': {
        title: 'CV, Portafolio y GitHub',
        description: 'Repositorios y recursos para planificar tu carrera, preparar entrevistas y construir proyectos reales.',
      },
      'certifications-cv': {
        title: 'Certificaciones para tu CV',
        description: 'Certificaciones gratuitas de empresas como Google, IBM, Microsoft y mas para potenciar tu perfil profesional.',
      },
      'api-real-world': {
        title: 'Aprende a Trabajar con APIs como en un Trabajo Real',
        description: 'Recursos gratuitos para dominar el diseno, consumo, documentacion y deploy de APIs profesionales.',
      },
      'logic-practice-30-days': {
        title: 'Mejora tu Logica de Programacion en 30 Dias',
        description: 'Puzzles, logica visual, problemas interactivos y ejercicios de algoritmos con estos recursos gratuitos.',
      },
      'aprender-como-senior': {
        title: 'Aprende a Programar como Senior',
        description: 'El cambio de mentalidad que me llevo 3 anos, tu lo puedes hacer en 30 dias.',
      },
      'tech-interview-prep': {
        title: 'Entrevistas Técnicas como en Google',
        description: 'Entrena como si Google te fuera a llamar mañana. Recursos para practicar entrevistas técnicas con feedback real.',
      },
      'think-like-programmer': {
        title: 'Aprende a pensar como Programador',
        description: 'En 30 días puedes cambiar cómo piensas. Con estos tips puedes mejorar tu mentalidad de desarrollo.',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'HOME',
      guides: 'GUIDES',
      favorites: 'FAVORITES',
      language: 'Language',
    },
    // Home
    home: {
      versionTag: '[ guides_v1.0 // build_2026 ]',
      title: 'Free resource guides for programmers',
      description: 'Learn, improve and grow as a dev.',
      descriptionEnd: 'Created with 💜 for my tech audience.',
      byLine: '// by elijs.dev',
      exploreGuides: 'Explore guides',
      favoritesCount: 'Favorites',
      guidesCount: 'Guides',
      resourcesCount: 'Resources',
      freeLabel: 'Free',
      viewGuide: 'View guide',
      resources: 'resources',
      searchPlaceholder: 'Search guides...',
      allGuides: 'AVAILABLE_GUIDES',
      noResults: 'No guides found',
      clearSearch: 'Clear search',
    },
    // Guide pages
    guide: {
      backToHome: 'cd ..',
      searchPlaceholder: 'grep -i "resource"',
      copyLink: 'Copy link',
      share: 'Share',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
      linkCopied: 'Link copied',
      visit: 'Visit',
      noResults: 'No resources found',
      resources: 'resources',
    },
    // Favorites
    favorites: {
      title: 'MY_FAVORITES',
      empty: 'No favorites saved',
      emptyDesc: 'Explore guides and add resources to your favorites',
      explore: 'Explore guides',
    },
    // Footer
    footer: {
      madeWith: 'Made with',
      by: 'by',
      support: 'Support me',
    },
    // Terminal
    terminal: {
      title: 'elijs@dev:~$',
      commands: [
        '$ cat resources.txt',
        '> Loading programming guides...',
        '> [OK] 5 guides found',
        '> [OK] Resources ready',
        '$ echo "Happy coding!"',
        '> Happy coding! 💜',
      ],
    },
    // Guides metadata
    guides: {
      'learn-programming-games': {
        title: 'Learn Programming by Playing',
        description: 'Platforms to master programming languages while having fun overcoming challenges and levels.',
      },
      'improve-programming-2026': {
        title: 'Guide to Improve Programming 2026',
        description: 'Your value no longer lies in remembering syntax, but in your ability to design solutions and solve complex problems.',
      },
      'free-resources-2026': {
        title: 'Free Resources for Programming 2026',
        description: 'Collection of platforms and specific courses to become a Frontend, Backend or Fullstack developer.',
      },
      'frontend-react-project': {
        title: 'Frontend Project with React',
        description: 'Learning resources to build a frontend project in React connected with Google Sheets.',
      },
      'web-optimization': {
        title: 'Web Optimization & Performance',
        description: 'Complete guide to optimize user experience and SEO for your website.',
      },
      'portfolio-resources': {
        title: 'Portfolio Resources',
        description: 'Platforms, challenges and practical projects to build a professional portfolio that stands out.',
      },
      'cv-portfolio-github': {
        title: 'CV, Portfolio & GitHub',
        description: 'Repositories and resources to plan your career, prepare for interviews and build real projects.',
      },
      'certifications-cv': {
        title: 'Certifications for Your CV',
        description: 'Free certifications from companies like Google, IBM, Microsoft and more to boost your professional profile.',
      },
      'api-real-world': {
        title: 'Learn to Work with APIs Like in a Real Job',
        description: 'Free resources to master API design, consumption, documentation and deployment professionally.',
      },
      'logic-practice-30-days': {
        title: 'Improve Your Programming Logic in 30 Days',
        description: 'Puzzles, visual logic, interactive problems and algorithm exercises with these free resources.',
      },
      'aprender-como-senior': {
        title: 'Learn to Program like a Senior',
        description: 'The mindset change that took me 3 years, you can do it in 30 days.',
      },
      'tech-interview-prep': {
        title: 'Technical Interviews Like at Google',
        description: 'Train as if Google would call you tomorrow. Resources for practicing technical interviews with real feedback.',
      },
      'think-like-programmer': {
        title: 'Learn to think like a Programmer',
        description: 'In 30 days you can change how you think. With these tips you can improve your developer mindset.',
      },
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
