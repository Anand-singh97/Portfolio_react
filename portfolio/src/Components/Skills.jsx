import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import cLogo from '../assets/clogo.png';
import mvc from '../assets/aspMvc.jpg'
import mongo from '../assets/mongodb.png';
import mySql from '../assets/MySQL.png'


const Skills = () => {
    const frontEndSkills = [
        {
            id:1,
            src:html,
            title:'HTML'
        },
        {
            id:2,
            src:css,
            title:'CSS'
        },
        {
            id:3,
            src:javascript,
            title:'Java Script'
        },
        {
            id:4,
            src:reactImage,
            title:'React'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind'
        },
    ];
    const backEndSkills = [
        {
            id:5,
            src:cLogo,
            title:'C#'
        },
        {
            id:6,
            src:mvc,
            title:'ASP.NET MVC'
        },
        {
            id:7,
            src:node,
            title:'Node/Express'
        },
        {
            id:8,
            src:mySql,
            title:'MySQL'
        },
        {
            id:9,
            src:mongo,
            title:'MongoDb'
        },
    ]

  return (
    <div name = 'Skills' className='w-full'> 
        <div className=' max-w-screen-lg mx-auto flex flex-col 
        justify-center w-full text-white mb-[8rem]'>

            <div className='flex justify-center pb-10'>
                <p className=' text-4xl font-bold border-b-2 pb-1 text-gray-800 border-gray-700
                 '>Skills</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 px-12 md:px-0 text-center'>
                <div className=' bg-gray-400 shadow-md shadow-white hover:scale-105 duration-500 p-2 rounded-lg items-center'>
                    <p className='pb-3 text-gray-800 text-xl font-bold'>Front End</p>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 p-1'>
                        {
                            frontEndSkills.map((element)=>{
                                return(
                                <div key={element.id}>
                                    <img className=' w-20 mx-auto' src={element.src} alt=''/>
                                    <p className=' text-gray-800 font-semibold'>{element.title}</p>
                                </div>)
                            })
                        }        
                    </div>       
                </div>
                <div className='bg-gray-400 shadow-md shadow-white hover:scale-105 duration-500 p-2 rounded-lg'>
                    <p className='font-bold pb-3 text-gray-800 text-xl'>Back End</p>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 p-1 items-center'>
                        {
                            backEndSkills.map((element)=>{
                                return(
                                <div key={element.id}>
                                    <img className=' w-20 mx-auto' src={element.src} alt=''/>
                                    <p className='text-gray-800 font-semibold'>{element.title}</p>
                                </div>)
                            })
                        }        
                    </div>       
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills