import { Project } from "../typings";
import { fetchBaseUrl } from "./fetchBaseUrl";

export const fetchProjects = async() => {
   const res = await fetch(`${fetchBaseUrl()}/api/getProjects`);

   const data = await res.json()
   const projects: Project[] = data.projects

   return projects;
}