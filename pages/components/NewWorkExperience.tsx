"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Experience } from "@/typings";
import React from "react";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  experiences: Experience[];
};

const NewWorkExperience = ({ experiences }: Props) => {
  experiences.sort((a, b) => {
    if (a.dateStarted && b.dateStarted) {
      return new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime();
    }
    return 0;
  });
  return (
    <motion.section className="h-screen bg-[rgb(15,23,36)] w-full flex items-center overflow-hidden px-6 md:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3">
          <h3 className="uppercase tracking-[8px] text-gray-500 text-sm md:text-base lg:text-lg opacity-10">
            Experience
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            10 YEARS OF <span className="text-yellow-500">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-sm">
            A selection of companies and roles I&apos;ve held. Swipe or use
            arrows to browse.
          </p>
        </div>

        <div className="lg:w-2/3 max-h-[70vh] overflow-y-auto space-y-6 pr-4 no-scrollbar">
          {experiences.map((company, index) => (
            <motion.div
              key={company._id + index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <Card className="bg-[rgb(14,24,36)] border-white/10 shadow-lg">
                <CardHeader>
                <div className="flex items-center gap-4">
                  {/* <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0"
                  >
                    {company?.companyImage && (
                      <Image
                        src={urlFor(company.companyImage).url()}
                        alt={company.company || "company logo"}
                        width={75}
                        height={75}
                        className="object-cover"
                      />
                    )}
                  </motion.div> */}
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-yellow-500">
                      {company.company}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {company.jobTitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-sm text-gray-200">
                  <p className="ml-5 max-h-40 overflow-y-auto pr-2 no-scrollbar text-gray-300">
                    {company.points?.join(", ")}
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  {company.dateStarted
                    ? new Date(company.dateStarted).toLocaleString(undefined, {
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                  {" "}-{" "}
                  {company.isCurrentlyWorkingHere
                    ? "Present"
                    : company.dateEnded
                    ? new Date(company.dateEnded).toLocaleString(undefined, {
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewWorkExperience;
