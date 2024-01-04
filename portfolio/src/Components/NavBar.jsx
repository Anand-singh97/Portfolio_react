import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink} from 'react-scroll';

const NavBar = ({ nav, setNav }) => {
  const links = [
    {
      id: 1,
      link: "Home",
      offset:0
    },
    {
      id: 2,
      link: "Education",
      offset:130
    },
    {
      id: 3,
      link: "Projects",
      offset:135
    },
    {
      id: 4,
      link: "Skills",
      offset:145
    },
    {
      id: 5,
      link: "Contact",
      offset:160
    },
  ];

  return (
    <div className="flex z-20 font-semibold justify-between items-center w-full h-20 text-cyan-600 backdrop-blur-md bg-gradient-to-b from-gray-400 to-gray-300/20 fixed px-4">
      <div>
        <a href="/">
          <h1 className="text-4xl md:text-5xl font-signature md:ml-20">Singh</h1>
        </a>
      </div>

      <ul className="hidden md:flex gap-5 mr-20">
        {links.map((element) => (
          <li
            key={element.id}
            className="cursor-pointer font-bold text-gray-600 hover:scale-110 hover:border-b-2 duration-100"
          >
            <ScrollLink
              to={element.link}
              smooth={true}
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              {element.link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav ? (
        <ul className="flex flex-col justify-center items-center absolute top-0 
        right-0 w-full h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
          {links.map((element) => (
            <li
              key={element.id}
              className=" text-gray-900 cursor-pointer font-medium text-4xl py-6
              hover:scale-105 duration-200"
            >
              <ScrollLink onClick={() =>setNav(!nav)}
                to={element.link}
                smooth={true}
                offset={element.offset}
                duration={500}
                className="cursor-pointer"
              >
                {element.link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
