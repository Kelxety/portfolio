import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const NewProjects = ({ projects }: Props) => {
  return (
    <section>
      <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-5xl px-2 md:px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>

        <div className="w-full rounded-xl py-10 px-4 bg-gray-800">
          <Carousel>
            <CarouselContent>
              {projects?.map((project) => (
                <CarouselItem key={project.title}>
                  {project.image && (
                    <motion.img
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="mt-14 rounded-md w-full h-14 sm:h-[150px]  lg:h-[150px] object-cover object-center mb-4"
                      src={urlFor(project?.image).url()}
                      alt=""
                    />
                  )}
                  <Card>
                    <CardHeader>
                      <div className="flex sm:flex-row flex-col justify-center items-center">
                        {project.image && (
                          <>
                            <motion.img
                              initial={{
                                y: -100,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 1.2,
                              }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="w-16 h-16 rounded-full xl:w-[75px] xl:h-[75px] object-cover object-center m-4"
                              src={urlFor(project?.image).url() || ""}
                              alt=""
                            />
                          </>
                        )}

                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.summary}</CardDescription>
                        </div>
                      </div>
                      <div className="text-center text-sm text-gray-400">
                        Website Link:{" "}
                        <a
                          className="hover:text-blue-600 text-blue-400"
                          href={project.linkToBuild}
                          target="blank"
                        >
                          {project.title}
                        </a>
                      </div>
                      <div className="text-center text-sm text-gray-400">
                        Tech Stack Used:{" "}
                        <span className="grid grid-cols-3 gap-2 sm:flex  text-center justify-center">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech._id}
                              className="flex justify-center items-center space-x-2"
                            >
                              <div>
                                {tech.image && (
                                  <>
                                    <motion.img
                                      initial={{
                                        y: 50,
                                        opacity: 0,
                                      }}
                                      transition={{
                                        duration: 1.2,
                                      }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      className="w-4 h-4 rounded-full object-cover object-center"
                                      src={urlFor(tech?.image).url() || ""}
                                      alt=""
                                    />
                                  </>
                                )}
                              </div>
                              <div className="text-blue-400" key={tech._id}>
                                {tech.title}
                              </div>
                            </div>
                          ))}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default NewProjects;
