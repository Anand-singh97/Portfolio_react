import React, { useState } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import blogAppImage from "../assets/portfolio/blogAppImage.png";
import clinicalNotesAppImage from "../assets/portfolio/ClinicalnotesAppImage.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const [projectDescription, setProjectDescription] = useState(null);
  const [details, setDetails] = useState("");

  const projects = [
    {
      id: 1,
      src: blogAppImage,
      title: "Blog App",
      code: "https://github.com/Anand-singh97/BlogApp_MERN",
      description:
        "This MERN stack Blog Application incorporates user authentication using Google sign-in, ensuring secure JWT token storage. It enables users to create and edit blogs, including image uploads, titles, summaries, and content. Additionally, it employs self-signed HTTPS certificates for secure communication and MongoDB Atlas for database management.",
    },
    {
      id: 2,
      src: clinicalNotesAppImage,
      title: "Clinical Notes App",
      code: "https://github.com/Anand-singh97/Clinical-Notes-app",
      description:
        "The Clinical Data Management Application, built using C# in WinForms, is a robust tool designed for healthcare professionals to efficiently manage and extract crucial patient information from clinical notes. It simplifies patient data recording, offers automated extraction of vital medical data, ensures secure storage, and facilitates easy retrieval and report generation for streamlined patient care.",
    },
    { id: 3, src: reactParallax },
    { id: 4, src: reactSmooth },
    { id: 5, src: reactWeather },
    { id: 6, src: arrayDestruct },
  ];

  const showDescription = (id) => {
    setProjectDescription(id);
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-1 gap-8 px-5 md:px-[8px] sm:px-[8rem]">
        {projects.map((element) => (
          <div
            key={element.id}
            className="shadow-md shadow-blue-100 rounded-lg overflow-hidden"
          >
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => showDescription(element.id)}
              onMouseLeave={hideDescription}
            >
              <img
                className="rounded-md w-full h-[300px]"
                src={element.src}
                alt=""
              />
              {projectDescription === element.id && (
                <div className="backdrop-filter backdrop-blur-lg top-0 p-2 w-full duration-300 transition-all h-full absolute bg-orange-100 bg-opacity-[0.8]">
                  <div className="text-center">
                    <h1 className="text-lg font-bold">{details.title}</h1>
                  </div>
                  <div className="flex justify-center items-center text-[1rem]">
                    <p className="text-center font-semibold">
                      {element.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <a
                href= {element.code}
                className="font-semibold text-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
