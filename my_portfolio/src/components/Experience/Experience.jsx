import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[6vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">EXPERIENCE</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-purple-600 h-full rounded"></div>

        {/* Experience entries */}
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={exp.id}
              className={`relative mb-16 flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute sm:left-1/2 left-6 sm:transform sm:-translate-x-1/2 bg-purple-600 w-5 h-5 rounded-full shadow-lg z-20"></div>

              {/* Card */}
              <div
                className={`bg-gray-900 backdrop-blur-md border border-purple-500 rounded-2xl shadow-lg p-6 max-w-md w-full transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "sm:mr-auto sm:ml-0" : "sm:ml-auto sm:mr-0"
                }`}
              >
                <div className="flex items-center space-x-5">
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-white shadow-md flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Role & Company */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <h4 className="text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>
                {/* Description */}
                <p className="mt-4 text-gray-400">{exp.desc}</p>
                {/* Skills */}
                <div className="mt-4">
                  <h5 className="text-white font-medium mb-2">Skills:</h5>
                  <ul className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-purple-700 text-gray-100 px-3 py-1 rounded-full text-xs font-semibold border border-purple-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
