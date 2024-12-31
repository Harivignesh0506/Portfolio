import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const config = {
    email: "harivignesh0506@gmail.com",
    phone: "86674-13356",
    location:"A-110, Travancore Apartment, Kattankulathur, Potheri, Chennai-603203"
  };

  return (
    <section
      id="con"
      className="flex flex-col justify-center items-center md:flex-row bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4] px-5 py-16"
    >
      <div className="text-center md:text-left flex flex-col items-center md:items-start text-[#000000] j">
        <h1 className="text-4xl border-b-4 border-black mb-5 w-max font-bold">
          Contact
        </h1>
        <p className="pb-5 text-lg">I’d love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. </p>
        <p className="py-2 flex gap-2 ">
          <span className="font-bold border-b-2 bg-slate-300 w-[30px] h-[30px] rounded-full text-center flex items-center justify-center "><MdOutlineMail /> </span>
          <a
            href={`mailto:${config.email}`}
            className=" hover:text-blue-800"
          >
            {config.email}
          </a>
        </p>
        <p className="py-2 flex gap-2">
          <span className="font-bold border-b-2 bg-slate-300 w-[30px] h-[30px] rounded-full text-center flex items-center justify-center"><MdOutlineLocalPhone /> </span>
          <a
            href={`tel:${config.phone}`}
            className=" hover:text-blue-800"
          >
            {config.phone}
          </a>
        </p>
        <p className="py-2 flex gap-2">
          <span className="font-bold border-b-2 bg-slate-300 w-[30px] h-[30px] rounded-full text-center flex items-center justify-center"> <IoLocationOutline /> </span>
          <a
            href={`tel:${config.location}`}
            className=" hover:text-blue-800"
          >
            {config.location}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
