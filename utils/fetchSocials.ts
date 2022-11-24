import { Social } from "../typings";
import { fetchBaseUrl } from "./fetchBaseUrl";

export const fetchSocials = async() => {
   const res = await fetch(`${fetchBaseUrl()}/api/getSocials`);

   const data = await res.json()
   const socials: Social[] = data.socials

   return socials;
}