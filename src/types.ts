import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  descriptionWhy: string;
  techStack: string[];
  liveDemoUrl: string;
  repositoryUrl: string;
  imageAlt: string;
  imageSrc?: string;
}

export interface Skill {
  name: string;
  label?: 'Proficient' | 'Working Knowledge';
  icon?: ReactNode;
}

export interface Tool {
  name: string;
  icon?: ReactNode;
}

export interface NavigationLink {
  label: string;
  href: string;
}
