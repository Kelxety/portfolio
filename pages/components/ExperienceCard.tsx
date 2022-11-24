import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
   experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
   return <article className='flex flex-col rounded-lg items-center justify-center space-x-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden px-10 py-4'>
      <motion.img
         initial={{
            y: -100,
            opacity: 0,
         }}
         transition={{
            duration:1.2
         }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center m-4"
         src={urlFor(experience?.companyImage).url()}
         alt=""
      />
      <div className="px-0 md:px-10">
         <h4 className="text-xl md:text-1xl lg:text-2xl font-light text-center">{experience?.jobTitle}</h4>
         <p className="font-bold text-sm md:text-xl text-center">{experience?.company}</p>
         <div className="flex space-x-2 my-2">
            {experience?.technologies.map((technology) => (
               <img
                  key={technology._id}
                  className="h-5 w-5 rounded-full"
                  src={urlFor(technology?.image).url()}
               />
            ))}
         </div>
         <p className='uppercase py-5 text-gray-300'>{new Date(experience?.dateStarted).toDateString()}  - {" "}
            {experience?.isCurrentlyWorkingHere ?
               "Present" :
               new Date(experience?.dateEnded).toDateString()
            }</p>

         <ul className="list-disc space-y-1 ml-5 text-xs overflow-y-scroll h-[100px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80 pr-5">
            {experience?.points.map((point, id) => (
               <li key={id}>{point}</li>
            ))}
         </ul>
      </div>
  </article>
  
}

export default ExperienceCard