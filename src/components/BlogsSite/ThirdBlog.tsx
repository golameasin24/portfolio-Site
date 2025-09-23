// import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function ThirdBlog() {
  return (
    <div>
         <div className='pl-5'>
              <div className='flex gap-4'>
                  <CgMail  className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] '/>
                  <span className='text-white'>golameasin.dev@gmail.com</span>
              </div>
               <div className='flex gap-4'>
                <IoCall className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] ' />
                  <span className='text-white'>+8801947540267</span>
              </div>
               <div className='flex gap-4'>
                 <CiLocationOn  className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] '/>
                  <span className='text-white'>Dhaka, Bangladesh</span>
              </div>
              <div className='flex gap-4'>
                  <IoLogoGithub  className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]'/>
                  <FaLinkedin className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]' />
                  <FaFacebookF  className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]'/>
                  <FaXTwitter className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]' />
              </div>
         </div>
    </div>
  )
}
