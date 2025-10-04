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
                <a href="golameasin.dev@gamil.com">
                    <CgMail  className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] '/>
                    <span className='text-white'>golameasin.dev@gmail.com</span>
                </a>
              </div>
               <div className='flex gap-4'>
                  <a href="01947540267">
                    <IoCall className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] ' />
                      <span className='text-white'>+8801947540267</span>
                  </a>
              </div>
               <div className='flex gap-4'>
                <a href="https://www.google.com/maps/place/Dhaka/@23.7808405,90.419689,12z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D">
                    <CiLocationOn  className='bg-[#8B98A5] p-2  text-[40px] mb-7 rounded-[50%] '/>
                      <span className='text-white'>Dhaka, Bangladesh</span>
                </a>
              </div>

              <div className='flex gap-4'>
                <a href="https://github.com/golameasin24">
                  <IoLogoGithub  className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]'/>
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedin className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]' />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebookF  className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]'/>
                </a>
                <a href="#">
                  <FaXTwitter className='bg-[#8B98A5] p-2 text-[40px]  rounded-[50%]' />
                </a>
              </div>
         </div>
    </div>
  )
}
