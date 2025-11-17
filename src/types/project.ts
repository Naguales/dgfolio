// src/types/project.ts

export interface ProjectImage {
  src: string; // This string is now the final, hashed URL from the import
  square?: boolean; // Use '?' as 'square' might be optional
}

export interface ProjectData {
  slug: string;
  title: string;
  company?: string;
  period?: string;
  image: ProjectImage | string; // Allow for both object and simple string paths (though object is preferred)
  tags?: string[];
  summary?: string;
  overview?: string; // HTML string content
  achievements?: string[];
  result?: string;
  images?: ProjectImage[];
}

export type ProjectsList = ProjectData[];
