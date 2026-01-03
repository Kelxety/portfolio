import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
  const [text, count] = useTypewriter({
    words: [
      `Hello I am ${pageInfo?.name}`,
      "I love to work with you.",
      "<FullStack />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
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
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-8xl uppercase pb-2 tracking-wide">
              {roleParts.length === 2 ? (
                <>
                  <span className="text-white font-extrabold">{roleParts[0]} </span>
                  <span className="text-gray-700 font-extrabold">{roleParts[1]}</span>
                </>
              ) : (
                <span className="text-gray-400">{role}</span>
              )}
            </h2>
            {/* <h1 className="text-4xl md:text-6xl lg:text-lg font-extrabold leading-tight">
              {text}
            </h1> */}
            <p className="text-gray-500 max-w-xl mx-auto lg:mx-0">
              {pageInfo?.backgroundInformation}
            </p>
            <div className="flex items-center justify-center gap-12 my-12">
              <div className="flex flex-col items-center">
                <h2 className="text-7xl font-bold">+10</h2>
                <h5 className="text-center uppercase w-[100px] text-gray-500">Years of Experience</h5>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-7xl font-bold">+20</h2>
                <h5 className="text-center uppercase w-[100px] text-gray-500">Projects Completed</h5>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <Link href="#projects">
                <a className="heroButton">View Projects</a>
              </Link>
              <Link href="#contact">
                <a className="px-4 py-3 rounded-md border border-gray-700 text-gray-200 hover:border-gray-500 transition">Contact</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl shadow-2xl">
            <div className="p-8 flex flex-col justify-center items-center">
              <div className="px-2">
                {(() => {
                  const MotionImage = motion(Image);
                  return (
                    <MotionImage
                      src={urlFor(pageInfo?.heroImage).url() || ""}
                      alt={pageInfo?.name || "hero image"}
                      width={320}
                      height={320}
                      className="rounded-xl shadow-2xl object-cover"
                    />
                  );
                })()}
              </div>
              <h2 className="text-neutral-200 uppercase mt-2 font-extrabold text-3xl text-center">{pageInfo?.name || "John Robin Llanzana"}</h2>
              <p className="text-center text-gray-400 font-semibold mt-2 w-3/4">{"A Software Engineer who has developed countless innovative solutions."}</p>
              <div className="flex gap-4 items-center justify-center mt-4">
                {icons.map((icon) => {
                  const IconComponent = icon.icon;
                  return (
                    <Link
                      key={icon.title}
                      href={icon.url}
                      aria-label={icon.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="text-red-500 hover:text-gray-400 transition" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
