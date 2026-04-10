export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
  contact?: string;
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
  url: string;
  description: string;
  stack: string[];
  status: 'Live' | 'Development' | 'Offline';
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