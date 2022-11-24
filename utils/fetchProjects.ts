import { Project } from "../typings";

export const fetchProjects = async():Promise<Project[]> => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

   if (!res) return Promise.resolve([]);
   
   const data = await res.json()
   const projects: Project[] = data.projects

   return projects;
}