import React from 'react';
import Aboutimg from '../Asstes/1_eF7SJ9Zn2oJwSxkzn3H-Tw (1).png';

const About = () => {
  const config = {
    line1: "Hi, I’m Hari Vignesh, a passionate Full-Stack Developer specializing in the MERN Stack",
    line2: "Skilled in building responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
    line3: "I am actively looking for opportunities where I can apply my skills, learn from industry experts, and contribute to meaningful projects. My goal is to grow as a developer and make a positive impact in the tech world."
  };

  return (
    <section id="about" className="flex flex-col md:flex-row bg-[#9ba7c4] px-5 py-10 opacity-1">
      {/* Image Section */}
      <div className="py-6 md:w-1/3 flex justify-center items-center">
        <img src={Aboutimg} alt="About Hari Vignesh" className="rounded-lg shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 flex justify-center items-center">
        <div className="flex flex-col justify-center text-[#000000] text-center md:text-left md:ml-10">
          <h1 className="text-4xl border-b-4  mb-5 w-max font-bold mx-auto md:mx-0">About Me</h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p>{config.line3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
