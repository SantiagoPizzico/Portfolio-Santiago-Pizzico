import { Experience, Education, SkillCategory, Project, Language, Profile, BusinessOffer } from './types';

export const PROFILE: Profile = {
  name: "Santiago Pizzico",
  role: "Desarrollador Web · Full Stack",
  email: "santiagopizzico@gmail.com",
  phone: "(+54) 2923504415",
  location: "Bahía Blanca, Argentina",
  about: "Desarrollo sitios y aplicaciones web para negocios y equipos. Técnico Universitario en Programación (UTN Bahía Blanca, promedio 8.55). Trabajo con React, TypeScript, Java/Spring, PHP y MySQL, y tengo dos sitios en producción para comercios de la ciudad. Abierto a puestos de desarrollo y proyectos freelance.",
  socials: {
    linkedin: "https://www.linkedin.com/in/santiagopizzico/",
    github: "https://github.com/SantiagoPizzico",
  }
};

export const CONTACT_CONFIG = {
  intro: "¿Tenés un proyecto o una búsqueda abierta? Escribime por donde te quede más cómodo.",
  emailSubject: "Contacto desde el Portfolio",
  emailBody: "Hola Santiago, te escribo desde tu web...",
  whatsappDefaultMessage: "Hola Santiago, vi tu portafolio web y me gustaría contactarte.",
};

export const BUSINESS_OFFER: BusinessOffer = {
  title: "Webs para negocios de Bahía Blanca",
  text: "Sitios simples, rápidos y listos para recibir clientes por WhatsApp. Ya hay dos funcionando en la ciudad: Old School Gym y detailing GO.",
  bullets: [
    "Landing o catálogo con botón de WhatsApp",
    "Sin mensualidades de plataformas: el sitio es tuyo",
    "Listo en [COMPLETAR: plazo típico]"
  ],
  ctaLabel: "Pedir presupuesto por WhatsApp",
  whatsappMessage: "Hola Santiago, tengo un negocio en Bahía y quiero consultar por una web."
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Desarrollador Web Freelance",
    company: "Negocios de Bahía Blanca",
    location: "Bahía Blanca, Argentina",
    period: "Dic 2025 – Actualidad",
    description: "Desarrollo de sitios web para comercios locales, de punta a punta: relevamiento con el cliente, diseño, desarrollo y despliegue en producción.",
    tasks: [
      "Old School Gym: sitio institucional con React, TypeScript y TailwindCSS — servicios, horarios y contacto para inscripciones",
      "detailing GO: landing de ventas con catálogo de productos, combos y pedidos por WhatsApp (HTML, CSS y JS vanilla)",
      "Trato directo con los clientes: relevamiento de necesidades, propuestas y mantenimiento",
      "Despliegue en producción y control de versiones con Git/GitHub"
    ]
  },
  {
    role: "Desarrollador Web (Pasantía)",
    company: "Telesalud HMALL - Hospital Municipal",
    location: "Bahía Blanca, Argentina",
    period: "Ago 2024 – Sep 2024",
    description: "Desarrollo del portal web para seguimiento y autoevaluación de pacientes: diseño de la base de datos, formularios de evaluación y panel de consulta. PHP, MySQL, JavaScript.",
    tasks: [
      "Diseño e implementación de la base de datos en MySQL para información clínica",
      "APIs REST en PHP para el procesamiento y validación de datos clínicos",
      "Interfaces web con HTML5, CSS3 y JavaScript integradas con el backend"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "UTN – Facultad Regional Bahía Blanca",
    location: "Bahía Blanca, Argentina",
    period: "2022 – 2025 · Promedio 8.55/10"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "HTML", "CSS", "Tailwind"]
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "PHP", "Node.js"]
  },
  {
    title: "Datos",
    skills: ["SQL", "MySQL", "Python"]
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "APIs REST", "Diseño de bases de datos", "Vite"]
  }
];

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2", details: "Comprensión y producción oral/escrita nivel intermedio-alto" }
];

export const PROJECTS: Project[] = [
  {
    name: "detailing GO",
    url: "https://santiagopizzico.github.io/WebGO.github.io/",
    repo: "https://github.com/SantiagoPizzico/WebGO.github.io",
    image: "/projects/detailing-go.png",
    type: "cliente",
    year: 2026,
    description: "Landing de ventas para comercio de detailing automotor de Bahía Blanca. Catálogo de productos con filtros, combos en promo y armado de pedido por WhatsApp. Sin librerías ni build: HTML, CSS y JS vanilla.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Development"
  },
  {
    name: "Old School Gym BB",
    url: "https://oldschoolgymbb.com",
    image: "/projects/old-school-gym.png",
    type: "cliente",
    year: 2025,
    description: "Sitio institucional para gimnasio de Bahía Blanca: servicios, horarios y contacto para inscripciones. Desplegado en producción.",
    stack: ["React", "TypeScript", "TailwindCSS"],
    status: "Live"
  },
  {
    name: "Portal Telesalud HMALL",
    type: "cliente",
    year: 2024,
    description: "Portal web para seguimiento y autoevaluación de pacientes, desarrollado en pasantía para el Hospital Municipal. Sistema interno, sin enlace público.",
    stack: ["PHP", "MySQL", "JavaScript"],
    status: "Offline"
  },
  {
    name: "Constructor Web",
    url: "https://santiagopizzico.github.io/constructor-web.github.io/",
    repo: "https://github.com/SantiagoPizzico/constructor-web.github.io",
    type: "personal",
    year: 2026,
    description: "Constructor visual para armar una web o panel eligiendo rubro, estilo y secciones, con drag & drop, y exportarlo como brief, prompt o JSON. SPA 100% del lado del cliente.",
    stack: ["React 18", "Vite", "TypeScript", "Tailwind", "Zustand", "dnd-kit"],
    status: "Live"
  },
  {
    name: "API REST de gestión académica",
    repo: "https://github.com/SantiagoPizzico/Final-labo-III",
    type: "academico",
    year: 2025,
    description: "API en Java + Spring Boot para alumnos, materias, carreras y profesores, con arquitectura en capas y validaciones de reglas de negocio (correlatividades, duplicados). Trabajo final de Laboratorio III, UTN.",
    stack: ["Java", "Spring Boot", "Maven"],
    status: "Repo"
  }
];
