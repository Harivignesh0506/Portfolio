import React from "react";
import Resumeimg from "../Asstes/Resume-clipart-transparent-1.png";
import { motion } from "framer-motion";



const Resume = () => {
  const config = {
    link: "https://pdflink.to/544bc475/", // Replace with the actual link to your resume
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4] px-5 py-16"
    >
      {/* Resume Image */}
      <div className="py-6 md:w-1/3 flex justify-center">
      <motion.img
        src={Resumeimg}
        alt="Reviews Illustration"
        className=" max-w-md  h-[250px] md:w-[300px] md:h-[300px] object-contain rounded shadow-lg"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      />
      </div>

      {/* Resume Text */}
      <div className="md:w-2/3 flex justify-center md:justify-center">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#000000] md:ml-10">
          <h1 className="text-4xl border-b-4 mb-5 font-bold">Resume</h1>
          <p className="pb-5 text-lg">
            You can view and download my resume:
          </p>
          <a
            className="px-5 py-2 font-bold rounded bg-[#a0aecd] text-[#000000] hover:border-2 hover:bg-black hover:text-white transition"
            href={config.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
