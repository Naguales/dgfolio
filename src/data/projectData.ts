// src/data/projectData.ts

// 1. Import the raw data from your original file
import { projects as rawProjects } from "./projects.js"; 

// 2. Import the TypeScript types
import type { ProjectsList } from '../types/project'; 

// 3. Export the raw data array, explicitly cast to the TypeScript type.
//    This tells the compiler to treat this JavaScript data as the defined type.
export const projects: ProjectsList = rawProjects as ProjectsList;
