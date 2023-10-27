import React from "react";

import HeroImg from "../assets/hero.png";
import { Button } from "../components";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:justify-between items-center xl:px-32 xl:py-16 mt-16">
      {/* Hero Img */}
      <div className="lg:w-1/2 h-full flex justify-center items-center">
        <img
          src={HeroImg}
          alt="hero"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>
      {/* Text */}
      <div className="lg:w-1/2 h-full flex justify-center flex-col items-center lg:items-start xl:px-16">
        <h1 className="text-[26px] sm:text-[38px] capitalize font-bold opacity-75">
          Hello, my name is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Truong
          </span>
        </h1>
        <p className="capitalize sm:text-[20px] xl:text-[30px] py-2">
          A software developer from Vietnam.
        </p>
        <div className="w-full flex justify-center gap-x-8 mt-4">
          <Button bgColor="bg-green-300" custom="block">
            <a
              href="https://drive.google.com/file/d/1rYIXCnXiRLFrCfw1lph-TCdT2HRrvhMR/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Button>
          <Button bgColor="bg-sky-400">
            <a
              href="https://github.com/lamquangtruongnguyen"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
