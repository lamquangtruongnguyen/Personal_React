import React from "react";

const Button = ({ children, bgColor, custom }) => {
  return (
    <button
      type="button"
      className={`${bgColor} ${custom} md:block rounded-full w-[130px] xl:w-[150px] px-5 py-3 font-medium hover:opacity-75 xl:text-[20px]`}
    >
      {children}
    </button>
  );
};

export default Button;
