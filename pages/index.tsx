import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import NewWorkExperience from "./components/NewWorkExperience";
import NewProjects from "./components/NewProjects";

interface Props {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const title = pageInfo.name + " " + "Portfolio";
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
      <Head>
        <title>{title} </title>
        <meta name="description" content="This is my Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {pageInfo && (
        <>
          {/* Header */}
          <Header socials={socials} />

          {/* Hero */}
          <section id="hero" className="snap-center">
            <Hero pageInfo={pageInfo} />
          </section>

          {/* About */}
          {/* <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section> */}

          {/* Experience */}
          <section id="experience" className="snap-center">
            {/* <WorkExperience experiences={experiences} /> */}
            <NewWorkExperience experiences={experiences} />
          </section>

          {/* Skills */}
          {/* <section id="skills" className="snap-start px-4">
            <Skills skills={skills} />
          </section> */}

          {/* Projects */}
          <section id="projects" className="snap-start">
            {/* <Projects projects={projects} /> */}
            <NewProjects projects={projects} />
          </section>

          {/* Contact Me */}
          <section id="contact" className="snap-start">
            <ContactMe />
          </section>

          <Link href="#hero">
            <footer className="bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  className="h-5 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                  src={"/images/jrl.png"}
                  alt={`${pageInfo?.name} logo`}
                  width={32}
                  height={32}
                />
                <p className="text-xs p-4 text-white/50">
                  Copyright @ jrldev.programmer@gmail.com
                </p>
              </div>
            </footer>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 60,
  };
};
