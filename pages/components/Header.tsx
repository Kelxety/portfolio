import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';

type Props = {}

const Header = (props: Props) => {
   return (
      <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
         <motion.div className='flex flex-row items-center'
            initial={{
               y: -500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{
               y: 0,
               opacity: 1,
               scale: 1,
            }}
            transition={{
               duration:1.5
            }}
         >
            {/* Social Icons */}
            <SocialIcon
               url="https://www.youtube.com/channel/UCKV27eRNDrFx-vqk7MKVYkQ/videos"
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
               url="https://www.youtube.com/channel/UCKV27eRNDrFx-vqk7MKVYkQ/videos"
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCKV27eRNDrFx-vqk7MKVYkQ/videos"
              fgColor='gray'
              bgColor='transparent'
           />
         </motion.div>
         <motion.div
            initial={{
               y: -500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{
               y: 0,
               opacity: 1,
               scale: 1,
            }}
            transition={{
               duration:1.5
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'
         >
            <SocialIcon
               className='cursor-pointer'
               network='email'
               fgColor='gray'
               bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>Contact Me</p>
         </motion.div>
      </header>
   )
}

export default Header