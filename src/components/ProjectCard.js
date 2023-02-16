import React from "react";

const ProjectCard = ({ name, desc, tech, url, icons }) => {
  return (
    <article className="flex flex-col justify-between bg-gradient-to-b from-green-100 to-yellow-100 my-4 py-4 px-8 rounded-xl w-[400px] h-[300px] shrink-0 grow-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 scale-90 sm:scale-100 drop-shadow-lg">
      {/* Title */}
      <h2 className="font-extrabold text-[28px] opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
        {name}
      </h2>
      {/* Desc */}
      <p>{desc}</p>
      {/* Tools used */}
      <ul className="pl-8 py-4">
        {tech.map((item, index) => (
          <li key={index} className="underline">
            {item}
          </li>
        ))}
      </ul>
      {/* Link */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-orange-600"
      >
        Click here for the Demo
      </a>
      {/* Images */}
      <div className="flex gap-x-4">
        {icons.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="logo"
            className="w-[40px] h-[40px]"
          />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
