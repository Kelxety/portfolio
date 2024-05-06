import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-5xl px-2 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80 p-10">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
