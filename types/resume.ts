export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  [key: string]: any; // Allow additional contact fields
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
  [key: string]: any; // Allow additional experience fields
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
  [key: string]: any; // Allow additional education fields
}

export interface Skill {
  category: string;
  items: string[];
  [key: string]: any; // Allow additional skill fields
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  highlights?: string[];
  [key: string]: any; // Allow additional project fields
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  [key: string]: any; // Allow additional certification fields
}

export interface Resume {
  personal: {
    name: string;
    title: string;
    summary: string;
    contact: ContactInfo;
    [key: string]: any; // Allow additional personal fields
  };
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
  certifications?: Certification[];
  [key: string]: any; // Allow additional top-level resume fields
}

