// import React from 'react'
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiMaterialformkdocs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoPython } from "react-icons/io";
import { TbBrandMysql } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa6";
import { TbBrandMongodb } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import AnimatedBackground from '@/components/BirdAnimation/Bird';


export default function Skill() {
  return (
    <div className='bg-[#1A173C]' id="skill">
         <div>
            <AnimatedBackground/>
              <div className='mt-50'>
                <h4 className='text-center text-4xl text-white mb-3'>Skills</h4>
                <p className='text-center text-white mb-20'>Here are some of my skills on which I have been working on for the past 2 years.</p>
              </div>
         </div>

         <div className='xl:grid grid-cols-2 xl:w-[1220px]  xl:mx-auto'>
            <div className='p-3 w-[320px] mx-auto sm:w-[350px] lg:w-[600px]'>
                <div className='text-white border border-blue-900 p-4 lg:p-6 rounded-2xl shadow-md shadow-blue-900'>
                    <div className='text-center text-3xl mb-5 text-shadow-indigo-500'>
                        <h4>Frontend</h4>
                    </div>
                    <div className='grid grid-cols-2 gap-3 mb-3 lg:grid-cols-4 lg:gap-x-2'>
                        <div className='relative flex gap-3'>
                        <button className='border border-y-white px-9 py-1 rounded-sm '>React Js</button>
                        <FaReact className='absolute left-2 top-4 sm:top-2 text-[22px] text-sky-300' />
                        </div>
                        <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py-1 rounded-sm '>Redux</button>
                            <SiRedux  className='absolute left-2 top-4 sm:top-2 text-[22px] text-purple-500'/>
                        </div>
                        <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py-1 rounded-sm '>Next Js</button>
                            <SiNextdotjs  className='absolute left-2 top-4 text-[22px] text-black bg-white rounded-4xl'/>
                        </div>

                        <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py-3 rounded-sm '>HTML</button>
                            <FaHtml5  className='absolute left-2 top-4 text-[22px] bg-orange-300 p-0.1 rounded-[2px]'/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 lg:flex justify-center gap-3 mb-3'>
                        <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-9  rounded-sm '> CSS</button>
                        <FaCss3  className='absolute left-2 top-4 lg:top-1 text-[22px] text-blue-500'/>
                        </div>
                        <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py- rounded-sm '>JAVA SCRIPT</button>
                            <RiJavascriptFill className='absolute left-2  top-5 lg:top-1 text-[22px] text-yellow-500' />
                        </div> 
                    </div>

                    <div className='grid grid-cols-2 lg:flex justify-center gap-6 mb-3'>
                        <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-7  rounded-sm'>Bootstrap</button>
                        <BsFillBootstrapFill className='absolute left-1 top-4 lg:top-1 text-[20px] text-purple-600' />
                        </div>
                        <div  className='relative flex gap-'>
                        <button className='border border-y-white px-7  rounded-sm '>Material UI</button>
                        <SiMaterialformkdocs className='absolute left-1 top-2 text-[15px] bg-white text-blue-500 p-.1' />
                        </div>
                    </div>
                    <div className='mb-3 flex justify-center'>
                        <div className='relative'>
                            <button className='border border-y-white px-9 py-3 rounded-sm '>Tailwind CSS</button>
                            <RiTailwindCssFill className='absolute left-2 top-3.5 text-[22px] text-blue-700' />
                        </div>
                    </div>
                </div>
            </div>
            {/* section one */}
            {/* section Two */}
                <div className='p-3 w-[320px] mx-auto sm:w-[350px] lg:w-[600px] mb-2'>
                    <div className='text-white border border-blue-900 p-4 rounded-2xl shadow-md shadow-blue-900 '>
                        <div className='text-center text-3xl mb-5 text-shadow-indigo-500'>
                            <h4>Backend</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mb-3 lg:grid-cols-4'>
                            <div className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py- rounded-sm '>Node Js</button>
                            {/* <DiNodejs className='absolute left-1 top-0 text-[52px] text-sky-300' /> */}
                            </div>
                            <div  className='relative flex gap-3'>
                                <button className='border border-y-white px-9 py- rounded-sm '>Express</button>
                                <SiExpress  className='absolute left-2 top-4 sm:top-1 lg:top-4 text-[22px] text-purple-500'/>
                            </div>
                            <div  className='relative flex gap-3'>
                                <button className='border border-y-white px-9 py-1 rounded-sm '>Gharap QI</button>
                                <GrGraphQl  className='absolute left-2 top-4 text-[22px] text-black bg-white rounded-4xl'/>
                            </div>

                            <div  className='relative flex gap-3'>
                                <button className='border border-y-white px-9 py-3 rounded-sm'>Python</button>
                                <IoLogoPython   className='absolute left-2 top-4 text-[22px] bg-orange-300 p-0.1 rounded-[2px]'/>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 lg:flex justify-center gap-3 mb-3'>
                            <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py-1 rounded-sm'> MySQL</button>
                            <TbBrandMysql   className='absolute left-1 top-1 text-[22px] text-blue-500'/>
                            </div>
                            <div  className='relative flex gap-3'>
                                <button className='border border-y-white px-9 py- rounded-sm'>Laravel</button>
                                <FaLaravel  className='absolute left-2 top-1 text-[22px] text-yellow-500' />
                            </div> 
                        </div>

                        <div className='grid grid-cols-2 lg:flex justify-center lg:gap-3 gap-6 mb-3'>
                            <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-7 py-1 rounded-sm'>MongoDB</button>
                            <TbBrandMongodb className='absolute left-1 top-2 text-[20px] text-purple-600'/> 
                            </div>
                            <div  className='relative flex gap-'>
                            <button className='border border-y-white px-7  rounded-sm'>Firebase</button>
                            <FaFire  className='absolute left-1 top-2 text-[15px] bg-white text-blue-500 p-.1' />
                            </div>
                        </div>

                        <div className='mb-3 flex justify-center'>
                            <div className='relative'>
                                <button className='border border-y-white px-9 py-3 rounded-sm '>Tailwind CSS</button>
                                <RiTailwindCssFill className='absolute left-2 top-3.5 text-[22px] text-blue-700' />
                            </div>
                        </div>
                    </div>
            </div>
            {/* section tow end */}
         </div>
    </div>
  )
}
