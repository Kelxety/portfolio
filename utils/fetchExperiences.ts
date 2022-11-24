import { Experience } from "../typings";
import { fetchBaseUrl } from "./fetchBaseUrl";

export const fetchExperiences = async () => {
   
   const res = await fetch(`${fetchBaseUrl()}/api/getExperience`);

   const data = await res.json()
   const experiences: Experience[] = data.experiences

   return experiences;
}