import { Experience, Education, SkillCategory, Project, Language, Profile } from './types';

export const PROFILE: Profile = {
  name: "Santiago Pizzico",
  role: "Software Developer",
  email: "santiagopizzico@gmail.com",
  phone: "(+54) 2923504415",
  location: "Bahía Blanca, Argentina",
  about: "Desarrollador de Software con formación en la Universidad Tecnológica Nacional (UTN) y promedio académico de 8.55. Experiencia en el desarrollo de aplicaciones web utilizando React, TypeScript, PHP y MySQL. Con conocimientos en desarrollo Full Stack, diseño de bases de datos y creación de APIs REST. Busco mis primeras oportunidades como programador Jr.",
  socials: {
    linkedin: "https://www.linkedin.com/in/santiagopizzico/",
    github: "https://github.com/SantiagoPizzico",
  }
};

export const CONTACT_CONFIG = {
  emailSubject: "Contacto desde el Portfolio",
  emailBody: "Hola Santiago, te escribo desde tu web...",
  googleDriveCV: "https://drive.google.com/uc?export=download&id=1JA_hDxD2dkhBdXji1xYGi2rKShoCbeHE",
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Desarrollador Web (Pasantía)",
    company: "Telesalud HMALL",
    location: "Bahía Blanca, Argentina",
    period: "19/08/2024 – 19/09/2024",
    description: "Desarrollo de portal para el seguimiento y autoevaluación de pacientes usando PHP.",
    tasks: [
      "Desarrollo de portal web",
      "Manejo de base de datos",
      "Tecnologías: PHP, MySQL, CSS, HTML, JavaScript"
    ],
    contact: "Referencia: 2923-424986 (Garat Fabiana)"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Tecnico Universitario en Programación",
    institution: "UTN",
    location: "Bahía Blanca, Argentina",
    period: "25/03/2022 – 14/08/2025 (Estimado)"
  },
  {
    degree: "Python",
    institution: "Santander Open Academy",
    location: "Online",
    period: "24/10/2025 (8 Horas)"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["PHP", "JavaScript", "Dart", "SQL", "Python"]
  },
  {
    title: "Frameworks & Libs",
    skills: ["React", "Yii2", "Flutter", "Spring", "Flask"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind"]
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "APIs REST", "Diseño DB"]
  }
];

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2", details: "Comprensión y producción oral/escrita nivel intermedio-alto" }
];

export const PROJECTS: Project[] = [
  {
    name: "Old School Gym BB",
    url: "https://oldschoolgymbb.com",
    description: "Sitio web desarrollado para un gimnasio local. Presentación de servicios, horarios y contacto.",
    stack: ["Web Development", "Frontend"],
    status: "Live"
  }
];