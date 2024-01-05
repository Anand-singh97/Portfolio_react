import React, { useState } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { description } from "../assets/description";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectDescription, setProjectDescription] = useState(null);
  const [details, setDetails] = useState("");

  const projects = [
    { id: 1, src: installNode },
    { id: 2, src: navbar },
    { id: 3, src: reactParallax },
    { id: 4, src: reactSmooth },
    { id: 5, src: reactWeather },
    { id: 6, src: arrayDestruct },
  ];

  const showDescription = (id) => {
    setProjectDescription(id);
    setDetails(description[0]);
  };

  const hideDescription = () => {
    setProjectDescription(null);
  };

  return (
    <div
      name="Projects"
      className="w-full relative text-gray-700 h-fit mb-[9rem]"
    >
      <div className="pb-8 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold inline border-b-2 pb-1 border-gray-500">
          Projects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-[5rem]">
        {projects.map((element) => (
          <div
            key={element.id}
            className="shadow-md shadow-blue-100 rounded-lg overflow-hidden"
          >
            <div
              className="relative  overflow-hidden"
              onMouseEnter={() => showDescription(element.id)}
              onMouseLeave={hideDescription}
            >
              <img className="rounded-md" src={element.src} alt="" />
              {projectDescription === element.id && (
                <div className="backdrop-blur-lg top-0 p-2 w-full h-full absolute bg-white bg-opacity-[0.1]">
                  <div className="text-center">
                    <h1 className=" text-lg font-bold">{details.title}</h1>
                  </div>
                  <div className="text-center text-[1.02rem]">
                    <p>{details.description}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <Link
                to="https://github.com/Anand-singh97/BlogApp_MERN"
                className="font-semibold text-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
