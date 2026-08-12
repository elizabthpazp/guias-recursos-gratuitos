import type { PublicGuide, PublicGuideSummary } from './guides-public'

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
            url: 'aHR0cHM6Ly9jb2RlY29tYmF0LmNvbS8=',
          },
          {
            id: 'codedex',
            name: 'Codedex',
            description: 'Una experiencia RPG para aprender Python, JS, HTML y mas.',
            url: 'aHR0cHM6Ly93d3cuY29kZWRleC5pby8=',
          },
          {
            id: 'codemonkey',
            name: 'Codemonkey',
            description: 'Muy visual, para entender logica de programacion desde cero.',
            url: 'aHR0cHM6Ly93d3cuY29kZW1vbmtleS5jb20v',
          },
          {
            id: 'codingame',
            name: 'Codingame',
            description: 'Resuelve problemas complejos para ganar batallas espaciales. Soporta casi todos los lenguajes.',
            url: 'aHR0cHM6Ly93d3cuY29kaW5nYW1lLmNvbS8=',
          },
          {
            id: 'checkio',
            name: 'Checkio.org',
            description: 'Retos de codigo en mundos tematicos (Python y TypeScript).',
            url: 'aHR0cHM6Ly9jaGVja2lvLm9yZy8=',
          },
          {
            id: 'codewars',
            name: 'Codewars',
            description: 'Entrena "katas" para subir de nivel y mejorar tus habilidades.',
            url: 'aHR0cHM6Ly93d3cuY29kZXdhcnMuY29tLw==',
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
            url: 'aHR0cHM6Ly9mbHVrZW91dC5naXRodWIuaW8v',
          },
          {
            id: 'flexbox-froggy',
            name: 'Flexbox Froggy',
            description: 'Aprende Flexbox ayudando a unas ranitas.',
            url: 'aHR0cHM6Ly9mbGV4Ym94ZnJvZ2d5LmNvbS8=',
          },
          {
            id: 'grid-garden',
            name: 'Grid Garden',
            description: 'Aprende CSS Grid cultivando tu propio jardin.',
            url: 'aHR0cHM6Ly9jc3NncmlkZ2FyZGVuLmNvbS8=',
          },
          {
            id: 'cssbattle',
            name: 'CSSBattle',
            description: 'Compite por replicar disenos con la menor cantidad de codigo.',
            url: 'aHR0cHM6Ly9jc3NiYXR0bGUuZGV2Lw==',
          },
          {
            id: 'flexbox-defense',
            name: 'Flexbox Defense',
            description: 'Un tower defense basado en posicionamiento Flexbox.',
            url: 'aHR0cDovL3d3dy5mbGV4Ym94ZGVmZW5zZS5jb20v',
          },
          {
            id: 'sql-murder',
            name: 'The SQL Murder Mystery',
            description: 'Resuelve un crimen usando consultas SQL.',
            url: 'aHR0cHM6Ly9teXN0ZXJ5LmtuaWdodGxhYi5jb20v',
          },
          {
            id: 'sql-island',
            name: 'SQL Island',
            description: 'Escapa de una isla desierta usando comandos de bases de datos.',
            url: 'aHR0cHM6Ly9zcWwtaXNsYW5kLmNvbS8=',
          },
          {
            id: 'cryptozombies',
            name: 'Cryptozombies',
            description: 'Aprende Solidity (Blockchain) creando tu ejercito de zombies.',
            url: 'aHR0cHM6Ly9jcnlwdG96b21iaWVzLmlvLw==',
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
            url: 'aHR0cHM6Ly9zdG9yZS5zdGVhbXBvd2VyZWQuY29tL2FwcC8yMDYwMTYwL1RoZV9GYXJtZXJfV2FzX1JlcGxhY2VkLw==',
          },
          {
            id: 'screeps',
            name: 'Screeps',
            description: 'Un MMO de estrategia donde tu colonia vive y lucha mediante JavaScript.',
            url: 'aHR0cHM6Ly9zY3JlZXBzLmNvbS8=',
          },
          {
            id: 'human-resource',
            name: 'Human Resource Machine',
            description: 'Rompecabezas basados en logica de bajo nivel.',
            url: 'aHR0cHM6Ly90b21vcnJvd2NvcnBvcmF0aW9uLmNvbS9odW1hbnJlc291cmNlbWFjaGluZQ==',
          },
          {
            id: 'lightbot',
            name: 'Lightbot',
            description: 'Ideal para entender secuencias, bucles y funciones de forma visual.',
            url: 'aHR0cHM6Ly9saWdodGJvdC5jb20v',
          },
          {
            id: 'gladiabots',
            name: 'Gladiabots',
            description: 'Programa la IA de tus robots para vencer a otros escuadrones.',
            url: 'aHR0cHM6Ly9nbGFkaWFib3RzLmNvbS8=',
          },
          {
            id: 'tis-100',
            name: 'Tis-100',
            description: 'El juego de programacion mas dificil; repara circuitos usando ensamblador.',
            url: 'aHR0cHM6Ly93d3cuemFjaHRyb25pY3MuY29tL3Rpcy0xMDAv',
          },
          {
            id: 'colobot',
            name: 'Colobot',
            description: 'Juego 3D donde programas robots para colonizar planetas.',
            url: 'aHR0cHM6Ly9jb2xvYm90LmluZm8v',
          },
          {
            id: 'w3schools-game',
            name: 'W3Schools CodeGame',
            description: 'Practica rapida de logica directamente en el navegador.',
            url: 'aHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jb2RlZ2FtZS8=',
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
            url: 'aHR0cHM6Ly9leGNhbGlkcmF3LmNvbS8=',
          },
          {
            id: 'eraser',
            name: 'Eraser.io',
            description: 'El canvas ideal para arquitectura tecnica.',
            url: 'aHR0cHM6Ly93d3cuZXJhc2VyLmlvLw==',
          },
          {
            id: 'mermaid',
            name: 'Mermaid.ai',
            description: 'Genera diagramas a partir de codigo.',
            url: 'aHR0cHM6Ly9tZXJtYWlkLmxpdmUv',
          },
          {
            id: 'lucidchart',
            name: 'Lucidchart',
            description: 'Flujos de procesos profesionales.',
            url: 'aHR0cHM6Ly93d3cubHVjaWRjaGFydC5jb20v',
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
            url: 'aHR0cHM6Ly9sZWFybmluZy5wb3N0bWFuLmNvbS8=',
          },
          {
            id: 'webhooks',
            name: 'Webhooks.fyi',
            description: 'Guia completa sobre eventos en tiempo real.',
            url: 'aHR0cHM6Ly93ZWJob29rcy5meWkv',
          },
          {
            id: 'swagger',
            name: 'Swagger.io',
            description: 'Estandar para documentacion de APIs.',
            url: 'aHR0cHM6Ly9zd2FnZ2VyLmlvLw==',
          },
          {
            id: 'rapidapi-learn',
            name: 'RapidAPI Learn',
            description: 'Cursos interactivos sobre APIs.',
            url: 'aHR0cHM6Ly9yYXBpZGFwaS5jb20vbGVhcm4=',
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
            url: 'aHR0cHM6Ly9icmlsbGlhbnQub3JnLw==',
          },
          {
            id: 'leetcode',
            name: 'LeetCode',
            description: 'Desafios tecnicos de algoritmos.',
            url: 'aHR0cHM6Ly9sZWV0Y29kZS5jb20v',
          },
          {
            id: 'codewars-2',
            name: 'Codewars',
            description: 'Entrena tu logica con retos de la comunidad.',
            url: 'aHR0cHM6Ly93d3cuY29kZXdhcnMuY29tLw==',
          },
          {
            id: 'logic-practice',
            name: 'Logic-Practice.com',
            description: 'Ejercicios de logica pura.',
            url: 'aHR0cHM6Ly9sb2dpYy1wcmFjdGljZS5jb20v',
          },
          {
            id: 'sqlbolt',
            name: 'SQLBolt',
            description: 'Aprende SQL de forma interactiva.',
            url: 'aHR0cHM6Ly9zcWxib2x0LmNvbS8=',
          },
          {
            id: 'roadmap',
            name: 'Roadmap.sh',
            description: 'Mapas de aprendizaje por rol.',
            url: 'aHR0cHM6Ly9yb2FkbWFwLnNoLw==',
          },
          {
            id: 'github-skills',
            name: 'GitHub Skills',
            description: 'Cursos oficiales de Git y GitHub.',
            url: 'aHR0cHM6Ly9za2lsbHMuZ2l0aHViLmNvbS8=',
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
            url: 'aHR0cHM6Ly93d3cubm90aW9uLnNvLw==',
          },
          {
            id: 'clickup',
            name: 'ClickUp',
            description: 'Organizacion de proyectos.',
            url: 'aHR0cHM6Ly9jbGlja3VwLmNvbS8=',
          },
          {
            id: 'trello',
            name: 'Trello',
            description: 'Tableros Kanban para equipos.',
            url: 'aHR0cHM6Ly90cmVsbG8uY29tLw==',
          },
          {
            id: 'asana',
            name: 'Asana',
            description: 'Gestion de proyectos colaborativos.',
            url: 'aHR0cHM6Ly9hc2FuYS5jb20v',
          },
          {
            id: 'github-projects',
            name: 'GitHub Projects',
            description: 'Gestion integrada en tus repositorios.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2ZlYXR1cmVzL2lzc3Vlcw==',
          },
          {
            id: 'github-actions',
            name: 'GitHub Actions',
            description: 'Automatizacion y CI/CD.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2ZlYXR1cmVzL2FjdGlvbnM=',
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
            url: 'aHR0cHM6Ly9yYWlsd2F5LmFwcC8=',
          },
          {
            id: 'fly',
            name: 'Fly.io',
            description: 'Despliegue cercano a los usuarios.',
            url: 'aHR0cHM6Ly9mbHkuaW8v',
          },
          {
            id: 'vercel',
            name: 'Vercel',
            description: 'La mejor plataforma para frontend.',
            url: 'aHR0cHM6Ly92ZXJjZWwuY29tLw==',
          },
          {
            id: 'render',
            name: 'Render',
            description: 'Alternativa robusta para web apps.',
            url: 'aHR0cHM6Ly9yZW5kZXIuY29tLw==',
          },
          {
            id: 'digitalocean',
            name: 'DigitalOcean Tutorials',
            description: 'Guías maestras de infraestructura.',
            url: 'aHR0cHM6Ly93d3cuZGlnaXRhbG9jZWFuLmNvbS9jb21tdW5pdHkvdHV0b3JpYWxz',
          },
          {
            id: 'docker-play',
            name: 'Play with Docker',
            description: 'Laboratorio gratuito de contenedores.',
            url: 'aHR0cHM6Ly9sYWJzLnBsYXktd2l0aC1kb2NrZXIuY29tLw==',
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
            url: 'aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZw==',
          },
          {
            id: 'odin-project',
            name: 'The Odin Project',
            description: 'El mejor curriculo gratuito para ser Fullstack (Ruby on Rails o Node.js).',
            url: 'aHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29t',
          },
          {
            id: 'codecademy',
            name: 'Codecademy',
            description: 'Cursos interactivos muy intuitivos con version gratuita amplia.',
            url: 'aHR0cHM6Ly93d3cuY29kZWNhZGVteS5jb20=',
          },
          {
            id: 'sololearn',
            name: 'SoloLearn',
            description: 'Ideal para aprender sintaxis de lenguajes de forma rapida y desde el movil.',
            url: 'aHR0cHM6Ly93d3cuc29sb2xlYXJuLmNvbQ==',
          },
          {
            id: 'edutin',
            name: 'Edutin Academy',
            description: 'Cursos organizados por niveles con opcion a certificacion.',
            url: 'aHR0cHM6Ly9lZHV0aW4uY29t',
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
            url: 'aHR0cHM6Ly93d3cuZWR4Lm9yZy9sZWFybi9hcnRpZmljaWFsLWludGVsbGlnZW5jZS9oYXJ2YXJkLXVuaXZlcnNpdHktY3M1MC1zLWludHJvZHVjdGlvbi10by1hcnRpZmljaWFsLWludGVsbGlnZW5jZS13aXRoLXB5dGhvbg==',
          },
          {
            id: 'cs50-web',
            name: 'CS50 Web Programming with Python and JS',
            description: 'Perfecto para pasar de las bases a aplicaciones web reales.',
            url: 'aHR0cHM6Ly9wbGwuaGFydmFyZC5lZHUvY291cnNlL2NzNTBzLXdlYi1wcm9ncmFtbWluZy1weXRob24tYW5kLWphdmFzY3JpcHQ=',
          },
          {
            id: 'edx',
            name: 'edX',
            description: 'Acceso a cursos de Google, IBM, Microsoft y las mejores universidades.',
            url: 'aHR0cHM6Ly93d3cuZWR4Lm9yZw==',
          },
          {
            id: 'coursera',
            name: 'Coursera',
            description: 'Cursos con opcion "auditar" para ver el contenido gratis.',
            url: 'aHR0cHM6Ly93d3cuY291cnNlcmEub3Jn',
          },
          {
            id: 'cognitive-class',
            name: 'Cognitive Class',
            description: 'Iniciativa de IBM con cursos gratuitos sobre Ciencia de Datos, Cloud e IA.',
            url: 'aHR0cHM6Ly9jb2duaXRpdmVjbGFzcy5haQ==',
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
            url: 'aHR0cHM6Ly9hcHJlbmRlamF2YXNjcmlwdC5kZXY=',
          },
          {
            id: 'learn-python',
            name: 'LearnPython.org',
            description: 'Tutoriales interactivos desde cero.',
            url: 'aHR0cHM6Ly93d3cubGVhcm5weXRob24ub3Jn',
          },
          {
            id: 'sqlbolt-2',
            name: 'SQLBolt',
            description: 'Lecciones interactivas para aprender a consultar bases de datos.',
            url: 'aHR0cHM6Ly9zcWxib2x0LmNvbQ==',
          },
          {
            id: 'rapidapi-learn-2',
            name: 'RapidAPI Learn',
            description: 'Guías para aprender a conectar aplicaciones mediante APIs.',
            url: 'aHR0cHM6Ly9yYXBpZGFwaS5jb20vbGVhcm4=',
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
            url: 'aHR0cHM6Ly9wcm9qZWN0ZXVsZXIubmV0',
          },
          {
            id: 'goalkicker',
            name: 'GoalKicker',
            description: 'Libros gratuitos compilados de Stack Overflow sobre casi cualquier lenguaje.',
            url: 'aHR0cHM6Ly9ib29rcy5nb2Fsa2lja2VyLmNvbQ==',
          },
          {
            id: 'code-org',
            name: 'Code.org',
            description: 'Ideal para principiantes absolutos o para entender los fundamentos.',
            url: 'aHR0cHM6Ly9jb2RlLm9yZw==',
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
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9MZWFybi9IVE1ML0ludHJvZHVjdGlvbl90b19IVE1M',
          },
          {
            id: 'mdn-css',
            name: 'MDN - Introduccion a CSS',
            description: 'Estilos y diseno con CSS.',
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9MZWFybi9DU1MvRmlyc3Rfc3RlcHM=',
          },
          {
            id: 'mdn-js',
            name: 'MDN - Introduccion a JavaScript',
            description: 'Logica y programacion en la web.',
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9MZWFybi9KYXZhU2NyaXB0L0ZpcnN0X3N0ZXBz',
          },
          {
            id: 'js-info',
            name: 'JavaScript.info',
            description: 'Tutorial completo de JavaScript moderno.',
            url: 'aHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8v',
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
            url: 'aHR0cHM6Ly9ub2RlanMub3JnLw==',
          },
          {
            id: 'vscode',
            name: 'Visual Studio Code',
            description: 'Editor de codigo recomendado.',
            url: 'aHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20v',
          },
          {
            id: 'git',
            name: 'Git',
            description: 'Control de versiones.',
            url: 'aHR0cHM6Ly9naXQtc2NtLmNvbS8=',
          },
          {
            id: 'git-tutorial',
            name: 'Curso basico de Git y GitHub',
            description: 'Tutorial en YouTube por Codigo Facilito.',
            url: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IaVhMa0w0MnRNVQ==',
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
            url: 'aHR0cHM6Ly9lcy5yZWFjdC5kZXYv',
          },
          {
            id: 'react-midudev',
            name: 'React desde cero - Midudev',
            description: 'Curso gratuito en YouTube.',
            url: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj03aW9ieHpkXzJ3WQ==',
          },
          {
            id: 'react-freecodecamp',
            name: 'Curso de React - FreeCodeCamp',
            description: 'Curso completo en espanol.',
            url: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj02SmZrOGljM0tWaw==',
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
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaA==',
          },
          {
            id: 'google-sheets-api',
            name: 'Google Sheets API Overview',
            description: 'Documentacion oficial de Google Sheets API.',
            url: 'aHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vc2hlZXRzL2FwaS9ndWlkZXMvY29uY2VwdHM=',
          },
          {
            id: 'sheets-json',
            name: 'Google Sheets como JSON API',
            description: 'Usa Google Sheets como si fuera una API.',
            url: 'aHR0cHM6Ly9tZWRpdW0uY29tL3VubHktb3JnL2hvdy10by1jb25zdW1lLWFueS1qc29uLWFwaS11c2luZy1nb29nbGUtc2hlZXRzLWFuZC1rZWVwLWl0LXVwLXRvLWRhdGUtYXV0b21hZ2ljYWxseS1mYjZlOTQ1MjFhYmQ=',
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
            url: 'aHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94Lw==',
          },
          {
            id: 'grid-guide',
            name: 'CSS Grid Guide (CSS Tricks)',
            description: 'Guia completa de CSS Grid.',
            url: 'aHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvY29tcGxldGUtZ3VpZGUtZ3JpZC8=',
          },
          {
            id: 'tailwind',
            name: 'Tailwind CSS',
            description: 'Framework CSS rapido y moderno.',
            url: 'aHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9pbnN0YWxsYXRpb24=',
          },
          {
            id: 'bootstrap',
            name: 'Bootstrap',
            description: 'Framework CSS clasico y sencillo.',
            url: 'aHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4wL2dldHRpbmctc3RhcnRlZC9pbnRyb2R1Y3Rpb24v',
          },
          {
            id: 'tailwind-midudev',
            name: 'Curso de Tailwind CSS - Midudev',
            description: 'Curso en espanol.',
            url: 'aHR0cHM6Ly95b3V0dS5iZS9SNUVYYXAzdk5EQQ==',
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
            url: 'aHR0cHM6Ly9lcy5yZWFjdC5kZXYvbGVhcm4vc2hhcmluZy1zdGF0ZS1iZXR3ZWVuLWNvbXBvbmVudHMjZm9ybXM=',
          },
          {
            id: 'react-hook-form',
            name: 'React Hook Form',
            description: 'Libreria para validacion de formularios.',
            url: 'aHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tLw==',
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
            url: 'aHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vZXMvZ2V0LXN0YXJ0ZWQvcXVpY2tzdGFydC9oZWxsby13b3JsZA==',
          },
          {
            id: 'github-upload',
            name: 'Como subir un proyecto a GitHub',
            description: 'Tutorial en YouTube.',
            url: 'aHR0cHM6Ly95b3V0dS5iZS8zR3ltRXhCa0tqRQ==',
          },
          {
            id: 'vercel-docs',
            name: 'Deploy con Vercel',
            description: 'Documentacion de Vercel.',
            url: 'aHR0cHM6Ly92ZXJjZWwuY29tL2RvY3M=',
          },
          {
            id: 'netlify-docs',
            name: 'Deploy con Netlify',
            description: 'Documentacion de Netlify.',
            url: 'aHR0cHM6Ly9kb2NzLm5ldGxpZnkuY29tLw==',
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
            url: 'aHR0cHM6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0Lw==',
          },
          {
            id: 'frontend-roadmap',
            name: 'Frontend Developer Roadmap',
            description: 'Que aprender y en que orden.',
            url: 'aHR0cHM6Ly9yb2FkbWFwLnNoL2Zyb250ZW5k',
          },
          {
            id: 'hackerrank',
            name: 'HackerRank',
            description: 'Practica logica de programacion.',
            url: 'aHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20v',
          },
          {
            id: 'leetcode-react',
            name: 'LeetCode',
            description: 'Desafios tecnicos de algoritmos.',
            url: 'aHR0cHM6Ly9sZWV0Y29kZS5jb20v',
          },
          {
            id: 'codewars-react',
            name: 'Codewars',
            description: 'Entrena tu logica con retos de la comunidad.',
            url: 'aHR0cHM6Ly93d3cuY29kZXdhcnMuY29tLw==',
          },
          {
            id: 'exercism',
            name: 'Exercism',
            description: 'Ejercicios cortos e interactivos.',
            url: 'aHR0cHM6Ly9leGVyY2lzbS5vcmcv',
          },
          {
            id: 'freecodecamp-es',
            name: 'FreeCodeCamp en Espanol',
            description: 'Comunidad y recursos en espanol.',
            url: 'aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9lc3Bhbm9sLw==',
          },
          {
            id: 'midudev-discord',
            name: 'Comunidad MiduDev (Discord)',
            description: 'Comunidad de desarrolladores en espanol.',
            url: 'aHR0cHM6Ly9kaXNjb3JkLmdnL21pZHVkZXY=',
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
            url: 'aHR0cHM6Ly9zcXVvb3NoLmFwcC8=',
          },
          {
            id: 'sharp',
            name: 'Sharp (npm)',
            description: 'El estandar para procesar imagenes en Node.js.',
            url: 'aHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS8=',
          },
          {
            id: 'cloudinary',
            name: 'Cloudinary',
            description: 'CDN que transforma imagenes mediante URL.',
            url: 'aHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS8=',
          },
          {
            id: 'imagekit',
            name: 'ImageKit',
            description: 'CDN de imagenes con transformaciones.',
            url: 'aHR0cHM6Ly9pbWFnZWtpdC5pby8=',
          },
          {
            id: 'next-image',
            name: 'next/image',
            description: 'Optimizacion automatica si usas Next.js.',
            url: 'aHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvaW1hZ2Utb3B0aW1pemF0aW9u',
          },
          {
            id: 'webdev-images',
            name: 'web.dev - Imagenes',
            description: 'Guia oficial de Google sobre formatos modernos.',
            url: 'aHR0cHM6Ly93ZWIuZGV2L2xlYXJuL2ltYWdlcw==',
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
            url: 'aHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9wbHVnaW5zL3NwbGl0LWNodW5rcy1wbHVnaW4v',
          },
          {
            id: 'vite-lazy',
            name: 'Vite Lazy Loading',
            description: 'Soporte nativo para imports dinamicos.',
            url: 'aHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2ZlYXR1cmVzLmh0bWwjZHluYW1pYy1pbXBvcnQ=',
          },
          {
            id: 'react-lazy',
            name: 'React.lazy / Suspense',
            description: 'La forma oficial de diferir componentes en React.',
            url: 'aHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0L2xhenk=',
          },
          {
            id: 'intersection-observer',
            name: 'Intersection Observer API',
            description: 'Crea tu propio lazy load sin librerias.',
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbl9PYnNlcnZlcl9BUEk=',
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
            url: 'aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvd2VicGFjay1idW5kbGUtYW5hbHl6ZXI=',
          },
          {
            id: 'rollup-treeshaking',
            name: 'Rollup / Vite Tree-shaking',
            description: 'Elimina codigo innecesario automaticamente.',
            url: 'aHR0cHM6Ly9yb2xsdXBqcy5vcmcvZ3VpZGUvZW4vI3RyZWUtc2hha2luZw==',
          },
          {
            id: 'bundlephobia',
            name: 'Bundlephobia',
            description: 'Consulta el peso de una libreria antes de instalarla.',
            url: 'aHR0cHM6Ly9idW5kbGVwaG9iaWEuY29tLw==',
          },
          {
            id: 'terser',
            name: 'Terser',
            description: 'El minificador estandar para produccion.',
            url: 'aHR0cHM6Ly90ZXJzZXIub3JnLw==',
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
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL0NhY2hlLUNvbnRyb2w=',
          },
          {
            id: 'webdev-cache',
            name: 'web.dev HTTP Caching',
            description: 'Mejores practicas de Google.',
            url: 'aHR0cHM6Ly93ZWIuZGV2L2h0dHAtY2FjaGUv',
          },
          {
            id: 'workbox',
            name: 'Workbox (PWA/SW)',
            description: 'Libreria para gestionar Service Workers y cache offline.',
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gv',
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
            url: 'aHR0cHM6Ly92ZXJjZWwuY29tLw==',
          },
          {
            id: 'cloudflare-pages',
            name: 'Cloudflare Pages',
            description: 'CDN masiva con plan gratuito generoso.',
            url: 'aHR0cHM6Ly9wYWdlcy5jbG91ZGZsYXJlLmNvbS8=',
          },
          {
            id: 'netlify-2',
            name: 'Netlify',
            description: 'Edge functions y deploys ultra simples.',
            url: 'aHR0cHM6Ly93d3cubmV0bGlmeS5jb20v',
          },
          {
            id: 'bunny',
            name: 'Bunny.net',
            description: 'CDN de alto rendimiento.',
            url: 'aHR0cHM6Ly9idW5ueS5uZXQv',
          },
          {
            id: 'fastly',
            name: 'Fastly',
            description: 'CDN de alto rendimiento para aplicaciones modernas.',
            url: 'aHR0cHM6Ly93d3cuZmFzdGx5LmNvbS8=',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvY3JpdHRlcnM=',
          },
          {
            id: 'purgecss',
            name: 'PurgeCSS',
            description: 'Elimina el CSS que no usas en el bundle final.',
            url: 'aHR0cHM6Ly9wdXJnZWNzcy5jb20v',
          },
          {
            id: 'critical',
            name: 'critical (npm)',
            description: 'Extrae y separa el CSS "above-the-fold".',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2FkZHlvc21hbmkvY3JpdGljYWw=',
          },
          {
            id: 'uncss',
            name: 'UnCSS',
            description: 'Detecta y limpia reglas CSS inutiles.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3VuY3NzL3VuY3Nz',
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
            url: 'aHR0cHM6Ly9mb250cy5nb29nbGUuY29tLw==',
          },
          {
            id: 'gtmetrix',
            name: 'GTmetrix',
            description: 'Detecta requests lentas y scripts pesados.',
            url: 'aHR0cHM6Ly9ndG1ldHJpeC5jb20v',
          },
          {
            id: 'request-map',
            name: 'Request Map',
            description: 'Mapa visual de todas tus peticiones.',
            url: 'aHR0cHM6Ly9yZXF1ZXN0bWFwLndlYnBlcmYudG9vbHMv',
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
            url: 'aHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL2xpZ2h0aG91c2Uvb3ZlcnZpZXcv',
          },
          {
            id: 'pagespeed',
            name: 'PageSpeed Insights',
            description: 'Datos reales de Google (CrUX).',
            url: 'aHR0cHM6Ly9wYWdlc3BlZWQud2ViLmRldi8=',
          },
          {
            id: 'webpagetest',
            name: 'WebPageTest',
            description: 'Tests detallados de carga por paises.',
            url: 'aHR0cHM6Ly93d3cud2VicGFnZXRlc3Qub3JnLw==',
          },
          {
            id: 'webdev-measure',
            name: 'web.dev/measure',
            description: 'El hub de Google para Core Web Vitals.',
            url: 'aHR0cHM6Ly93ZWIuZGV2L21lYXN1cmU=',
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
            url: 'aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZw==',
          },
          {
            id: 'odin-portfolio',
            name: 'The Odin Project',
            description: 'Curriculo ultra completo para Full Stack (JavaScript o Ruby on Rails).',
            url: 'aHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29t',
          },
          {
            id: 'fullstack-open',
            name: 'Full Stack Open',
            description: 'Curso de nivel universitario sobre desarrollo web moderno (React, Redux, Node.js, MongoDB, GraphQL).',
            url: 'aHR0cHM6Ly9mdWxsc3RhY2tvcGVuLmNvbQ==',
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
            url: 'aHR0cHM6Ly93d3cuZnJvbnRlbmRtZW50b3IuaW8=',
          },
          {
            id: 'roadmap-projects',
            name: 'Roadmap.sh Projects',
            description: 'Ideas de proyectos divididas por nivel (principiante, intermedio, avanzado).',
            url: 'aHR0cHM6Ly9yb2FkbWFwLnNoL3Byb2plY3Rz',
          },
          {
            id: 'briefsupply',
            name: 'BriefSupply',
            description: 'Te entrega "briefs" como si fueran de un cliente real. Perfecto para simular experiencia laboral.',
            url: 'aHR0cHM6Ly9icmllZnN1cHBseS5jb20vcHJvamVjdHM=',
          },
          {
            id: 'codementor-projects',
            name: 'Codementor Projects',
            description: 'Proyectos reales para practicar. Puedes ver como otros los resolvieron.',
            url: 'aHR0cHM6Ly93d3cuY29kZW1lbnRvci5pby9wcm9qZWN0cw==',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2Zsb3JpbnBvcDE3L2FwcC1pZGVhcw==',
          },
          {
            id: 'build-your-own-x',
            name: 'Build Your Own X',
            description: 'Aprende a construir desde cero cosas como un servidor Git, un Docker o un motor de busqueda.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2NvZGVjcmFmdGVycy1pby9idWlsZC15b3VyLW93bi14',
          },
          {
            id: 'project-ideas-resources',
            name: 'Project Ideas & Resources',
            description: 'Repositorio con muchas ideas variadas y recursos extra.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL1RoZS1Db29sLUNvZGVycy9Qcm9qZWN0LUlkZWFzLUFuZC1SZXNvdXJjZXM=',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL25pbGJ1aWxkL2RldmVsb3Blci1yb2FkbWFw',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2Zsb3JpbnBvcDE3L2FwcC1pZGVhcw==',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3ByYWN0aWNhbC10dXRvcmlhbHMvcHJvamVjdC1iYXNlZC1sZWFybmluZw==',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2NvZGVjcmFmdGVycy1pby9idWlsZC15b3VyLW93bi14',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3B1YmxpYy1hcGlzL3B1YmxpYy1hcGlz',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL2p3YXNoYW0vY29kaW5nLWludGVydmlldy11bml2ZXJzaXR5',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hd2Vzb21l',
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
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3RyZW5kaW5n',
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
            url: 'aHR0cHM6Ly9hbnRocm9waWMuc2tpbGxqYXIuY29tL2NsYXVkZS1jZXJ0aWZpZWQtYXJjaGl0ZWN0LWZvdW5kYXRpb25zLWFjY2Vzcy1yZXF1ZXN0',
          },
          {
            id: 'google-ai-essentials',
            name: 'Google AI Essentials',
            description: 'Fundamentos practicos de IA generativa para el trabajo.',
            url: 'aHR0cHM6Ly9ncm93Lmdvb2dsZS9haS1lc3NlbnRpYWxzLw==',
          },
          {
            id: 'github-foundations',
            name: 'GitHub Foundations Certification',
            description: 'Validacion oficial de conocimientos en Git y colaboracion.',
            url: 'aHR0cHM6Ly9lZHVjYXRpb24uZ2l0aHViLmNvbS9leHBlcmllbmNlcy9mb3VuZGF0aW9uc19jZXJ0aWZpY2F0ZQ==',
          },
          {
            id: 'aws-skill-builder',
            name: 'AWS Skill Builder',
            description: 'Cursos fundamentales de Amazon Web Services con insignias gratuitas.',
            url: 'aHR0cHM6Ly9za2lsbGJ1aWxkZXIuYXdz',
          },
          {
            id: 'microsoft-learn',
            name: 'Microsoft Learn',
            description: 'Rutas de aprendizaje para "Applied Skills" y certificaciones en Azure.',
            url: 'aHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29t',
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
            url: 'aHR0cHM6Ly9za2lsbHNidWlsZC5vcmcv',
          },
          {
            id: 'google-skillshop',
            name: 'Google Skillshop',
            description: 'Formacion oficial en Analytics, Google Ads, Cloud e IA.',
            url: 'aHR0cHM6Ly9za2lsbHNob3Aud2l0aGdvb2dsZS5jb20v',
          },
          {
            id: 'cisco-netacad',
            name: 'Cisco Networking Academy',
            description: 'Especializada en Redes, Ciberseguridad e IA con badges digitales gratuitos.',
            url: 'aHR0cHM6Ly93d3cubmV0YWNhZC5jb20v',
          },
          {
            id: 'ibm-cognitive',
            name: 'IBM Cognitive Class',
            description: 'Mas de 100 cursos tecnicos en IA, Big Data y Blockchain.',
            url: 'aHR0cHM6Ly9jb2duaXRpdmVjbGFzcy5haS8=',
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
            url: 'aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy8=',
          },
          {
            id: 'kaggle-learn',
            name: 'Kaggle Learn',
            description: 'Cursos practicos de Python, SQL y ML con certificados de finalizacion rapidos.',
            url: 'aHR0cHM6Ly93d3cua2FnZ2xlLmNvbS9sZWFybg==',
          },
          {
            id: 'sololearn-certs',
            name: 'Sololearn',
            description: 'Certificados en multiples lenguajes de programacion (JS, Python, C++, etc.).',
            url: 'aHR0cHM6Ly93d3cuc29sb2xlYXJuLmNvbS8=',
          },
          {
            id: 'elements-of-ai',
            name: 'Elements of AI',
            description: 'Fundamentos de IA con certificado gratuito, avalado por la Universidad de Helsinki.',
            url: 'aHR0cHM6Ly93d3cuZWxlbWVudHNvZmFpLmNvbS8=',
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
            url: 'aHR0cHM6Ly9yb2FkbWFwLnNoL2FwaS1kZXNpZ24=',
          },
          {
            id: 'public-apis-repo',
            name: 'Public APIs (+1,400 APIs publicas)',
            description: 'El repositorio mas famoso con mas de 1,400 APIs publicas para practicar e integrar.',
            url: 'aHR0cHM6Ly9naXRodWIuY29tL3B1YmxpYy1hcGlzL3B1YmxpYy1hcGlz',
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
            url: 'aHR0cHM6Ly93d3cuZnJvbnRlbmRtZW50b3IuaW8vY2hhbGxlbmdlcw==',
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
            url: 'aHR0cHM6Ly9zd2FnZ2VyLmlvL3Rvb2xzL3N3YWdnZXItdWk=',
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
            url: 'aHR0cHM6Ly9ob3Bwc2NvdGNoLmlv',
          },
          {
            id: 'jsonplaceholder',
            name: 'JSONPlaceholder',
            description: 'Fake REST API gratuita para practicar peticiones HTTP sin configurar backend.',
            url: 'aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29t',
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
            url: 'aHR0cHM6Ly9yYWlsd2F5LmNvbS8=',
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
            url: 'aHR0cHM6Ly9sZWV0Y29kZS5jb20v',
          },
          {
            id: 'codewars-logic',
            name: 'Codewars',
            description: 'Logica visual y pensamiento algoritmico.',
            url: 'aHR0cHM6Ly93d3cuY29kZXdhcnMuY29tLw==',
          },
          {
            id: 'codingame-logic',
            name: 'CodinGame',
            description: 'Ejercicios con feedback de mentores.',
            url: 'aHR0cHM6Ly93d3cuY29kaW5nYW1lLmNvbS8=',
          },
          {
            id: 'exercism-logic',
            name: 'Exercism',
            description: 'Ejercicios con feedback de mentores.',
            url: 'aHR0cHM6Ly9leGVyY2lzbS5vcmcv',
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
            url: 'aHR0cHM6Ly9leGNhbGlkcmF3LmNvbS8=',
          },
          {
            id: 'project-euler-logic',
            name: 'Project Euler',
            description: 'Entrena razonamiento y creatividad.',
            url: 'aHR0cHM6Ly9wcm9qZWN0ZXVsZXIubmV0Lw==',
          },
          {
            id: 'hackerrank-logic',
            name: 'HackerRank',
            description: 'Retos por dominio.',
            url: 'aHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20v',
          },
          {
            id: 'logic-practice-site',
            name: 'Logic-Practice.com',
            description: 'Visualiza ejecucion paso a paso.',
            url: 'aHR0cHM6Ly9sb2dpYy1wcmFjdGljZS5jb20v',
          },
          {
            id: 'brilliant-logic',
            name: 'Brilliant.org',
            description: 'Piensa como programador desde adentro.',
            url: 'aHR0cHM6Ly9icmlsbGlhbnQub3JnLw==',
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
            url: 'aHR0cHM6Ly9sZWV0Y29kZS5jb20v',
          },
          {
            id: 'pramp-interview',
            name: 'Pramp',
            description: 'Conecta con compañeros de práctica y entrena entrevistas juntos, con preguntas reales.',
            url: 'aHR0cHM6Ly9wcmFtcC5jb20v',
          },
          {
            id: 'interviewing-io',
            name: 'Interviewing.io',
            description: 'Te entrevistan ingenieros Senior o managers que toman decisiones de contratación. Incluye entrevistador de IA con feedback.',
            url: 'aHR0cHM6Ly9pbnRlcnZpZXdpbmcuaW8v',
          },
          {
            id: 'tech-interview-handbook',
            name: 'Tech Interview Handbook',
            description: 'Guía completa con patrones de algoritmos y estructuras de datos para que no te sorprenda ninguna pregunta.',
            url: 'aHR0cHM6Ly90ZWNoaW50ZXJ2aWV3aGFuZGJvb2sub3JnLw==',
          },
          {
            id: 'educative-mock',
            name: 'Educative Mock Interviews',
            description: 'IA que simula entrevistas reales de coding y system design.',
            url: 'aHR0cHM6Ly9lZHVjYXRpdmUuaW8vbW9jay1pbnRlcnZpZXc=',
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
            url: 'aHR0cHM6Ly90ZWFsaHEuY29tLw==',
          },
          {
            id: 'resume-worded',
            name: 'Resume Worded',
            description: 'Escanea tu CV como un ATS real y te da feedback instantáneo.',
            url: 'aHR0cHM6Ly9yZXN1bWV3b3JkZWQuY29tLw==',
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
      {
        id: 'bored-of-programming',
        slug: 'bored-of-programming',
        icon: '😴',
        sections: [
          {
            id: 'bored-solutions',
            title: {
              es: 'Lo que sientes es señal de que necesitas un reto nuevo',
              en: 'What you feel is a sign that you need a new challenge',
            },
            resources: [
              {
                id: 'bored-tip-1',
                name: 'Haz un proyecto que no te hayan pedido',
                description: 'Construye algo por iniciativa propia, no por obligación.',
              },
              {
                id: 'bored-tip-2',
                name: 'Abre un repo de algo que uses y lee el código. Sin IA',
                description: 'Explora código real de proyectos que ya existen.',
              },
              {
                id: 'bored-tip-3',
                name: 'Construye algo muy pequeño que no dé miedo empezar',
                description: 'Pequeño no significa inútil. Empezar es la parte más difícil.',
              },
              {
                id: 'bored-tip-4',
                name: 'Rompe algo y arréglalo tú',
                description: 'Enseña a tu codebase a fallar y luego repara el desastre.',
              },
              {
                id: 'bored-tip-5',
                name: 'Clona una app que ya existe',
                description: 'No tiene que ser perfecto. Solo tiene que ser tuyo.',
              },
              {
                id: 'bored-tip-6',
                name: 'Deja de seguir tutoriales',
                description: 'Los tutoriales dan la ilusión de progreso. Construir da experiencia.',
              },
              {
                id: 'bored-tip-7',
                name: 'Contribuye a open source',
                description: 'Escribe código que otros van a usar y revisar.',
              },
              {
                id: 'bored-tip-8',
                name: 'Enseña lo que ya sabes',
                description: 'Eso obliga a entender de verdad lo que crees saber.',
              },
              {
                id: 'bored-tip-9',
                name: 'Cambia de área: si solo haces frontend, toca backend',
                description: 'El cambio de contexto renueva el interés.',
              },
              {
                id: 'bored-tip-10',
                name: 'Resuelve una cosa diferente cada día',
                description: 'No tienes que resolverlo todo. Solo una cosa.',
              },
            ],
          },
        ],
      },
      {
        id: 'engineer-tools-improvement',
        slug: 'engineer-tools-improvement',
        icon: '🛠️',
        sections: [
          {
            id: 'system-design-tools',
            title: {
              es: 'System Design y Arquitectura',
              en: 'System Design & Architecture',
            },
            resources: [
              {
                id: 'system-design-handbook',
                name: 'System Design Handbook',
                description: 'Aprende a diseñar sistemas escalables como los de Netflix o Uber.',
                url: 'aHR0cHM6Ly9zeXN0ZW1kZXNpZ25oYW5kYm9vay5jb20v',
              },
              {
                id: 'refactoring-guru',
                name: 'Refactoring.Guru',
                description: 'Todo lo que necesitas saber sobre refactoring, design patterns y principios SOLID.',
                url: 'aHR0cHM6Ly9yZWZhY3RvcmluZy5ndXJ1Lw==',
              },
              {
                id: 'bytebytego',
                name: 'ByteByteGo (YouTube + Newsletter)',
                description: 'Canal dedicado a system design a gran escala.',
                url: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vQEJ5dGVCeXRlR28=',
              },
              {
                id: 'roadmap-sh-tools',
                name: 'roadmap.sh',
                description: 'Tiene rutas específicas que muestran exactamente qué aprender para subir de nivel.',
                url: 'aHR0cHM6Ly9yb2FkbWFwLnNoLw==',
              },
            ],
          },
          {
            id: 'security-modern',
            title: {
              es: 'Seguridad (moderno y muy diferente)',
              en: 'Security (modern and very different)',
            },
            resources: [
              {
                id: 'hacksplaining',
                name: 'Hacksplaining',
                description: 'Lecciones interactivas sobre vulnerabilidades de IA para defenderte.',
                url: 'aHR0cHM6Ly93d3cuaGFja3NwbGFpbmluZy5jb20v',
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

/** Elimina las URLs antes de enviar una guía a un componente cliente. */
export function toPublicGuide(guide: Guide): PublicGuide {
  return {
    id: guide.id,
    slug: guide.slug,
    icon: guide.icon,
    sections: guide.sections.map((section) => ({
      id: section.id,
      title: section.title,
      resources: section.resources.map(({ id, name, description, category }) => ({ id, name, description, category })),
    })),
  }
}

export function getPublicGuideSummaries(): PublicGuideSummary[] {
  return guides.map((guide) => ({ id: guide.id, slug: guide.slug, icon: guide.icon, resourceCount: getTotalResources(guide) }))
}

export function getResourceUrlById(id: string): string | undefined {
  for (const guide of guides) {
    for (const section of guide.sections) {
      const resource = section.resources.find((item) => item.id === id)
      if (resource?.url) return resource.url
    }
  }
}
