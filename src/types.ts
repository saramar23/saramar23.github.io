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
  tool?: string;
  icon?: ReactNode;
}

export interface Tool {
  name: string;
  detail?: string;
  icon?: ReactNode;
}

export interface NavigationLink {
  label: string;
  href: string;
}
