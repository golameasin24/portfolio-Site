// import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-[#1A173C]'>
           <div className='text-center p-10 mt-30  sm:w-[600px] xl:w-[700px] sm:mx-auto'>
                    <div className='mb-7'>
                        <p className='text-[#8F00FF] text-[25px]'>Golam Easin</p>
                    </div>
                    <div>
                        <ul>
                            <li className='flex gap-2 text-white justify-center sm:gap-7 lg:text-2xl mb-12'>
                                <a href="#education">About</a>
                                <a href="#skill">Skills</a>
                                <a href="#experience">Experience</a>
                                <a href="#project">Projects</a>
                                <a href="#education">Education</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex gap-4 sm:gap-8 justify-center mb-10'>
                            <a href="https://github.com/golameasin24">
                             <IoLogoGithub  className='bg-white p-2 text-[40px]  rounded-[50%]'/>
                            </a>
                            <a href="https://www.linkedin.com/feed/">
                                <FaLinkedin className='bg-white p-2 text-[40px]  rounded-[50%]' />
                            </a>
                            <a href="https://www.facebook.com/">
                               <FaFacebookF  className='bg-white p-2 text-[40px]  rounded-[50%]'/>
                            </a>
                            <a href="#">
                               <FaXTwitter className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]' />
                            </a>
                        </div>
                    </div>
                    <p className='text-white'>© 2025 Golam Easin. All rights reserved.</p>
                </div>
           </div>

  )
}
