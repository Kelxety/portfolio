
import { motion } from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              className='relative rounded-full h-32 w-32 mx-auto object-cover'
              src='https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/300565943_5800404076645236_3365251321932448875_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_aseGXtamigAX9cebeH&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-xOvRPs_I3jERIx9oncvLZtnUTG-5xG1ljR_54wokghw&oe=633E25C5'
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}: {" "}
                </span>
                UPS clone
              </h4>
              <p className="text-xs md:text-lg text-center md:text-left">I've worked both with startups and large corporations to help build & scale their companies. Along the journey I realised my passion existed in helping others excel and pursue their dreams as upcoming developers.</p>
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