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

type Props = {
  projects: Project[];
};

const NewProjects = ({ projects }: Props) => {
  if (projects?.length) {
    projects?.sort((a, b) => a.order - b.order);
  }

  return (
    <section className="h-screen py-40 bg-[rgb(15,23,36)]">
      <motion.div className="w-full px-6 md:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <h3 className="uppercase tracking-[8px] text-gray-500 text-sm md:text-base lg:text-lg opacity-10">Projects</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 uppercase">Recent Projects</h2>
            <p className="mt-4 text-gray-400 max-w-sm">A curated list of projects. Scroll to explore.</p>
          </div>

          <div className="lg:w-2/3 max-h-[70vh] overflow-y-auto space-y-6 pr-4 no-scrollbar">
            {projects?.map((project) => (
              <Card key={project.title} className="bg-[rgb(14,24,36)] border-white/10 shadow-lg">
                <CardHeader>
                  <div className="flex sm:flex-row flex-col items-center gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-yellow-500">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.summary}</CardDescription>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-400 mt-3">
                    Website Link: <a className="hover:text-blue-600 text-blue-400" href={project.linkToBuild} target="_blank" rel="noreferrer">{project.title}</a>
                  </div>

                  <div className="text-center text-sm text-gray-400 mt-2">
                    Tech Stack Used:
                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                      {project.technologies.map((tech) => (
                        <div key={tech._id} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
                          <span className="text-blue-400 text-sm">{tech.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewProjects;
