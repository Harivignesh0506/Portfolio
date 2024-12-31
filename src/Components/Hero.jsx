import React from 'react';
import img from '../Asstes/WhatsApp_Image_2024-12-29_at_10.25.09_f5e7d87f-removebg-preview.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: "I am a Full-stack Developer",
    social: {
      twitter: "#", // Add your Twitter URL
      facebook: "#", // Add your Facebook URL
      linkedin: "#", // Add your LinkedIn URL
    },
  };

  return (
    <section className="flex flex-col-reverse md:flex-row px-10 py-16 md:py-32 justify-center items-center bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4]">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[#000000] text-4xl md:text-6xl font-Hero-font">
          Hi, <br /> I'm Hari Vignesh
        </h1>
        <p className="text-2xl text-gray-700 mt-4 font-Hero-font">{config.subtitle}</p>
        <div className="flex py-10 space-x-6">
          <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <AiOutlineTwitter size={40} />
          </a>
          <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex justify-center">
        <div className="border-4 border-gray-300 h-[300px] w-[300px] bg-white rounded-full overflow-hidden shadow-lg">
          <img src={img} alt="Hari Vignesh" className="rounded-full h-full w-full object-  " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
