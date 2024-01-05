// import React, { useState } from "react";
import blogAppImage from "../assets/portfolio/blogAppImage.png";
import clinicalNotesAppImage from "../assets/portfolio/ClinicalnotesAppImage.jpg";
import ticTac from "../assets/portfolio/tic_tac.jpg";
import gameImage from '../assets/portfolio/demon_slayer.png';

const Projects = () => {

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
    { id: 3, src: gameImage,
      title: "RPG game",
      code: "https://github.com/Anand-singh97/GameProject",
      description:
        "This game app is developed using MonoGame and C#, implementing an engaging gameplay experience where the hero shoots powerballs to destroy enemies, earning 10 points for each successful kill. The game employs Object-Oriented Programming (OOP) principles to enhance its structure and functionality.", },
    { id: 4, src: ticTac,
      title: "Tic Tac Toe game",
      code: "https://github.com/Anand-singh97/Tic_Tac_Toe_App/tree/main",
      description:
        "The 3x3 Tic-Tac-Toe app is a classic and engaging desktop game developed using C# and WinForms. This user-friendly application provides an interactive and entertaining platform for players to enjoy the timeless game of Tic-Tac-Toe, C# Programming Language**: The core logic and functionality of the game are implemented using C#.The game's graphical user interface is built using WinForms." },
  ];

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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 gap-5 px-5 md:px-[8px] sm:px-[8rem]">
        {projects.map((element) => {
          return (
            <div className="bg-blue-100 pb-2 rounded-xl">
              <div>
                <div className="flex justify-center">
                  <img
                    alt=""
                    className="h-[250px] w-full rounded-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    src={element.src}
                  />
                </div>
                <div className="flex h-[17rem] overflow-hidden md:h-[18rem] lg:h-[15rem] px-2 flex-col items-center">
                  <h2 className="py-3 text-[1.3rem] font-bold">
                    {element.title}
                  </h2>
                  <p className="bg-blue-100 rounded-lg text-center font-[600]">
                    {element.description}
                  </p>
                </div>
                <div className="flex lg:mt-5 justify-center">
                  <a
                    className=" font-semibold  py-2 border-2 bg-blue-300 rounded-lg w-[10rem] text-center"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                    href={element.code}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
