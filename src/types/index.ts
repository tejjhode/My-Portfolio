export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'database' | 'DSA';
  icon?: React.ReactNode;
}

export type ThemeMode = 'light' | 'dark';