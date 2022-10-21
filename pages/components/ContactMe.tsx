

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = { }

type Inputs = {
  example: string,
  exampleRequired: string, 
}

const ContactMe = (props: Props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+1234567890</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">jrldev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+1234567890</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button className="bg-[#F7AB0A] py-2 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe