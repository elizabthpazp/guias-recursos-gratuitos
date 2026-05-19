export type Locale = 'es' | 'en'

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      guides: 'Guias',
      favorites: 'Favoritos',
      language: 'Idioma',
    },
    // Home
    home: {
      title: 'Recursos de Programacion',
      subtitle: 'Guias gratuitas para aprender a programar',
      description: 'Coleccion curada de recursos gratuitos para desarrolladores. Desde juegos para aprender a programar hasta guias avanzadas de optimizacion web.',
      viewGuide: 'Ver guia',
      resources: 'recursos',
      searchPlaceholder: 'Buscar guias...',
      allGuides: 'Todas las Guias',
      noResults: 'No se encontraron guias',
    },
    // Guide pages
    guide: {
      backToHome: 'Volver al inicio',
      searchPlaceholder: 'Buscar recursos...',
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
      title: 'Mis Favoritos',
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
    // Guides metadata
    guides: {
      'learn-programming-games': {
        title: 'Aprende a Programar Jugando',
        description: 'Plataformas para dominar lenguajes de programacion mientras te diviertes superando retos y niveles.',
      },
      'improve-programming-2026': {
        title: 'Guia para Mejorar en Programacion en 2026',
        description: 'Tu valor ya no reside en recordar la sintaxis, sino en tu capacidad para disenar soluciones y resolver problemas complejos.',
      },
      'free-resources-2026': {
        title: 'Recursos Gratuitos para Programar en 2026',
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
      home: 'Home',
      guides: 'Guides',
      favorites: 'Favorites',
      language: 'Language',
    },
    // Home
    home: {
      title: 'Programming Resources',
      subtitle: 'Free guides to learn programming',
      description: 'Curated collection of free resources for developers. From games to learn programming to advanced web optimization guides.',
      viewGuide: 'View guide',
      resources: 'resources',
      searchPlaceholder: 'Search guides...',
      allGuides: 'All Guides',
      noResults: 'No guides found',
    },
    // Guide pages
    guide: {
      backToHome: 'Back to home',
      searchPlaceholder: 'Search resources...',
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
      title: 'My Favorites',
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
    // Guides metadata
    guides: {
      'learn-programming-games': {
        title: 'Learn Programming by Playing',
        description: 'Platforms to master programming languages while having fun overcoming challenges and levels.',
      },
      'improve-programming-2026': {
        title: 'Guide to Improve Programming in 2026',
        description: 'Your value no longer lies in remembering syntax, but in your ability to design solutions and solve complex problems.',
      },
      'free-resources-2026': {
        title: 'Free Resources for Programming in 2026',
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
