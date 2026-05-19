export type Locale = 'es' | 'en'

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'INICIO',
      guides: 'GUIAS',
      favorites: 'FAVORITOS',
      language: 'Idioma',
    },
    // Home
    home: {
      title: 'Recursos de Programacion',
      subtitle: 'Aprende a programar gratis',
      description: 'Guias gratuitas de recursos para aprender a programar. Hechas con',
      viewGuide: 'Ver guia',
      resources: 'recursos',
      searchPlaceholder: 'Buscar guias...',
      allGuides: 'GUIAS_DISPONIBLES',
      noResults: 'No se encontraron guias',
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
      emptyDesc: 'Explora las guias y agrega recursos a tus favoritos',
      explore: 'Explorar guias',
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
        '> Cargando guias de programacion...',
        '> [OK] 5 guias encontradas',
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
      title: 'Programming Resources',
      subtitle: 'Learn to code for free',
      description: 'Free resource guides to learn programming. Made with',
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
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
