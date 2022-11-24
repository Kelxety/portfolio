import { PageInfo } from "../typings";
import { fetchBaseUrl } from "./fetchBaseUrl";

export const fetchPageInfo = async() => {
   const res = await fetch(`${fetchBaseUrl()}/api/getPageInfo`);

   const data = await res.json()
   const pageInfo: PageInfo = data.pageInfo

   return pageInfo;
}