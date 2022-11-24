
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';
import { Project } from '../../typings';

type Props = {
  projects : Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
        {projects?.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              className='relative rounded-full h-32 w-32 mx-auto object-cover'
              src={urlFor(project.image).url()}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl font-semibold text-center">
                {project.title}
                <span className="underline decoration-[#F7AB0A]/50">
                {" "} : {i + 1} of {projects.length}
                </span>
              </h4>
              <p className="text-xs md:text-lg text-center md:text-left">{project.summary}.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

      </div>
    </motion.div>
  )
}

export default Projects