// import React from 'react'
import { IoIosGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { PiFigmaLogo } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
export default function OtherSkill() {
  return (
    <div>
        <div className='p-3 w-[320px] mx-auto sm:w-[350px] lg:w-[600px] mb-2'>
            <div className='text-white border border-blue-900 p-4 rounded-2xl shadow-md shadow-blue-900 '>
                <div className='text-center text-3xl mb-5 text-shadow-indigo-500'>
                    <h4>Others</h4>
                </div>
                <div className='grid grid-cols-2 gap-3 mb-3 lg:grid-cols-4'>
                    <div className='relative flex gap-3'>
                        <button className='border border-y-white px-13 sm:py-1 rounded-sm '>Git</button>
                        <IoIosGitMerge  className='absolute left-1 top-3 sm:top-1 lg:left-3 lg:top-2 text-[30px] text-sky-300' />
                    </div>
                    <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-9 py- rounded-sm '>Git Hub</button>
                        <FaGithub   className='absolute left-2 top-3 sm:top-1 lg:top-4 text-[22px] bg-white text-black'/>
                    </div>
                    <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-9 sm:py-1 rounded-sm '>ShadCn</button>
                        <SiShadcnui   className='absolute left-2 top-3 sm:top-1 lg:top-3 text-[22px] text-black bg-white rounded-4xl'/>
                    </div>

                    <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-9  rounded-sm'>Vs Code</button>
                        <VscVscode className='absolute left-2 top-3 sm:top-1 text-[30px] text-blue-500 p-0.1 rounded-[2px]'/>
                    </div>
                </div>

                    <div className='grid grid-cols-2 lg:flex justify-center gap-x-5 mb-3'>
                        <div  className='relative flex gap-3'>
                        <button className='border border-y-white px-8 py-1 rounded-sm'> PostMan</button>
                        <SiPostman    className='absolute left-1 top-1 text-[22px] text-orange-400'/>
                        </div>
                        <div  className='relative flex gap-3'>
                            <button className='border border-y-white px-9 py-1 rounded-sm'>Figma</button>
                            <PiFigmaLogo   className='absolute left-2 top-1 text-[22px]' />   
                        </div> 
                    </div>

                {/* <div className='grid grid-cols-2 lg:flex justify-center lg:gap-3 gap-6 mb-3'>
                    <div  className='relative flex gap-3'>
                    <button className='border border-y-white px-7 py-1 rounded-sm'>MongoDB</button>
                    <TbBrandMongodb className='absolute left-1 top-2 text-[20px] text-purple-600'/> 
                    </div>
                    <div  className='relative flex gap-'>
                    <button className='border border-y-white px-7  rounded-sm'>Firebase</button>
                    <FaFire  className='absolute left-1 top-2 text-[15px] bg-white text-blue-500 p-.1' />
                    </div>
                </div> */}
{/* 
                <div className='mb-3 flex justify-center'>
                    <div className='relative'>
                        <button className='border border-y-white px-9 py-3 rounded-sm '>Tailwind CSS</button>
                        <RiTailwindCssFill className='absolute left-2 top-3.5 text-[22px] text-blue-700' />
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}
