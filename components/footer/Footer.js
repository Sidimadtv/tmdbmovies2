import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    
    <div className="flex place-content-center mt-5 mx-5">
      <h1 className="w-full md:w-1/2 lg:w-1/3 text-white text-xl sm:text-2xl md:text-3xl text-center font-semibold">
        <span className="text-primary">ByS!d!m@D|</span>&copy;2022 - {new Date().getFullYear()}{" "}
        
      </h1>
   
      

      </div>
   
  );
};

export default Footer;
