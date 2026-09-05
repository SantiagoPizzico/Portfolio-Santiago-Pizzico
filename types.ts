export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  name: string;
  url?: string;
  repo?: string;
  image?: string;
  type: 'cliente' | 'personal' | 'academico';
  year: number;
  description: string;
  stack: string[];
  status: 'Live' | 'Development' | 'Repo' | 'Offline';
}

export interface BusinessOffer {
  title: string;
  text: string;
  bullets: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface Language {
  name: string;
  level: string;
  details?: string;
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  socials: {
    linkedin?: string;
    github?: string;
  };
}
