import React from "react";

import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineCopyright,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-start xl:px-52 lg:px-24 xl:py-4 my-8"
    >
      {/* Section title */}
      <div className="self-start border-b-2 pl-12">
        <h2 className="font-bold text-[32px] opacity-50">Contact</h2>
      </div>
      {/* Contact */}
      <div className="w-full flex flex-col sm:flex-row justify-between py-8 px-12">
        <div className="opacity-75 sm:text-[20px] leading-8">
          <p>
            <AiOutlineMail className="inline mr-2" />
            quangtruong9112000@gmail.com
          </p>
          <p>
            <AiOutlinePhone className="inline mr-2" />
            (808)-799-7796
          </p>
        </div>
        {/* Media */}
        <div className="flex gap-x-12 text-[40px] py-2">
          <a
            href="https://www.linkedin.com/in/truongnguyen2000/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.facebook.com/truong9112000/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@tnguyen911?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h2 className="opacity-50">Copyright</h2>
        <AiOutlineCopyright />
      </div>
    </footer>
  );
};

export default Footer;
