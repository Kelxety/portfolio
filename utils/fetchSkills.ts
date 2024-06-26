import { Skill } from "@/typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  if (!res) return Promise.resolve([]);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
