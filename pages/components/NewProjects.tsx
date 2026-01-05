import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const NewProjects = ({ projects }: Props) => {
  if (projects?.length) {
    projects?.sort((a, b) => a.order - b.order);
  }

  return (
    <section className="h-screen py-20 sm:py-32 lg:py-40 bg-[rgb(15,23,36)]">
      <motion.div className="w-full px-4 sm:px-6 md:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:w-1/3">
            <h3 className="uppercase tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg opacity-10">Projects</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2 sm:mt-4 uppercase">Recent <span className="text-yellow-500">Projects</span></h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-sm">A curated list of projects. Scroll to explore.</p>
          </div>

          <div className="lg:w-2/3 max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] overflow-y-auto space-y-4 sm:space-y-6 pr-2 sm:pr-4 no-scrollbar">
            {projects?.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Card className="bg-[rgb(14,24,36)] border-white/10 shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                  <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-4">
                    <div>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-yellow-500">{project.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base text-gray-300 mt-1">{project.summary}</CardDescription>
                    </div>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-gray-400 mt-3">
                    Website Link: <Link className="hover:text-blue-600 text-blue-400 break-all" href={project.linkToBuild || ""} target="_blank" rel="noreferrer">{project.title}</Link>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-gray-400 mt-2">
                    Tech Stack Used:
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
                      {project.technologies.map((tech) => (
                        <div key={tech._id} className="flex items-center gap-2 bg-gray-800 px-2 sm:px-3 py-1 rounded-md">
                          <span className="text-blue-400 text-xs sm:text-sm">{tech.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewProjects;
