import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'News Discovery',
    descriptionWhy: 'A React SPA for browsing news by category, with search, date filters, and paginated fetching. Handles API rate limits gracefully with retry and throttle logic.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Context API', 'GNews API'],
    liveDemoUrl: 'https://saramar23.github.io/news-app/',
    repositoryUrl: 'https://github.com/saramar23/news-app/',
    imageAlt: 'News discovery app with categories, search, and article reading view',
    imageSrc: '/media/news-app-preview.png',
  },
  {
    id: '2',
    title: 'Café Ordering SPA',
    descriptionWhy: 'A café-themed SPA with a dynamic menu, cart drawer, and multi-page routing. Cart state persists across sessions via localStorage, with form validation and clear error handling throughout.',
    techStack: ['React', 'TypeScript', 'React Router', 'Context API', 'React Bootstrap'],
    liveDemoUrl: 'https://saramar23.github.io/reactcafe/',
    repositoryUrl: 'https://github.com/saramar23/reactcafe',
    imageAlt: 'Café-themed app showing menu navigation and cart drawer',
    imageSrc: '/media/reactcafe-preview.png',
  },
  {
    id: '3',
    title: 'Coming Soon..',
    descriptionWhy: 'Work in Progress..',
    techStack: ['React', 'Tailwind CSS'],
    liveDemoUrl: '',
    repositoryUrl: 'https://github.com/saramar23/',
    imageAlt: 'Coming Soon...',
    imageSrc: '', 
  }
];
