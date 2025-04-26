import React, { useEffect } from "react";
import web1 from "../Asstes/coloshop-free-bootstrap-ecommerce-website-template.jpg";
import web2 from "../Asstes/81fd1e100718715.5f0ef9fe9e100.png";
import web3 from "../Asstes/blog.jpg";
import Aos from "aos";

const Project = () => {
  const config = {
    project: [
      {
        image: web1,
        description: "An Ecommerce Website. Built With React JS.",
        link: "https://github.com/",
      },
      {
        image: web2,
        description: "A Creative Landing Page. Built With MERN Stack.",
        link: "https://github.com/",
      },
      {
        image: web3,
        description: "A Blog Platform. Built With React and Node.js.",
        link: "https://github.com/",
      },
    ],
  };

  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
    });
  },[]);

  return (
    <section
      id="project"
      className="flex flex-col py-16 px-5 bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4]"
      
    >
      {/* Section Header */}
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 inline-block mb-5">
          Projects
        </h1>
        <p className="text-lg text-gray-800">
          These are some of my best projects. I built them with React, MERN,
          and vanilla CSS. Check them out below!  
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20"
      data-aos="zoom-in"
      data-aos-delay="100"
      >
        {config.project.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="fade-up"
        data-aos-delay={index * 100}
          >
            <div className="relative cursor-pointer overflow-hidden shadow-lg rounded-lg">
              {/* Project Image */}
              <img
                className="h-[250px] w-full object-cover group-hover:scale-110 transition-transform duration-300"
                src={project.image}
                alt={`Project ${index + 1}`}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#9fabc8] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                <p className="text-lg font-semibold text-black mb-5 px-4">
                  {project.description}
                </p>
                <a
                  className="px-5 py-2 font-bold rounded bg-[#a0aecd] text-[#000000] hover:border-2 hover:text-white hover:bg-black transition"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
