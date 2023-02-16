import React, { useState } from "react";

import { navItems } from "../utils/constant";
import { Button } from "../components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const clickHandler = () => setOpenNav(prev => !prev);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 stick z-[9999]">
        <div className="bg-white h-full flex justify-between items-center border-b-2 w-full h-16 xl:px-52 lg:px-24 relative">
          {/* Logo */}
          <div className="h-full p-4">
            <h2 className="font-extrabold text-[24px] lg:text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              TRUONGNGUYEN
            </h2>
          </div>
          {/* Nav */}
          <ul className="hidden md:flex h-full gap-x-12 lg:gap-x-20 font-medium items-center xl:text-[20px]">
            {navItems.map(item => (
              <li
                key={item.id}
                className="cursor-pointer hover:opacity-75 capitalize"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
          {/* Button */}
          <div className="m-4">
            <Button bgColor="bg-slate-300" custom="hidden">
              <a
                href="https://www.linkedin.com/in/truongnguyen2000/"
                target="_blank"
                rel="noreferrer"
              >
                Hire me
              </a>
            </Button>
          </div>
          <div className="block md:hidden pr-6">
            {openNav ? (
              <AiOutlineClose
                className="text-[32px] sm:text-[36px] hover:opacity-50 cursor-pointer"
                onClick={clickHandler}
              />
            ) : (
              <AiOutlineMenu
                className="text-[32px] sm:text-[36px] hover:opacity-50 cursor-pointer"
                onClick={clickHandler}
              />
            )}
          </div>
          {/* Mobile nav */}
          {openNav && (
            <ul className="block md:hidden w-[100vw] absolute top-16 font-medium xl:text-[20px] bg-white border-y-2 py-3 z-[9999]">
              {navItems.map(item => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:opacity-75 py-3 pl-8 capitalize"
                >
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
