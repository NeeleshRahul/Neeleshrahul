
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name:string;
  title: string;
  image: string;
}

export interface WorkingProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  image: string;
}

export interface Skill {
  name: string;
  image: string;
}