export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Presente";
  description: string;
  type: "work" | "education";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Presente";
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  readTime: string;
  tags: string[];
}
