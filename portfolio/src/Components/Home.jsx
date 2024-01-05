import React from 'react';
import heroImage from '../assets/portfolio/4428861.jpg';
import {MdKeyboardArrowRight} from 'react-icons/md';
import resume from '../assets/portfolio/ResumeFinal.pdf';
const Home = ({nav}) => {

  return (
    <div name ='Home' className='home w-full text-gray-700 md:mb-[10rem] mb-[4rem]'>

        <div className=' pt-[100px] max-w-screen-lg mx-auto flex flex-col items-center
         justify-center px-4 md:flex-row md:pt-40'>

            <div className=' md:basis-full basis-1/2 flex flex-col justify-center'>
                <h2 className='font-bold text-4xl md:mt-0 md:text-5xl'>Hi! I'm <span className='text-cyan-600'>Anand Singh<br></br></span>Software & Web developer.</h2>
                <p className='text-gray-700 py-4 max-w-md font-semibold'>I'm a passionate software and web development student at <span className='text-cyan-600'>Conestoga College</span>. My studies 
                revolve around learning and mastering web application development using the <span className=' text-cyan-600'>MERN</span> and <span className=' text-cyan-600'>.NET stack</span>. Additionally, I dedicate time to sharpening my 
                problem-solving abilities by actively engaging in challenges on platforms like LeetCode. This dedicated practice enriches my understanding of <span className=' text-cyan-600'>Data 
                Structures and Algorithms</span>, furthering my growth and proficiency as an aspiring developer.
                </p>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-normal'>
                    <a href={resume} download={'AnandSinghResume'}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300'>
                            Resume
                            <span className='group-hover:-rotate-45 duration-100'>
                                <MdKeyboardArrowRight size={25} className=' ml-1'/>
                            </span> 
                        </button>
                    </a>
                
                </div>
            </div>

            <div className={`w-fit flex justify-end mt-[3.5rem] md:mt-0 ${nav ? 'hidden' : ''}`}>
                <img className='motion-safe:animate-bounce-slow rounded-3xl mx-auto w-2/3' src={heroImage} alt='profile pic'/>
            </div>

        </div>
    </div>
  )
}

export default Home