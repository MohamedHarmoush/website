export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Resume {
  personal: {
    name: string;
    title: string;
    summary: string;
    contact: ContactInfo;
  };
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
  certifications?: Certification[];
}

