import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      {pageInfo && (
        <>
          <h3 className="absolute top-24 md:right-56 uppercase tracking-[20px] md:text-gray-500/10 text-2xl md:text-9xl text-gray-500/70">
            About
          </h3>
          <h3 className="hidden md:flex absolute top-[80%] right-0 text-right uppercase tracking-[20px] md:text-gray-500/5 text-2xl md:text-5xl">
            Creative <span className="text-red-500/20 ml-10"> Portfolio</span>
          </h3>
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(pageInfo?.profilePic).url()}
            className="-mb-10 md:mb-0 flex-shrink-0 z-10 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20"
          />
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{ opacity: 0.5, x: 0 }}
            src={urlFor(pageInfo?.profilePic).url()}
            className="hidden md:flex absolute top-[10%] md:top-44 md:left-[5%] lg:top-48 lg:left-12 xl:top-24 xl:left-12 z-0 -mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20"
          />
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{ opacity: 0.1, x: 0 }}
            src={urlFor(pageInfo?.profilePic).url()}
            className="hidden md:flex absolute top-[10%] md:top-44 md:left-[8%] lg:top-52 lg:left-14 xl:top-28 xl:left-14 z-0 -mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20"
          />
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-2 px-0 md:px-10"
          >
            {" "}
            <h4 className="text-xl lg:text-4xl font-semibold">
              JOHN ROBIN {"  "}
              <span className="underline decoration-white/50 text-[#ec4e4e]">
                LLANZANA
              </span>
            </h4>
            <p className="text-xs overflow-y-scroll md:overflow-y-auto p-2 h-[200px]  md:h-[400px] xl:h-auto">
              {pageInfo?.backgroundInformation}
            </p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default About;
