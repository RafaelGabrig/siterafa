// Interfaces
export interface NavLink {
  href: string;
  label: string;
}

export interface ExpertiseCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Rafael Gabrig",
  role: "Frontend & Mobile Developer",
  email: "rafagabrig@gmail.com",
  phone: "+34 624 99 24 34 /  +351 919 761 786",
  location: "Portugal - Espanha"
};

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const expertiseCards: ExpertiseCard[] = [
  {
    id: '1',
    icon: '🎨',
    title: 'Front-end Development',
    description: 'Criação de interfaces modernas e responsivas usando React, Next.js e outras tecnologias modernas.',
  },
  {
    id: '2',
    icon: '📱',
    title: 'Mobile Development',
    description: 'Desenvolvimento de aplicativos móveis nativos e multiplataforma com React Native.',
  },
  {
    id: '3',
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Otimização de aplicações web para máxima performance e experiência do usuário.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'Plataforma para profissional de treinamento pessoal.',
    image: '/images/personal.jpg',
    url: 'https://priscillapersonal.es',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: '2',
    title: 'Web Site - Criaweb',
    description: 'Site para agência de criação de sites.',
    image: '/images/criaweb.jpg',
    url: 'https://criaweb.es',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: '3',
    title: 'Web Site - Esteticista',
    description: 'Site para profissional de estética.',
    image: '/images/estetica.jpg',
    url: 'https://flaviaalonso.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    period: '2024 - Presente',
    role: 'Freelancer',
    company: '<a href="https://criaweb.es" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Criaweb.es </a> - Portugal / Espanha',
    responsibilities: [
      'Desenvolvimento de Apps web e mobile',
    ],
  },
  {
    id: '2',
    period: '2021 - 2022',
    role: 'Bootcamp Full Stack Developer',
    company: 'Knower Academy - Portugal',
    responsibilities: [
      'Desenvolvimento full stack',
      
    ],
  },
  {
    id: '3',
    period: '2013 - 2016',
    role: 'Analise e Desenvolvimento de Sistemas',
    company: 'Unesa - Universidade Estácio de Sá - Brasil',
    responsibilities: [
      'Graduação em Análise e Desenvolvimento de Sistemas',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/RafaelGabrig',
    icon: 'github',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafael-gabrig-ribeiro-a8a76585/',
    icon: 'linkedin',
  },
  {
    id: '3',
    platform: 'Instagram',
    url: 'https://instagram.com/rafaelgabrig',
    icon: 'instagram',
  },
];
