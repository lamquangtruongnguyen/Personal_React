import React from "react";

import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javascriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import bootstrapImg from "../assets/bootstrap.png";
import tailwindImg from "../assets/tailwind.png";
import materialImg from "../assets/material.png";
import mysqlImg from "../assets/mysql.png";

const imgLists = [
  htmlImg,
  cssImg,
  javascriptImg,
  reactImg,
  bootstrapImg,
  tailwindImg,
  materialImg,
  mysqlImg
];

const Skills = () => {
  return (
    <section
      className="w-full flex flex-col items-start xl:px-52 xl:py-4 my-8"
    >
      {/* Section title */}
      <div className="self-start border-b-2 pl-12">
        <h2 className="font-bold text-[32px] opacity-50">Skills</h2>
      </div>
      {/* Content */}
      <div className="w-full flex items-center mt-8 sm:px-12">
        {/* Text */}
        <div className="sm:w-1/2 flex-1 pl-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="font-extrabold text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-300">
            An aspiring Front-end Developer
          </h2>
          <p className="max-w-[250px] md:text-[20px] pt-4 lg:pl-8">
            Skilled in essential programming languages for web development as
            well as their frameworks.
          </p>
        </div>
        {/* Icons */}
        <div className="sm:w-1/2 flex-1 flex justify-center items-center flex-wrap gap-x-8 gap-y-4 pr-8 xl:pl-8">
          {imgLists.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="icon"
              className="w-[50px] h-[50px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
