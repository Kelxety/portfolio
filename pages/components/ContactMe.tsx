

import { PageInfo } from "@/typings";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = { 
  pageInfo?: PageInfo
}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = (props: Props) => {
  const { pageInfo } = props;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:devjrl.programmer@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className='flex-1 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-16 sm:top-20 md:top-24 uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>Contact</h3>

        <div className="flex flex-col w-screen p-2 sm:p-4 md:space-y-10 space-y-4">
          <motion.h4 initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-base sm:text-lg md:text-2xl font-semibold text-center flex flex-col">
            <span className="decoration-[#F7AB0A]/50">
              Lets Work Together.
            </span>
          </motion.h4>

          <div className="space-y-1">
            {/* <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-sm md:text-xl">+639177516377</p>
            </div> */}

            {/* <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-sm md:text-xl">devjrl.programmer@gmail.com</p>
            </div> */}

            {/* <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-sm md:text-xl">Puerto Princesa City, Palawan</p>
            </div> */}
          </div>
          <div className="p-1 sm:p-2 md:hidden"></div>
          <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="flex flex-col space-y-3 sm:space-y-4 w-full max-w-xl mx-auto">
            <div className="md:flex md:space-x-4">
              <input required {...register('name')} placeholder="Name" className="contactInput w-full mb-2 md:mb-0 text-xs sm:text-sm" type="text" />
              <input required {...register('email')} placeholder="Email" className="contactInput w-full text-xs sm:text-sm" type="email" />
            </div>
            <input required {...register('subject')} placeholder="Subject" className="contactInput w-full text-xs sm:text-sm" type="text" />
            <textarea required {...register('message')} placeholder="Message" className="contactInput w-full h-24 sm:h-32 resize-none text-xs sm:text-sm" />
            <div className="flex justify-center">
              <button className="bg-[#F7AB0A] px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-black font-bold text-base sm:text-lg shadow-md hover:bg-[#e69a07] transition" type="submit">Submit</button>
            </div>
          </motion.form>
        </div>
      </div>
      <footer className="bottom-5 w-full flex-none">
        <div className="flex items-center justify-center px-2">
          <motion.div initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }}>
            <Link href="#hero" aria-label="Back to top">
              <Image
                className="h-4 w-6 sm:h-5 sm:w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src={"/images/JRL white.png"}
                alt={`${pageInfo?.name} logo`}
                width={32}
                height={22}
              />
            </Link>
          </motion.div>
          <motion.p initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="text-[10px] sm:text-xs p-2 sm:p-4 text-white/50 text-center"> 
            Copyright 2026 @ jrldev.programmer@gmail.com
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default ContactMe