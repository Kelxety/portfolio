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
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-5xl px-2 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl">
        Experience
      </h3>
      <Carousel>
        <CarouselContent>
          {experiences?.map((company) => (
            <CarouselItem key={company.company}>
              <Card>
                <CardHeader>
                  <div className="flex justify-center items-center">
                    {(() => {
                      const MotionImage = motion(Image);
                      return (
                        <MotionImage
                          initial={{ y: -100, opacity: 0 }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          src={urlFor(company?.companyImage).url() || ""}
                          alt={company.company || "company logo"}
                          width={75}
                          height={75}
                          className="w-16 h-16 rounded-full xl:w-[75px] xl:h-[75px] object-cover object-center m-4"
                        />
                      );
                    })()}
                    <div>
                      <CardTitle>{company.company}</CardTitle>
                      <CardDescription>{company.jobTitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex space-x-2 my-2">
                      {company?.technologies.map((technology) => (
                          <Image
                            key={technology._id}
                            className="h-5 w-5 rounded-full"
                            src={urlFor(technology?.image).url() || ""}
                            alt={technology.title || technology._id}
                            width={20}
                            height={20}
                          />
                      ))}
                    </div>
                    <p className="uppercase py-5 text-gray-300">
                      {new Date(company?.dateStarted).toDateString()} -{" "}
                      {company?.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(company?.dateEnded).toDateString()}
                    </p>
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default NewWorkExperience;
