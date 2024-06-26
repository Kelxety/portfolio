import { Social } from "@/typings";

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  if (!res) return Promise.resolve([]);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
