export interface Resource {
  id: string
  name: string
  description: string
  url?: string
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
            id: 'logic-practice',
            name: 'Logic-Practice.com',
            description: 'Ejercicios de logica pura.',
            url: 'https://logic-practice.com/',
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
            description: 'Guías maestras de infraestructura.',
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
            description: 'Guías para aprender a conectar aplicaciones mediante APIs.',
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
            id: 'leetcode-react',
            name: 'LeetCode',
            description: 'Desafios tecnicos de algoritmos.',
            url: 'https://leetcode.com/',
          },
          {
            id: 'codewars-react',
            name: 'Codewars',
            description: 'Entrena tu logica con retos de la comunidad.',
            url: 'https://www.codewars.com/',
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
            id: 'next-image',
            name: 'next/image',
            description: 'Optimizacion automatica si usas Next.js.',
            url: 'https://nextjs.org/docs/basic-features/image-optimization',
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
            id: 'vite-lazy',
            name: 'Vite Lazy Loading',
            description: 'Soporte nativo para imports dinamicos.',
            url: 'https://vitejs.dev/guide/features.html#dynamic-import',
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
            id: 'webpack-bundle-analyzer',
            name: 'Webpack Bundle Analyzer',
            description: 'Visualiza el peso de tus paquetes.',
            url: 'https://www.npmjs.com/package/webpack-bundle-analyzer',
          },
          {
            id: 'rollup-treeshaking',
            name: 'Rollup / Vite Tree-shaking',
            description: 'Elimina codigo innecesario automaticamente.',
            url: 'https://rollupjs.org/guide/en/#tree-shaking',
          },
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
          {
            id: 'fastly',
            name: 'Fastly',
            description: 'CDN de alto rendimiento para aplicaciones modernas.',
            url: 'https://www.fastly.com/',
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
          {
            id: 'uncss',
            name: 'UnCSS',
            description: 'Detecta y limpia reglas CSS inutiles.',
            url: 'https://github.com/uncss/uncss',
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
          {
            id: 'webdev-measure',
            name: 'web.dev/measure',
            description: 'El hub de Google para Core Web Vitals.',
            url: 'https://web.dev/measure',
          },
        ],
      },
    ],
  },
  {
    id: 'portfolio-resources',
    slug: 'portfolio-resources',
    icon: '💼',
    sections: [
      {
        id: 'learning-platforms-portfolio',
        title: {
          es: 'Plataformas de Aprendizaje Integral',
          en: 'Comprehensive Learning Platforms',
        },
        resources: [
          {
            id: 'freecodecamp-portfolio',
            name: 'FreeCodeCamp',
            description: 'Certificaciones gratuitas desde diseno web responsivo hasta analisis de datos.',
            url: 'https://www.freecodecamp.org',
          },
          {
            id: 'odin-portfolio',
            name: 'The Odin Project',
            description: 'Curriculo ultra completo para Full Stack (JavaScript o Ruby on Rails).',
            url: 'https://www.theodinproject.com',
          },
          {
            id: 'fullstack-open',
            name: 'Full Stack Open',
            description: 'Curso de nivel universitario sobre desarrollo web moderno (React, Redux, Node.js, MongoDB, GraphQL).',
            url: 'https://fullstackopen.com',
          },
        ],
      },
      {
        id: 'challenges-projects',
        title: {
          es: 'Desafios y Proyectos Practicos',
          en: 'Challenges & Practical Projects',
        },
        resources: [
          {
            id: 'frontend-mentor',
            name: 'Frontend Mentor',
            description: 'Te dan el diseno y tu construyes el codigo. Ideal para mejorar en CSS y maquetacion.',
            url: 'https://www.frontendmentor.io',
          },
          {
            id: 'roadmap-projects',
            name: 'Roadmap.sh Projects',
            description: 'Ideas de proyectos divididas por nivel (principiante, intermedio, avanzado).',
            url: 'https://roadmap.sh/projects',
          },
          {
            id: 'briefsupply',
            name: 'BriefSupply',
            description: 'Te entrega "briefs" como si fueran de un cliente real. Perfecto para simular experiencia laboral.',
            url: 'https://briefsupply.com/projects',
          },
          {
            id: 'codementor-projects',
            name: 'Codementor Projects',
            description: 'Proyectos reales para practicar. Puedes ver como otros los resolvieron.',
            url: 'https://www.codementor.io/projects',
          },
        ],
      },
      {
        id: 'github-repos-ideas',
        title: {
          es: 'Repos de GitHub con Listas de Ideas y Retos',
          en: 'GitHub Repos with Ideas & Challenges',
        },
        resources: [
          {
            id: 'app-ideas',
            name: 'App Ideas (Florin Pop)',
            description: 'Lista gigante de aplicaciones clasificadas por dificultad con requerimientos minimos.',
            url: 'https://github.com/florinpop17/app-ideas',
          },
          {
            id: 'build-your-own-x',
            name: 'Build Your Own X',
            description: 'Aprende a construir desde cero cosas como un servidor Git, un Docker o un motor de busqueda.',
            url: 'https://github.com/codecrafters-io/build-your-own-x',
          },
          {
            id: 'project-ideas-resources',
            name: 'Project Ideas & Resources',
            description: 'Repositorio con muchas ideas variadas y recursos extra.',
            url: 'https://github.com/The-Cool-Coders/Project-Ideas-And-Resources',
          },
        ],
      },
    ],
  },
  {
    id: 'cv-portfolio-github',
    slug: 'cv-portfolio-github',
    icon: '📂',
    sections: [
      {
        id: 'planning-roadmaps',
        title: {
          es: 'Planificacion y Rutas de Aprendizaje',
          en: 'Planning & Learning Roadmaps',
        },
        resources: [
          {
            id: 'developer-roadmap',
            name: 'Developer Roadmap',
            description: 'Guías interactivas y caminos detallados para entender que tecnologias aprender segun tu rol.',
            url: 'https://github.com/nilbuild/developer-roadmap',
          },
        ],
      },
      {
        id: 'project-ideas-real',
        title: {
          es: 'Ideas de Proyectos Reales',
          en: 'Real Project Ideas',
        },
        resources: [
          {
            id: 'app-ideas-collection',
            name: 'App Ideas Collection',
            description: 'Lista de aplicaciones clasificadas por nivel de dificultad con requerimientos claros.',
            url: 'https://github.com/florinpop17/app-ideas',
          },
        ],
      },
      {
        id: 'project-based-learning',
        title: {
          es: 'Aprendizaje Basado en Proyectos',
          en: 'Project Based Learning',
        },
        resources: [
          {
            id: 'project-based-learning-repo',
            name: 'Project Based Learning',
            description: 'Lista curada de tutoriales donde aprendes lenguajes creando aplicaciones reales.',
            url: 'https://github.com/practical-tutorials/project-based-learning',
          },
        ],
      },
      {
        id: 'understand-internals',
        title: {
          es: 'Entiende la "Magia" Interna',
          en: 'Understand the "Magic" Inside',
        },
        resources: [
          {
            id: 'build-your-own-x-2',
            name: 'Build Your Own X',
            description: 'Aprende a recrear tecnologias famosas desde cero (Docker, Git, motor de busqueda).',
            url: 'https://github.com/codecrafters-io/build-your-own-x',
          },
        ],
      },
      {
        id: 'data-for-apps',
        title: {
          es: 'Datos para tus Aplicaciones',
          en: 'Data for Your Apps',
        },
        resources: [
          {
            id: 'public-apis',
            name: 'Public APIs',
            description: 'Directorio masivo de APIs gratuitas (clima, musica, finanzas) para proyectos profesionales.',
            url: 'https://github.com/public-apis/public-apis',
          },
        ],
      },
      {
        id: 'interview-prep',
        title: {
          es: 'Preparacion para Entrevistas Tecnicas',
          en: 'Technical Interview Preparation',
        },
        resources: [
          {
            id: 'coding-interview-university',
            name: 'Coding Interview University',
            description: 'Plan de estudio completo de Ciencias de la Computacion para grandes empresas tech.',
            url: 'https://github.com/jwasham/coding-interview-university',
          },
        ],
      },
      {
        id: 'awesome-resources',
        title: {
          es: 'Recursos Creados (The "Awesome" List)',
          en: 'Created Resources (The "Awesome" List)',
        },
        resources: [
          {
            id: 'awesome-list',
            name: 'Awesome Resources',
            description: 'La famosa "lista de listas". Recursos creados de cualquier lenguaje, framework o tecnologia.',
            url: 'https://github.com/sindresorhus/awesome',
          },
        ],
      },
      {
        id: 'trends',
        title: {
          es: 'Tendencias del Sector',
          en: 'Industry Trends',
        },
        resources: [
          {
            id: 'github-trending',
            name: 'GitHub Trending',
            description: 'Mantente al dia con lo que la comunidad esta construyendo ahora mismo.',
            url: 'https://github.com/trending',
          },
        ],
      },
    ],
  },
  {
    id: 'certifications-cv',
    slug: 'certifications-cv',
    icon: '🏆',
    sections: [
      {
        id: 'featured-certs',
        title: {
          es: '1. Certificaciones Destacadas (IA, Cloud y Git)',
          en: '1. Featured Certifications (AI, Cloud & Git)',
        },
        resources: [
          {
            id: 'claude-certified',
            name: 'Claude Certified Architect (Anthropic)',
            description: 'Enfoque en arquitectura de IA. Algunos certificados tienen costo.',
            url: 'https://anthropic.skilljar.com/claude-certified-architect-foundations-access-request',
          },
          {
            id: 'google-ai-essentials',
            name: 'Google AI Essentials',
            description: 'Fundamentos practicos de IA generativa para el trabajo.',
            url: 'https://grow.google/ai-essentials/',
          },
          {
            id: 'github-foundations',
            name: 'GitHub Foundations Certification',
            description: 'Validacion oficial de conocimientos en Git y colaboracion.',
            url: 'https://education.github.com/experiences/foundations_certificate',
          },
          {
            id: 'aws-skill-builder',
            name: 'AWS Skill Builder',
            description: 'Cursos fundamentales de Amazon Web Services con insignias gratuitas.',
            url: 'https://skillbuilder.aws',
          },
          {
            id: 'microsoft-learn',
            name: 'Microsoft Learn',
            description: 'Rutas de aprendizaje para "Applied Skills" y certificaciones en Azure.',
            url: 'https://learn.microsoft.com',
          },
        ],
      },
      {
        id: 'corporate-learning',
        title: {
          es: '2. Ecosistemas de Aprendizaje Corporativo',
          en: '2. Corporate Learning Ecosystems',
        },
        resources: [
          {
            id: 'ibm-skillsbuild',
            name: 'IBM SkillsBuild',
            description: 'Certificaciones en IA, Cloud, Ciberseguridad y Data Science con badges digitales.',
            url: 'https://skillsbuild.org/',
          },
          {
            id: 'google-skillshop',
            name: 'Google Skillshop',
            description: 'Formacion oficial en Analytics, Google Ads, Cloud e IA.',
            url: 'https://skillshop.withgoogle.com/',
          },
          {
            id: 'cisco-netacad',
            name: 'Cisco Networking Academy',
            description: 'Especializada en Redes, Ciberseguridad e IA con badges digitales gratuitos.',
            url: 'https://www.netacad.com/',
          },
          {
            id: 'ibm-cognitive',
            name: 'IBM Cognitive Class',
            description: 'Mas de 100 cursos tecnicos en IA, Big Data y Blockchain.',
            url: 'https://cognitiveclass.ai/',
          },
        ],
      },
      {
        id: 'code-data-platforms',
        title: {
          es: '3. Plataformas Especializadas en Codigo y Datos',
          en: '3. Specialized Code & Data Platforms',
        },
        resources: [
          {
            id: 'freecodecamp-certs',
            name: 'freeCodeCamp',
            description: 'Certificaciones completas (300h+) en HTML/CSS, JavaScript, Python, Data Science y ML.',
            url: 'https://www.freecodecamp.org/',
          },
          {
            id: 'kaggle-learn',
            name: 'Kaggle Learn',
            description: 'Cursos practicos de Python, SQL y ML con certificados de finalizacion rapidos.',
            url: 'https://www.kaggle.com/learn',
          },
          {
            id: 'sololearn-certs',
            name: 'Sololearn',
            description: 'Certificados en multiples lenguajes de programacion (JS, Python, C++, etc.).',
            url: 'https://www.sololearn.com/',
          },
          {
            id: 'elements-of-ai',
            name: 'Elements of AI',
            description: 'Fundamentos de IA con certificado gratuito, avalado por la Universidad de Helsinki.',
            url: 'https://www.elementsofai.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'api-real-world',
    slug: 'api-real-world',
    icon: '🔌',
    sections: [
      {
        id: 'api-design-roadmap',
        title: {
          es: 'Ruta Completa: Diseno y Consumo de APIs',
          en: 'Complete Roadmap: API Design & Consumption',
        },
        resources: [
          {
            id: 'roadmap-api-design',
            name: 'Roadmap.sh - API Design',
            description: 'Ruta completa para aprender diseno y consumo de APIs paso a paso.',
            url: 'https://roadmap.sh/api-design',
          },
          {
            id: 'public-apis-repo',
            name: 'Public APIs (+1,400 APIs publicas)',
            description: 'El repositorio mas famoso con mas de 1,400 APIs publicas para practicar e integrar.',
            url: 'https://github.com/public-apis/public-apis',
          },
        ],
      },
      {
        id: 'api-projects-practice',
        title: {
          es: 'Proyectos Paso a Paso con Feedback',
          en: 'Step-by-Step Projects with Feedback',
        },
        resources: [
          {
            id: 'frontend-mentor-challenges',
            name: 'Frontend Mentor Challenges',
            description: 'Proyectos paso a paso con feedback de la comunidad para practicar consumo de APIs.',
            url: 'https://www.frontendmentor.io/challenges',
          },
        ],
      },
      {
        id: 'api-documentation',
        title: {
          es: 'Documentacion Interactiva de APIs',
          en: 'Interactive API Documentation',
        },
        resources: [
          {
            id: 'swagger-ui',
            name: 'Swagger UI',
            description: 'Genera documentacion interactiva para tu API de forma profesional.',
            url: 'https://swagger.io/tools/swagger-ui',
          },
        ],
      },
      {
        id: 'api-clients-tools',
        title: {
          es: 'Clientes y Herramientas para APIs',
          en: 'API Clients & Tools',
        },
        resources: [
          {
            id: 'hoppscotch',
            name: 'Hoppscotch',
            description: 'Cliente REST/GraphQL desde el navegador. Rapido, ligero y open source.',
            url: 'https://hoppscotch.io',
          },
          {
            id: 'jsonplaceholder',
            name: 'JSONPlaceholder',
            description: 'Fake REST API gratuita para practicar peticiones HTTP sin configurar backend.',
            url: 'https://jsonplaceholder.typicode.com',
          },
        ],
      },
      {
        id: 'api-deploy',
        title: {
          es: 'Deploy: Publica tu API',
          en: 'Deploy: Publish Your API',
        },
        resources: [
          {
            id: 'railway-deploy',
            name: 'Railway',
            description: 'Publica tu API en minutos. Soporte para Node.js, Python, Go y mas.',
            url: 'https://railway.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'logic-practice-30-days',
    slug: 'logic-practice-30-days',
    icon: '🧠',
    sections: [
      {
        id: 'algorithms-data-structures',
        title: {
          es: 'Problemas de Algoritmos y Estructuras de Datos',
          en: 'Algorithm & Data Structure Problems',
        },
        resources: [
          {
            id: 'leetcode-logic',
            name: 'LeetCode',
            description: 'Retos diarios por niveles.',
            url: 'https://leetcode.com/',
          },
          {
            id: 'codewars-logic',
            name: 'Codewars',
            description: 'Logica visual y pensamiento algoritmico.',
            url: 'https://www.codewars.com/',
          },
          {
            id: 'codingame-logic',
            name: 'CodinGame',
            description: 'Ejercicios con feedback de mentores.',
            url: 'https://www.codingame.com/',
          },
          {
            id: 'exercism-logic',
            name: 'Exercism',
            description: 'Ejercicios con feedback de mentores.',
            url: 'https://exercism.org/',
          },
        ],
      },
      {
        id: 'visual-logic-reasoning',
        title: {
          es: 'Logica Visual y Razonamiento',
          en: 'Visual Logic & Reasoning',
        },
        resources: [
          {
            id: 'excalidraw-logic',
            name: 'Excalidraw',
            description: 'Entiende los procesos dibujando.',
            url: 'https://excalidraw.com/',
          },
          {
            id: 'project-euler-logic',
            name: 'Project Euler',
            description: 'Entrena razonamiento y creatividad.',
            url: 'https://projecteuler.net/',
          },
          {
            id: 'hackerrank-logic',
            name: 'HackerRank',
            description: 'Retos por dominio.',
            url: 'https://www.hackerrank.com/',
          },
          {
            id: 'logic-practice-site',
            name: 'Logic-Practice.com',
            description: 'Visualiza ejecucion paso a paso.',
            url: 'https://logic-practice.com/',
          },
          {
            id: 'brilliant-logic',
            name: 'Brilliant.org',
            description: 'Piensa como programador desde adentro.',
            url: 'https://brilliant.org/',
          },
        ],
      },
    ],
  },
  {
    id: 'aprender-como-senior',
    slug: 'aprender-como-senior',
    icon: '🚀',
    sections: [
      {
        id: 'cambio-de-mentalidad',
        title: {
          es: 'El cambio de mentalidad que me llevó 3 años, tú lo puedes hacer en 30 días',
          en: 'The mindset change that took me 3 years, you can do it in 30 days',
        },
        resources: [
          {
            id: 'consejo-1',
            name: 'Deja de hacer tutoriales',
            description: 'Empieza a construir cosas que nadie te pidió.',
          },
          {
            id: 'consejo-2',
            name: 'Rompe lo que construyes',
            description: 'Si no sabes cómo falla, no sabes cómo funciona.',
          },
          {
            id: 'consejo-3',
            name: 'Busca problemas reales',
            description: 'No busques cursos. Busca problemas reales que resolver.',
          },
          {
            id: 'consejo-4',
            name: 'Entiende por qué escalan y se rompen',
            description: 'La diferencia no es saber más lenguajes sino saber por qué las cosas escalan y por qué se rompen.',
          },
          {
            id: 'consejo-5',
            name: 'No saber y aprender es parte del trabajo',
            description: 'Entiende que NO SABER y aprender es parte del trabajo.',
          },
          {
            id: 'consejo-6',
            name: 'Diseña antes de codear',
            description: 'Diseña, planifica, crea diagramas de procesos antes de codear. SIEMPRE.',
          },
          {
            id: 'consejo-7',
            name: 'Documenta mientras codeas',
            description: 'Documenta mientras codeas, no después. Después no lo haces.',
          },
          {
            id: 'consejo-8',
            name: 'Resuelve lo simple primero',
            description: 'Resuelve el problema más simple primero. Luego escala.',
          },
        ],
      },
    ],
  },
  {
    id: 'tech-interview-prep',
    slug: 'tech-interview-prep',
    icon: '🎯',
    sections: [
      {
        id: 'live-coding-algorithms',
        title: {
          es: 'Ejercicios tipo Live Coding y Algoritmos',
          en: 'Live Coding & Algorithm Exercises',
        },
        resources: [
          {
            id: 'leetcode-interview',
            name: 'LeetCode',
            description: 'Comunidad más grande y estándar para preparar entrevistas técnicas.',
            url: 'https://leetcode.com/',
          },
          {
            id: 'pramp-interview',
            name: 'Pramp',
            description: 'Conecta con compañeros de práctica y entrena entrevistas juntos, con preguntas reales.',
            url: 'https://pramp.com/',
          },
          {
            id: 'interviewing-io',
            name: 'Interviewing.io',
            description: 'Te entrevistan ingenieros Senior o managers que toman decisiones de contratación. Incluye entrevistador de IA con feedback.',
            url: 'https://interviewing.io/',
          },
          {
            id: 'tech-interview-handbook',
            name: 'Tech Interview Handbook',
            description: 'Guía completa con patrones de algoritmos y estructuras de datos para que no te sorprenda ninguna pregunta.',
            url: 'https://techinterviewhandbook.org/',
          },
          {
            id: 'educative-mock',
            name: 'Educative Mock Interviews',
            description: 'IA que simula entrevistas reales de coding y system design.',
            url: 'https://educative.io/mock-interview',
          },
        ],
      },
      {
        id: 'cv-resume-review',
        title: {
          es: 'CV y Optimización para ATS',
          en: 'CV & ATS Optimization',
        },
        resources: [
          {
            id: 'teal-hq',
            name: 'Teal HQ (CV Tech Review)',
            description: 'Analiza tu CV y te dice qué cambiar para pasar filtros de reclutadores.',
            url: 'https://tealhq.com/',
          },
          {
            id: 'resume-worded',
            name: 'Resume Worded',
            description: 'Escanea tu CV como un ATS real y te da feedback instantáneo.',
            url: 'https://resumeworded.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'think-like-programmer',
    slug: 'think-like-programmer',
    icon: '🧠',
    sections: [
      {
        id: 'mentalidad-programador',
        title: {
          es: 'En 30 días puedes cambiar cómo piensas',
          en: 'In 30 days you can change how you think',
        },
        resources: [
          {
            id: 'tip-ia-pensar',
            name: 'Usa IA para pensar más rápido, NO para pensar menos',
            description: 'La IA es una herramienta para acelerar tu pensamiento, no para reemplazarlo.',
          },
          {
            id: 'tip-errores',
            name: 'Maneja errores como si TODO pudiera fallar',
            description: 'Asume que cualquier integración, API o librería puede fallar en cualquier momento.',
          },
          {
            id: 'tip-security',
            name: 'Nunca olvides temas de seguridad. NUNCA',
            description: 'La seguridad no es opcional ni algo que se agrega al final.',
          },
          {
            id: 'tip-bug',
            name: 'No arregles el bug. Pregúntate por qué existe ese BUG',
            description: 'Arreglar el síntoma no resuelve el problema. Entiende la causa raíz.',
          },
          {
            id: 'tip-disenar',
            name: 'Antes de codear, escríbelo o dibujalo',
            description: 'No basta con que funcione. Debe ser escalable y mantenible.',
          },
          {
            id: 'tip-casos',
            name: 'Piensa en todos los casos posibles antes que el usuario los encuentre por ti',
            description: 'El código que solo funciona para el caso feliz está roto.',
          },
          {
            id: 'tip-simple',
            name: 'La solución más simple que funciona PRIMERO. Las mejoras vienen DESPUÉS',
            description: 'No optimices prematuramente. Hazlo funcionar, luego hazlo mejor.',
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
