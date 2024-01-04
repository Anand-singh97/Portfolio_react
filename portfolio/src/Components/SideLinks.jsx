import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SideLinks() {
  return (
    <div>
      <div className="bg-opacity-40 text-gray-700 lg:hidden flex flex-col z-30 p-3 rounded-lg fixed bg-gray-200 right-[0.2rem] top-[7rem] gap-4">
        <a href="https://www.linkedin.com/in/anand-pravesh-singh-737b52127/"  rel="noreferrer" target="_blank"><FaLinkedin className="cursor-pointer hover:scale-110 duration-75" size={25} /></a>
        <a href="https://github.com/Anand-singh97" rel="noreferrer" target="_blank"><FaGithub className="cursor-pointer hover:scale-110 duration-75" size={25} /></a>
        <a href="mailto:Asingh4337@conestogac.on.ca" rel="noreferrer" target="_blank"><HiOutlineMail className="cursor-pointer hover:scale-110 duration-75" size={25} /></a>
      </div>
    </div>
  );
}

export default SideLinks;
