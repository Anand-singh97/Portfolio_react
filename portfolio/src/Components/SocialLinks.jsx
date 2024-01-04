import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

    let styleForSocialsList = 'bg-opacity-50 hidden lg:flex justify-between items-center w-40' +
    ' px-4 h-14 bg-gray-300 ml-[-100px] hover:rounded-md duration-300' +
    ' hover:ml-[-10px]';

    const links = [
        {
            id:1,
            child:(<> LinkedIn <FaLinkedin size={30}/> </>),
            href: 'https://www.linkedin.com/in/anand-pravesh-singh-737b52127/',
        },
        {
            id:2,
            child:(<> GitHub <FaGithub size={30}/> </>),
            href:'https://github.com/Anand-singh97'      
        },
        {
            id:3,
            child:(<> Mail <HiOutlineMail size={30}/> </>),
            href:'mailto:Asingh4337@conestogac.on.ca'      
        }
    ];


  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
            links.map((element)=>{
                return (
                <li key={element.id} className={styleForSocialsList}>
                    <a className="flex justify-between items-center w-full
                     text-gray-700 font-semibold" href={element.href}
                     target="_blank" rel="noreferrer">{element.child}
                    </a>
                </li>)
            })
        }
      </ul>
    </div>
  );
};

export default SocialLinks;
