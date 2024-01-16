import React from "react";
import conestoga from "../assets/conestoga.png";
import sheridan from "../assets/Sheridan.png";
const About = () => {
  return (
    <div
      name="Education"
      className="w-full h-fit text-white mb-[8rem]"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        justify-center items-center w-full"
      >
        <div className=" mt-5 md:0 flex justify-center pb-8">
          <p className=" w-fit text-4xl font-bold border-b-2 border-gray-700 pb-1 text-gray-700">
            My Education
          </p>
        </div>

        <div className="w-[90%]">

          <div className="flex flex-col justify-center gap-5">

            <div className="text-gray-800 font-semibold bg-gradient-to-b from-blue-200/70 to-blue-100/0 p-5 
            rounded-lg flex justify-center h-[15rem] items-center gap-7 md:gap-[4.5rem]">
              <div>
                <img className=" rounded-lg w-[90%]" src={conestoga} alt="" />
              </div>
              <div>
                <p className=" leading-[1.2rem] pb-3">Advance Diploma in Computer Programming & Analysis</p>
                <p className=" pb-3">Conestoga College, Waterloo, ON </p>
                <p className="pb-3">Expected Graduation in 2026</p>
                <p>GPA: 3.95/4</p>
              </div>
            </div>
            
            <div className="text-gray-800 bg-gradient-to-b from-blue-200/70 to-blue-100/0 font-semibold p-5 
            rounded-lg flex justify-center h-[15rem] items-center">
              <div>
                <img className=" relative md:left-[-45px] rounded-lg w-[70%]" src={sheridan} alt="" />
              </div>
              <div>
                <p className=" leading-[1.2rem] pb-3">Mechanical Engineering Technician Diploma</p>
                <p className=" pb-3">Sheridan College, Brampton, ON</p>
                <p>2015 to 2018</p>
              </div>
            </div> 

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
