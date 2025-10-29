import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  description: string;
  icon: LucideIcon;
}
