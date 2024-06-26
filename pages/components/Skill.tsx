import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {skill && (
        <>
          <motion.img
            initial={{
              x: directionLeft ? -100 : 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className="rounded-full border border-gray-500 object-cover w-10 h-10md:h-14 md:w-14 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 md:h-14 md:w-14 xl:w-16 xl:h-16 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-80">
                {skill?.progress}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skill;
