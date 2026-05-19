export interface Resource {
  id: string
  name: string
  description: string
  url: string
  category?: string
}

export interface GuideSection {
  id: string
  title: {
    es: string
    en: string
  }
  resources: Resource[]
}

export interface Guide {
  id: string
  slug: string
  icon: string
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    id: 'learn-programming-games',
    slug: 'learn-programming-games',
    icon: '🎮',
    sections: [
      {
        id: 'adventure-strategy',
        title: {
          es: 'Aventura y Estrategia (Multilenguaje)',
          en: 'Adventure & Strategy (Multi-language)',
        },
        resources: [
          {
            id: 'codecombat',
            name: 'Codecombat',
            description: 'Ideal para principiantes. Controla a tu heroe usando Python o JavaScript.',
            url: 'https://codecombat.com/',
          },
          {
            id: 'codedex',
            name: 'Codedex',
            description: 'Una experiencia RPG para aprender Python, JS, HTML y mas.',
            url: 'https://www.codedex.io/',
          },
          {
            id: 'codemonkey',
            name: 'Codemonkey',
            description: 'Muy visual, para entender logica de programacion desde cero.',
            url: 'https://www.codemonkey.com/',
          },
          {
            id: 'codingame',
            name: 'Codingame',
            description: 'Resuelve problemas complejos para ganar batallas espaciales. Soporta casi todos los lenguajes.',
            url: 'https://www.codingame.com/',
          },
          {
            id: 'checkio',
            name: 'Checkio.org',
            description: 'Retos de codigo en mundos tematicos (Python y TypeScript).',
            url: 'https://checkio.org/',
          },
          {
            id: 'codewars',
            name: 'Codewars',
            description: 'Entrena "katas" para subir de nivel y mejorar tus habilidades.',
            url: 'https://www.codewars.com/',
          },
        ],
      },
      {
        id: 'web-sql-css',
        title: {
          es: 'Especializados (Web, SQL y CSS)',
          en: 'Specialized (Web, SQL & CSS)',
        },
        resources: [
          {
            id: 'css-diner',
            name: 'CSS Diner',
            description: 'Domina los selectores de CSS de forma practica.',
            url: 'https://flukeout.github.io/',
          },
          {
            id: 'flexbox-froggy',
            name: 'Flexbox Froggy',
            description: 'Aprende Flexbox ayudando a unas ranitas.',
            url: 'https://flexboxfroggy.com/',
          },
          {
            id: 'grid-garden',
            name: 'Grid Garden',
            description: 'Aprende CSS Grid cultivando tu propio jardin.',
            url: 'https://cssgridgarden.com/',
          },
          {
            id: 'cssbattle',
            name: 'CSSBattle',
            description: 'Compite por replicar disenos con la menor cantidad de codigo.',
            url: 'https://cssbattle.dev/',
          },
          {
            id: 'flexbox-defense',
            name: 'Flexbox Defense',
            description: 'Un tower defense basado en posicionamiento Flexbox.',
            url: 'http://www.flexboxdefense.com/',
          },
          {
            id: 'sql-murder',
            name: 'The SQL Murder Mystery',
            description: 'Resuelve un crimen usando consultas SQL.',
            url: 'https://mystery.knightlab.com/',
          },
          {
            id: 'sql-island',
            name: 'SQL Island',
            description: 'Escapa de una isla desierta usando comandos de bases de datos.',
            url: 'https://sql-island.com/',
          },
          {
            id: 'cryptozombies',
            name: 'Cryptozombies',
            description: 'Aprende Solidity (Blockchain) creando tu ejercito de zombies.',
            url: 'https://cryptozombies.io/',
          },
        ],
      },
      {
        id: 'logic-automation',
        title: {
          es: 'Logica, Automatizacion y Sistemas',
          en: 'Logic, Automation & Systems',
        },
        resources: [
          {
            id: 'farmer-replaced',
            name: 'The Farmer Was Replaced',
            description: 'Drones y agricultura donde programas cada accion.',
            url: 'https://store.steampowered.com/app/2060160/The_Farmer_Was_Replaced/',
          },
          {
            id: 'screeps',
            name: 'Screeps',
            description: 'Un MMO de estrategia donde tu colonia vive y lucha mediante JavaScript.',
            url: 'https://screeps.com/',
          },
          {
            id: 'human-resource',
            name: 'Human Resource Machine',
            description: 'Rompecabezas basados en logica de bajo nivel.',
            url: 'https://tomorrowcorporation.com/humanresourcemachine',
          },
          {
            id: 'lightbot',
            name: 'Lightbot',
            description: 'Ideal para entender secuencias, bucles y funciones de forma visual.',
            url: 'https://lightbot.com/',
          },
          {
            id: 'gladiabots',
            name: 'Gladiabots',
            description: 'Programa la IA de tus robots para vencer a otros escuadrones.',
            url: 'https://gladiabots.com/',
          },
          {
            id: 'tis-100',
            name: 'Tis-100',
            description: 'El juego de programacion mas dificil; repara circuitos usando ensamblador.',
            url: 'https://www.zachtronics.com/tis-100/',
          },
          {
            id: 'colobot',
            name: 'Colobot',
            description: 'Juego 3D donde programas robots para colonizar planetas.',
            url: 'https://colobot.info/',
          },
          {
            id: 'w3schools-game',
            name: 'W3Schools CodeGame',
            description: 'Practica rapida de logica directamente en el navegador.',
            url: 'https://www.w3schools.com/codegame/',
          },
        ],
      },
    ],
  },
  {
    id: 'improve-programming-2026',
    slug: 'improve-programming-2026',
    icon: '🚀',
    sections: [
      {
        id: 'systems-thinking',
        title: {
          es: '1. Pensar en Sistemas (Mentalidad de Arquitecto)',
          en: '1. Systems Thinking (Architect Mindset)',
        },
        resources: [
          {
            id: 'excalidraw',
            name: 'Excalidraw',
            description: 'Pizarra virtual para diagramas rapidos.',
            url: 'https://excalidraw.com/',
          },
          {
            id: 'eraser',
            name: 'Eraser.io',
            description: 'El canvas ideal para arquitectura tecnica.',
            url: 'https://www.eraser.io/',
          },
          {
            id: 'mermaid',
            name: 'Mermaid.ai',
            description: 'Genera diagramas a partir de codigo.',
            url: 'https://mermaid.live/',
          },
          {
            id: 'lucidchart',
            name: 'Lucidchart',
            description: 'Flujos de procesos profesionales.',
            url: 'https://www.lucidchart.com/',
          },
        ],
      },
      {
        id: 'integrations-apis',
        title: {
          es: '2. Entender el "Pegamento" (Integraciones y APIs)',
          en: '2. Understanding the "Glue" (Integrations & APIs)',
        },
        resources: [
          {
            id: 'postman',
            name: 'Postman Academy',
            description: 'Aprende todo sobre testing de APIs.',
            url: 'https://learning.postman.com/',
          },
          {
            id: 'webhooks',
            name: 'Webhooks.fyi',
            description: 'Guia completa sobre eventos en tiempo real.',
            url: 'https://webhooks.fyi/',
          },
          {
            id: 'swagger',
            name: 'Swagger.io',
            description: 'Estandar para documentacion de APIs.',
            url: 'https://swagger.io/',
          },
          {
            id: 'rapidapi-learn',
            name: 'RapidAPI Learn',
            description: 'Cursos interactivos sobre APIs.',
            url: 'https://rapidapi.com/learn',
          },
        ],
      },
      {
        id: 'logic-problems',
        title: {
          es: '3. Logica Pura y Resolucion de Problemas',
          en: '3. Pure Logic & Problem Solving',
        },
        resources: [
          {
            id: 'brilliant',
            name: 'Brilliant.org',
            description: 'Pensamiento computacional y logica.',
            url: 'https://brilliant.org/',
          },
          {
            id: 'leetcode',
            name: 'LeetCode',
            description: 'Desafios tecnicos de algoritmos.',
            url: 'https://leetcode.com/',
          },
          {
            id: 'codewars-2',
            name: 'Codewars',
            description: 'Entrena tu logica con retos de la comunidad.',
            url: 'https://www.codewars.com/',
          },
          {
            id: 'sqlbolt',
            name: 'SQLBolt',
            description: 'Aprende SQL de forma interactiva.',
            url: 'https://sqlbolt.com/',
          },
          {
            id: 'roadmap',
            name: 'Roadmap.sh',
            description: 'Mapas de aprendizaje por rol.',
            url: 'https://roadmap.sh/',
          },
          {
            id: 'github-skills',
            name: 'GitHub Skills',
            description: 'Cursos oficiales de Git y GitHub.',
            url: 'https://skills.github.com/',
          },
        ],
      },
      {
        id: 'planning-workflow',
        title: {
          es: '4. Planificacion y Flujos de Trabajo',
          en: '4. Planning & Workflows',
        },
        resources: [
          {
            id: 'notion',
            name: 'Notion',
            description: 'Gestion de conocimiento y tareas.',
            url: 'https://www.notion.so/',
          },
          {
            id: 'clickup',
            name: 'ClickUp',
            description: 'Organizacion de proyectos.',
            url: 'https://clickup.com/',
          },
          {
            id: 'trello',
            name: 'Trello',
            description: 'Tableros Kanban para equipos.',
            url: 'https://trello.com/',
          },
          {
            id: 'asana',
            name: 'Asana',
            description: 'Gestion de proyectos colaborativos.',
            url: 'https://asana.com/',
          },
          {
            id: 'github-projects',
            name: 'GitHub Projects',
            description: 'Gestion integrada en tus repositorios.',
            url: 'https://github.com/features/issues',
          },
          {
            id: 'github-actions',
            name: 'GitHub Actions',
            description: 'Automatizacion y CI/CD.',
            url: 'https://github.com/features/actions',
          },
        ],
      },
      {
        id: 'deploy',
        title: {
          es: '5. Dominar el Deploy (El arte de entregar)',
          en: '5. Master Deployment (The Art of Delivery)',
        },
        resources: [
          {
            id: 'railway',
            name: 'Railway.app',
            description: 'Deploy de apps completo de forma simple.',
            url: 'https://railway.app/',
          },
          {
            id: 'fly',
            name: 'Fly.io',
            description: 'Despliegue cercano a los usuarios.',
            url: 'https://fly.io/',
          },
          {
            id: 'vercel',
            name: 'Vercel',
            description: 'La mejor plataforma para frontend.',
            url: 'https://vercel.com/',
          },
          {
            id: 'render',
            name: 'Render',
            description: 'Alternativa robusta para web apps.',
            url: 'https://render.com/',
          },
          {
            id: 'digitalocean',
            name: 'DigitalOcean Tutorials',
            description: 'Guias maestras de infraestructura.',
            url: 'https://www.digitalocean.com/community/tutorials',
          },
          {
            id: 'docker-play',
            name: 'Play with Docker',
            description: 'Laboratorio gratuito de contenedores.',
            url: 'https://labs.play-with-docker.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'free-resources-2026',
    slug: 'free-resources-2026',
    icon: '📚',
    sections: [
      {
        id: 'learning-platforms',
        title: {
          es: 'Plataformas de Aprendizaje Integral',
          en: 'Comprehensive Learning Platforms',
        },
        resources: [
          {
            id: 'freecodecamp',
            name: 'freeCodeCamp',
            description: 'Certificaciones gratuitas en diseno web responsive, JavaScript, algoritmos y bases de datos.',
            url: 'https://www.freecodecamp.org',
          },
          {
            id: 'odin-project',
            name: 'The Odin Project',
            description: 'El mejor curriculo gratuito para ser Fullstack (Ruby on Rails o Node.js).',
            url: 'https://www.theodinproject.com',
          },
          {
            id: 'codecademy',
            name: 'Codecademy',
            description: 'Cursos interactivos muy intuitivos con version gratuita amplia.',
            url: 'https://www.codecademy.com',
          },
          {
            id: 'sololearn',
            name: 'SoloLearn',
            description: 'Ideal para aprender sintaxis de lenguajes de forma rapida y desde el movil.',
            url: 'https://www.sololearn.com',
          },
          {
            id: 'edutin',
            name: 'Edutin Academy',
            description: 'Cursos organizados por niveles con opcion a certificacion.',
            url: 'https://edutin.com',
          },
        ],
      },
      {
        id: 'university-courses',
        title: {
          es: 'Cursos (Harvard y Universidades)',
          en: 'University Courses (Harvard & More)',
        },
        resources: [
          {
            id: 'cs50-ai',
            name: 'CS50 Introduction to AI with Python',
            description: 'El curso insignia de Harvard para entender la inteligencia artificial.',
            url: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python',
          },
          {
            id: 'cs50-web',
            name: 'CS50 Web Programming with Python and JS',
            description: 'Perfecto para pasar de las bases a aplicaciones web reales.',
            url: 'https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript',
          },
          {
            id: 'edx',
            name: 'edX',
            description: 'Acceso a cursos de Google, IBM, Microsoft y las mejores universidades.',
            url: 'https://www.edx.org',
          },
          {
            id: 'coursera',
            name: 'Coursera',
            description: 'Cursos con opcion "auditar" para ver el contenido gratis.',
            url: 'https://www.coursera.org',
          },
          {
            id: 'cognitive-class',
            name: 'Cognitive Class',
            description: 'Iniciativa de IBM con cursos gratuitos sobre Ciencia de Datos, Cloud e IA.',
            url: 'https://cognitiveclass.ai',
          },
        ],
      },
      {
        id: 'language-specialization',
        title: {
          es: 'Especializacion por Lenguajes y Herramientas',
          en: 'Language & Tool Specialization',
        },
        resources: [
          {
            id: 'aprende-js',
            name: 'AprendeJavaScript.dev',
            description: 'Un recurso excelente en espanol para dominar el lenguaje de la web.',
            url: 'https://aprendejavascript.dev',
          },
          {
            id: 'learn-python',
            name: 'LearnPython.org',
            description: 'Tutoriales interactivos desde cero.',
            url: 'https://www.learnpython.org',
          },
          {
            id: 'sqlbolt-2',
            name: 'SQLBolt',
            description: 'Lecciones interactivas para aprender a consultar bases de datos.',
            url: 'https://sqlbolt.com',
          },
          {
            id: 'rapidapi-learn-2',
            name: 'RapidAPI Learn',
            description: 'Guias para aprender a conectar aplicaciones mediante APIs.',
            url: 'https://rapidapi.com/learn',
          },
        ],
      },
      {
        id: 'practice-reference',
        title: {
          es: 'Practica, Retos y Referencia',
          en: 'Practice, Challenges & Reference',
        },
        resources: [
          {
            id: 'project-euler',
            name: 'Project Euler',
            description: 'Desafios matematicos y de programacion para entrenar la logica.',
            url: 'https://projecteuler.net',
          },
          {
            id: 'goalkicker',
            name: 'GoalKicker',
            description: 'Libros gratuitos compilados de Stack Overflow sobre casi cualquier lenguaje.',
            url: 'https://books.goalkicker.com',
          },
          {
            id: 'code-org',
            name: 'Code.org',
            description: 'Ideal para principiantes absolutos o para entender los fundamentos.',
            url: 'https://code.org',
          },
        ],
      },
    ],
  },
  {
    id: 'frontend-react-project',
    slug: 'frontend-react-project',
    icon: '⚛️',
    sections: [
      {
        id: 'web-fundamentals',
        title: {
          es: '1. Fundamentos de Programacion y Web',
          en: '1. Programming & Web Fundamentals',
        },
        resources: [
          {
            id: 'mdn-html',
            name: 'MDN - Introduccion a HTML',
            description: 'Estructura de la web con HTML.',
            url: 'https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML',
          },
          {
            id: 'mdn-css',
            name: 'MDN - Introduccion a CSS',
            description: 'Estilos y diseno con CSS.',
            url: 'https://developer.mozilla.org/es/docs/Learn/CSS/First_steps',
          },
          {
            id: 'mdn-js',
            name: 'MDN - Introduccion a JavaScript',
            description: 'Logica y programacion en la web.',
            url: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps',
          },
          {
            id: 'js-info',
            name: 'JavaScript.info',
            description: 'Tutorial completo de JavaScript moderno.',
            url: 'https://javascript.info/',
          },
        ],
      },
      {
        id: 'tools-installation',
        title: {
          es: '2. Instalacion de Herramientas',
          en: '2. Tools Installation',
        },
        resources: [
          {
            id: 'nodejs',
            name: 'Node.js',
            description: 'Ejecuta JavaScript fuera del navegador (LTS recomendado).',
            url: 'https://nodejs.org/',
          },
          {
            id: 'vscode',
            name: 'Visual Studio Code',
            description: 'Editor de codigo recomendado.',
            url: 'https://code.visualstudio.com/',
          },
          {
            id: 'git',
            name: 'Git',
            description: 'Control de versiones.',
            url: 'https://git-scm.com/',
          },
          {
            id: 'git-tutorial',
            name: 'Curso basico de Git y GitHub',
            description: 'Tutorial en YouTube por Codigo Facilito.',
            url: 'https://www.youtube.com/watch?v=HiXLkL42tMU',
          },
        ],
      },
      {
        id: 'learn-react',
        title: {
          es: '3. Aprender React',
          en: '3. Learn React',
        },
        resources: [
          {
            id: 'react-docs',
            name: 'React Docs en Espanol',
            description: 'Documentacion oficial de React.',
            url: 'https://es.react.dev/',
          },
          {
            id: 'react-midudev',
            name: 'React desde cero - Midudev',
            description: 'Curso gratuito en YouTube.',
            url: 'https://www.youtube.com/watch?v=7iobxzd_2wY',
          },
          {
            id: 'react-freecodecamp',
            name: 'Curso de React - FreeCodeCamp',
            description: 'Curso completo en espanol.',
            url: 'https://www.youtube.com/watch?v=6Jfk8ic3KVk',
          },
        ],
      },
      {
        id: 'apis-google-sheets',
        title: {
          es: '4. Conectar con APIs (Google Sheets)',
          en: '4. Connect with APIs (Google Sheets)',
        },
        resources: [
          {
            id: 'fetch-api',
            name: 'Fetch API (MDN)',
            description: 'Documentacion oficial para hacer requests HTTP.',
            url: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch',
          },
          {
            id: 'google-sheets-api',
            name: 'Google Sheets API Overview',
            description: 'Documentacion oficial de Google Sheets API.',
            url: 'https://developers.google.com/sheets/api/guides/concepts',
          },
          {
            id: 'sheets-json',
            name: 'Google Sheets como JSON API',
            description: 'Usa Google Sheets como si fuera una API.',
            url: 'https://medium.com/unly-org/how-to-consume-any-json-api-using-google-sheets-and-keep-it-up-to-date-automagically-fb6e94521abd',
          },
        ],
      },
      {
        id: 'styles-design',
        title: {
          es: '5. Estilos y Diseno',
          en: '5. Styles & Design',
        },
        resources: [
          {
            id: 'flexbox-guide',
            name: 'Flexbox Guide (CSS Tricks)',
            description: 'Guia completa de Flexbox.',
            url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
          },
          {
            id: 'grid-guide',
            name: 'CSS Grid Guide (CSS Tricks)',
            description: 'Guia completa de CSS Grid.',
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
          },
          {
            id: 'tailwind',
            name: 'Tailwind CSS',
            description: 'Framework CSS rapido y moderno.',
            url: 'https://tailwindcss.com/docs/installation',
          },
          {
            id: 'bootstrap',
            name: 'Bootstrap',
            description: 'Framework CSS clasico y sencillo.',
            url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
          },
          {
            id: 'tailwind-midudev',
            name: 'Curso de Tailwind CSS - Midudev',
            description: 'Curso en espanol.',
            url: 'https://youtu.be/R5EXap3vNDA',
          },
        ],
      },
      {
        id: 'forms-state',
        title: {
          es: '6. Formularios y Manejo de Estado',
          en: '6. Forms & State Management',
        },
        resources: [
          {
            id: 'react-forms',
            name: 'React Forms',
            description: 'Documentacion oficial de formularios en React.',
            url: 'https://es.react.dev/learn/sharing-state-between-components#forms',
          },
          {
            id: 'react-hook-form',
            name: 'React Hook Form',
            description: 'Libreria para validacion de formularios.',
            url: 'https://react-hook-form.com/',
          },
        ],
      },
      {
        id: 'github-deploy',
        title: {
          es: '7. Control de Versiones y Deploy',
          en: '7. Version Control & Deployment',
        },
        resources: [
          {
            id: 'github-hello',
            name: 'Hello World con GitHub',
            description: 'Guia paso a paso oficial.',
            url: 'https://docs.github.com/es/get-started/quickstart/hello-world',
          },
          {
            id: 'github-upload',
            name: 'Como subir un proyecto a GitHub',
            description: 'Tutorial en YouTube.',
            url: 'https://youtu.be/3GymExBkKjE',
          },
          {
            id: 'vercel-docs',
            name: 'Deploy con Vercel',
            description: 'Documentacion de Vercel.',
            url: 'https://vercel.com/docs',
          },
          {
            id: 'netlify-docs',
            name: 'Deploy con Netlify',
            description: 'Documentacion de Netlify.',
            url: 'https://docs.netlify.com/',
          },
        ],
      },
      {
        id: 'complementary',
        title: {
          es: '8. Recursos Complementarios',
          en: '8. Complementary Resources',
        },
        resources: [
          {
            id: 'eloquent-js',
            name: 'Eloquent JavaScript',
            description: 'Libro gratuito de JavaScript avanzado.',
            url: 'https://eloquentjavascript.net/',
          },
          {
            id: 'frontend-roadmap',
            name: 'Frontend Developer Roadmap',
            description: 'Que aprender y en que orden.',
            url: 'https://roadmap.sh/frontend',
          },
          {
            id: 'hackerrank',
            name: 'HackerRank',
            description: 'Practica logica de programacion.',
            url: 'https://www.hackerrank.com/',
          },
          {
            id: 'exercism',
            name: 'Exercism',
            description: 'Ejercicios cortos e interactivos.',
            url: 'https://exercism.org/',
          },
          {
            id: 'freecodecamp-es',
            name: 'FreeCodeCamp en Espanol',
            description: 'Comunidad y recursos en espanol.',
            url: 'https://www.freecodecamp.org/espanol/',
          },
          {
            id: 'midudev-discord',
            name: 'Comunidad MiduDev (Discord)',
            description: 'Comunidad de desarrolladores en espanol.',
            url: 'https://discord.gg/midudev',
          },
        ],
      },
    ],
  },
  {
    id: 'web-optimization',
    slug: 'web-optimization',
    icon: '⚡',
    sections: [
      {
        id: 'image-optimization',
        title: {
          es: '1. Optimizacion de Imagenes',
          en: '1. Image Optimization',
        },
        resources: [
          {
            id: 'squoosh',
            name: 'Squoosh',
            description: 'Comprime y convierte a WebP/AVIF online.',
            url: 'https://squoosh.app/',
          },
          {
            id: 'sharp',
            name: 'Sharp (npm)',
            description: 'El estandar para procesar imagenes en Node.js.',
            url: 'https://sharp.pixelplumbing.com/',
          },
          {
            id: 'cloudinary',
            name: 'Cloudinary',
            description: 'CDN que transforma imagenes mediante URL.',
            url: 'https://cloudinary.com/',
          },
          {
            id: 'imagekit',
            name: 'ImageKit',
            description: 'CDN de imagenes con transformaciones.',
            url: 'https://imagekit.io/',
          },
          {
            id: 'webdev-images',
            name: 'web.dev - Imagenes',
            description: 'Guia oficial de Google sobre formatos modernos.',
            url: 'https://web.dev/learn/images',
          },
        ],
      },
      {
        id: 'lazy-loading',
        title: {
          es: '2. Lazy Loading y Code Splitting',
          en: '2. Lazy Loading & Code Splitting',
        },
        resources: [
          {
            id: 'webpack-split',
            name: 'Webpack SplitChunks',
            description: 'Divide tu codigo automaticamente.',
            url: 'https://webpack.js.org/plugins/split-chunks-plugin/',
          },
          {
            id: 'react-lazy',
            name: 'React.lazy / Suspense',
            description: 'La forma oficial de diferir componentes en React.',
            url: 'https://react.dev/reference/react/lazy',
          },
          {
            id: 'intersection-observer',
            name: 'Intersection Observer API',
            description: 'Crea tu propio lazy load sin librerias.',
            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
          },
        ],
      },
      {
        id: 'reduce-javascript',
        title: {
          es: '3. Reducir JavaScript',
          en: '3. Reduce JavaScript',
        },
        resources: [
          {
            id: 'bundlephobia',
            name: 'Bundlephobia',
            description: 'Consulta el peso de una libreria antes de instalarla.',
            url: 'https://bundlephobia.com/',
          },
          {
            id: 'terser',
            name: 'Terser',
            description: 'El minificador estandar para produccion.',
            url: 'https://terser.org/',
          },
        ],
      },
      {
        id: 'caching',
        title: {
          es: '4. Cache Correcta',
          en: '4. Proper Caching',
        },
        resources: [
          {
            id: 'mdn-cache',
            name: 'MDN Cache-Control',
            description: 'Guia tecnica de headers de cache.',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control',
          },
          {
            id: 'webdev-cache',
            name: 'web.dev HTTP Caching',
            description: 'Mejores practicas de Google.',
            url: 'https://web.dev/http-cache/',
          },
          {
            id: 'workbox',
            name: 'Workbox (PWA/SW)',
            description: 'Libreria para gestionar Service Workers y cache offline.',
            url: 'https://developer.chrome.com/docs/workbox/',
          },
        ],
      },
      {
        id: 'hosting-cdn',
        title: {
          es: '5. Hosting y CDN',
          en: '5. Hosting & CDN',
        },
        resources: [
          {
            id: 'vercel-2',
            name: 'Vercel',
            description: 'Despliegue global optimizado para frontend.',
            url: 'https://vercel.com/',
          },
          {
            id: 'cloudflare-pages',
            name: 'Cloudflare Pages',
            description: 'CDN masiva con plan gratuito generoso.',
            url: 'https://pages.cloudflare.com/',
          },
          {
            id: 'netlify-2',
            name: 'Netlify',
            description: 'Edge functions y deploys ultra simples.',
            url: 'https://www.netlify.com/',
          },
          {
            id: 'bunny',
            name: 'Bunny.net',
            description: 'CDN de alto rendimiento.',
            url: 'https://bunny.net/',
          },
        ],
      },
      {
        id: 'critical-css',
        title: {
          es: '6. CSS Critico',
          en: '6. Critical CSS',
        },
        resources: [
          {
            id: 'critters',
            name: 'Critters',
            description: 'Inyecta el CSS critico automaticamente en el build.',
            url: 'https://github.com/GoogleChromeLabs/critters',
          },
          {
            id: 'purgecss',
            name: 'PurgeCSS',
            description: 'Elimina el CSS que no usas en el bundle final.',
            url: 'https://purgecss.com/',
          },
          {
            id: 'critical',
            name: 'critical (npm)',
            description: 'Extrae y separa el CSS "above-the-fold".',
            url: 'https://github.com/addyosmani/critical',
          },
        ],
      },
      {
        id: 'reduce-requests',
        title: {
          es: '7. Reducir Requests',
          en: '7. Reduce Requests',
        },
        resources: [
          {
            id: 'google-fonts',
            name: 'Google Fonts (Self-host)',
            description: 'Descarga fuentes para servirlas tu mismo.',
            url: 'https://fonts.google.com/',
          },
          {
            id: 'gtmetrix',
            name: 'GTmetrix',
            description: 'Detecta requests lentas y scripts pesados.',
            url: 'https://gtmetrix.com/',
          },
          {
            id: 'request-map',
            name: 'Request Map',
            description: 'Mapa visual de todas tus peticiones.',
            url: 'https://requestmap.webperf.tools/',
          },
        ],
      },
      {
        id: 'audit-tools',
        title: {
          es: 'Herramientas de Auditoria',
          en: 'Audit Tools',
        },
        resources: [
          {
            id: 'lighthouse',
            name: 'Lighthouse',
            description: 'Integrado en Chrome DevTools.',
            url: 'https://developer.chrome.com/docs/lighthouse/overview/',
          },
          {
            id: 'pagespeed',
            name: 'PageSpeed Insights',
            description: 'Datos reales de Google (CrUX).',
            url: 'https://pagespeed.web.dev/',
          },
          {
            id: 'webpagetest',
            name: 'WebPageTest',
            description: 'Tests detallados de carga por paises.',
            url: 'https://www.webpagetest.org/',
          },
        ],
      },
    ],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getAllGuides(): Guide[] {
  return guides
}

export function getTotalResources(guide: Guide): number {
  return guide.sections.reduce((acc, section) => acc + section.resources.length, 0)
}
