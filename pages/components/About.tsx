import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
   return <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
      <h3 className='absolute top-24 md:left-9 uppercase tracking-[20px] md:text-gray-500/10 text-2xl md:text-9xl'>About</h3>
      <h3 className='hidden md:flex absolute top-[80%] right-0 text-right uppercase tracking-[20px] md:text-gray-500/5 text-2xl md:text-5xl'>Creative {" "} <span className='text-red-500/20 ml-10'>{" "}Portfolio</span></h3>
      <motion.img
         initial={{
            x: -100,
            opacity: 0,
         }}
         transition={{
            duration:1
         }}
         whileInView={{ opacity: 1, x: 0 }}
         src='/images/profile.jpg'
         className='-mb-10 md:mb-0 flex-shrink-0 z-10 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20'
      />
      <motion.img
         initial={{
            x: -100,
            opacity: 0,
         }}
         transition={{
            duration:1
         }}
         whileInView={{ opacity: .5, x: 0 }}
         src='/images/profile.jpg'
         className='hidden md:flex absolute top-[10%] md:top-44 md:left-[5%] lg:top-48 lg:left-12 xl:top-24 xl:left-12 z-0 -mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20'
      />
      <motion.img
         initial={{
            x: -100,
            opacity: 0,
         }}
         transition={{
            duration:1
         }}
         whileInView={{ opacity: .1, x: 0 }}
         src='/images/profile.jpg'
         className='hidden md:flex absolute top-[10%] md:top-44 md:left-[8%] lg:top-52 lg:left-14 xl:top-28 xl:left-14 z-0 -mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-75 xl:w-[500px] xl:h-[600px] mt-20'
      />
      <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
         className='space-y-2 px-0 md:px-10'>{" "}
         <h4 className='text-xl lg:text-4xl font-semibold'>JOHN ROBIN {"  "}<span className='underline decoration-white/50 text-[#ec4e4e]'>LLANZANA</span></h4>
         <p className='text-xs overflow-y-scroll md:overflow-y-auto p-2 h-[200px]  md:h-[400px] xl:h-auto'>
            I'm Robin. 100 You might also know me as ROBIN PAPA React! I'll be your coach & mentor inside the PAPAFAM, here's a little bit about me... I've been coding for over 10 years now. As a Full Stack developer I've worked both with startups and large corporations to help build & scale their companies. Along the journey I realised my passion existed in helping others excel and pursue their dreams as upcoming developers. With this passion, I have now trained thousand's of developers accross the globe. Through live coaching sessions on Youtube, I have accumulated several MILLION views demonstrating how to apply developer skills in a range of cool builds and challenges. I deliver REAL VALUE by teaching REAL WORLD projects to help students enter the world of web development.
         </p>
      </motion.div>
  </motion.div>
  
}

export default About