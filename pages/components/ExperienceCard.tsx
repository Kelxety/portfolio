import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
   return <article className='flex flex-col rounded-lg items-center space-x-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden p-10'>
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
         className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/300565943_5800404076645236_3365251321932448875_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_aseGXtamigAX9cebeH&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-xOvRPs_I3jERIx9oncvLZtnUTG-5xG1ljR_54wokghw&oe=633E25C5"
         alt=""
      />

      <div className="px-0 md:px-10">
         <h4 className="text-xl md:text-1xl lg:text-2xl font-light">CEO OF PAPAFAM</h4>
         <p className="font-bold text-sm md:text-xl">PAPAFAM</p>
         <div className="flex space-x-2 my-2">
            <img
               className="h-10 w-10 rounded-full"
               src="/images/js-logo.png"
            />
            <img
               className="h-10 w-10 rounded-full"
               src="/images/js-logo.png"
            />
            <img
               className="h-10 w-10 rounded-full"
               src="/images/js-logo.png"
            />
         </div>
         <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

         <ul className="list-disc space-y-1 ml-5 text-lg overflow-y-scroll h-[100px]">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
         </ul>
      </div>
  </article>
  
}

export default ExperienceCard