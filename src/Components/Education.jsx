import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const Euducation = () => {
  const configEdu = {
    Collage: "Sethupathy Government Arts College",
    major: "Bachelor of Commerce in Computer Applications",
    clg: "2021-2024",
  };

  const configWork = {
    Company: "Why Global Services",
    JobRole: "Web Development Intern",
    Year: "2024-Present",
  };

  return (
    <section
      id="about"
      className="flex flex-col bg-[#9ba7c4] px-5 py-10 gap-10"
    >
      {/* Section Title */}
      <div className="text-center md:text-left flex justify-center items-center md:items-start text-[#000000]">
        <h1 className="text-4xl border-b-4 border-black mb-5 w-max font-bold">
          My Education & Work Experience
        </h1>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-col md:flex-row md:gap-5 gap-8 justify-center items-center md:items-stretch">
        {/* Education */}
        <div className="w-full md:w-1/3 bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4] shadow-lg rounded-lg p-5 flex flex-col">
          <h1 className="flex items-center justify-center gap-2 mb-3">
            <span className="font-bold bg-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center text-xl">
              <FaGraduationCap />
            </span>
            Education
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{configEdu.Collage}</h2>
            <span className="text-sm text-gray-600">{configEdu.clg}</span>
          </div>
          <p className="text-[#383838] ">{configEdu.major}</p>
        </div>

        {/* Work */}
        <div className="w-full md:w-1/3 bg-gradient-to-r from-[#e8eaf6] to-[#9ba7c4] shadow-lg rounded-lg p-5 flex flex-col">
          <h1 className="flex items-center justify-center gap-2 mb-3">
            <span className="font-bold bg-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center text-xl">
              <MdOutlineWork />
            </span>
            Work Experience
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{configWork.Company}</h2>
            <span className="text-sm text-gray-600">{configWork.Year}</span>
          </div>
          <p className="text-[#383838] ">{configWork.JobRole}</p>
        </div>
      </div>
    </section>
  );
};

export default Euducation;
