import { Skill } from "../typings";
import { fetchBaseUrl } from "./fetchBaseUrl";

export const fetchSkills = async() => {
   const res = await fetch(`${fetchBaseUrl()}/api/getSkills`);

   const data = await res.json()
   const skills: Skill[] = data.skills

   return skills;
}