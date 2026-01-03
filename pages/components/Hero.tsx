'use client'
import React from "react";
import dynamic from 'next/dynamic';
const TypewriterText = dynamic(() => import('../../components/TypewriterText'), { ssr: false });
import BackgroundOfHero from "./BackgroundOfHero";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon } from "lucide-react";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const words = [
    `Hello I am ${pageInfo?.name}`,
    "I love to work with you.",
    "<FullStack />",
  ];
  const role = pageInfo?.role || "";
  const roleParts = role.trim().split(/\s+/).filter(Boolean);
  const icons = [
    { title: "GitHub", url: "https://github.com", icon: GithubIcon },
    { title: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
  ];
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[rgb(15,23,36)]">
      {pageInfo && (
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="lg:w-1/2 text-center lg:text-left" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-8xl uppercase pb-2 tracking-wide">
              {roleParts.length === 2 ? (
                <>
                  <span className="text-white font-extrabold">{roleParts[0]} </span>
                  <span className="text-yellow-700 font-extrabold">{roleParts[1]}</span>
                </>
              ) : (
                <span className="text-gray-400">{role}</span>
              )}
            </h2>
            {/* <h1 className="text-4xl md:text-6xl lg:text-lg font-extrabold leading-tight">
              <TypewriterText words={words} />
            </h1> */}
            <motion.p className="text-gray-500 max-w-xl mx-auto lg:mx-0" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
              {pageInfo?.backgroundInformation}
            </motion.p>
            <div className="flex items-center justify-center gap-12 my-12">
              <motion.div initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} className="flex flex-col items-center">
                <h2 className="text-7xl font-bold">+10</h2>
                <h5 className="text-center uppercase w-[100px] text-gray-500">Years of Experience</h5>
              </motion.div>
              <motion.div initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="flex flex-col items-center">
                <h2 className="text-7xl font-bold">+20</h2>
                <h5 className="text-center uppercase w-[100px] text-gray-500">Projects Completed</h5>
              </motion.div>
            </div>
            <motion.div initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex w-full items-center justify-center lg:justify-center gap-4">
              <Link href="#projects">
                <a className="heroButton">View Projects</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="flex items-center justify-center rounded-xl shadow-2xl" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.24 }}>
            <div className="p-8 flex flex-col justify-center items-center">
              <div className="px-2">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-xl shadow-2xl overflow-hidden"
                  >
                    <Image
                      src={urlFor(pageInfo?.heroImage).url() || ""}
                      alt={pageInfo?.name || "hero image"}
                      width={420}
                      height={420}
                      className="rounded-xl object-cover"
                    />
                  </motion.div>
              </div>
              <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-neutral-200 uppercase mt-2 font-extrabold text-3xl text-center">{pageInfo?.name || "John Robin Llanzana"}</motion.h2>
              <motion.p initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.34 }} className="text-center text-gray-400 font-semibold mt-2 w-3/4">{"A Software Engineer who has developed countless innovative solutions."}</motion.p>
              <div className="flex gap-4 items-center justify-center mt-4">
                {icons.map((icon, i) => {
                  const IconComponent = icon.icon;
                  return (
                    <motion.div key={icon.title} initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.36 + i * 0.05 }}>
                      <Link
                        href={icon.url}
                        aria-label={icon.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="text-red-500 hover:text-gray-400 transition" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
