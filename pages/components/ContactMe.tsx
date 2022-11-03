

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = { }

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = (props: Props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:devjrl.programmer@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-2xl font-semibold text-center flex flex-col">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-1">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+639177516377</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">devjrl.programmer@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">Puerto Princesa City, Palawan</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="md:space-x-2 md:flex w-full">
            <input required {...register('name')} placeholder="Name" className="contactInput w-full mb-2 md:mb-0" type="text" />
            <input required {...register('email')} placeholder="Email" className="contactInput w-full" type="email" />
          </div>
          <input required {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea required {...register('message')} placeholder="Message" className="contactInput" />
          <button className="bg-[#F7AB0A] py-2 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe