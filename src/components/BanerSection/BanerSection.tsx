// import React from 'react'
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// function BanerSection() {
//   return (
//     <div className='flex justify-between mt-10 items-center p-18'>
//           <div className='w-[50%]'>
//               <p className='text-4xl text-white'>Hello,</p>
//               <p className='text-4xl text-white'>This is Golam Easin</p>
//               <p className='text-4xl text-white'>I'm a Professional</p>
//               <p className='text-4xl text-white'>Frot end devoloper</p>
//               <p className='text-[#818181] text-2xl'>
//                 I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.Check Resume
//               </p>
//               <div className='flex gap-4'>
//                <a href=""> <FaFacebookSquare className="text-blue-500" /></a> 
//                 <a href=""><FaWhatsappSquare className="text-green-500" /></a>   
//                 <a href=""><FaLinkedin className="text-blue-500" /></a>  
//               </div>
//           </div>
//           <div className='w-[30%] h-[30%]'>
//               <img className='rounded-2xl' src="/image/pakistan.png" alt="" /> 
//           </div>
//     </div>
//   )
// }

// export default BanerSection




import AnimatedBackground from '@/components/BirdAnimation/Bird';
import { useEffect, useRef } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Typed from "typed.js";

function BanerSection() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Front End Developer", "JavaScript Learner", "React Creator"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className=' p-2 lg:flex justify-between items-center lg:p-8  xl:w-[90%] 2xl:w-[80%] mx-auto'>
      <div className='my-5 sm:flex justify-center order-2 lg:w-[50%]'>
        <img className='rounded-[50%] sm:w-[500px] sm:h-[500px] xl:w-[450px] bg-transparent' src="/image/yeasin.jpg" alt="" /> 
        <AnimatedBackground/>  
      </div>

      <div className='order-1 lg:w-[40%] bg-[#1A173C]'>
        <p className='text-4xl text-white text-center'>Hello,</p>
        <p className='text-4xl text-white text-center'>I am Golam Easin</p>
        <p className='text-4xl text-white text-center'> Professional</p>

        {/* Typed.js Effect */}
        <p className='text-3xl text-white text-center'>
          <span className='text-[#16F2B3]' ref={typedElement}></span>
        </p>

        <p className='text-1xl mt-4  text-card text-center text-white'>
          I am a motivated and versatile individual, always eager to take on new challenges. 
          With a passion for learning I am dedicated to delivering high-quality results. 
          With a positive attitude and a growth mindset, I am ready to make a meaningful contribution 
          and achieve great things. Check Resume
        </p>

        <div className='flex gap-4 mt-10 justify-center'>
          <a href=""><FaFacebookSquare className="text-blue-500 text-4xl" /></a>
          <a href=""><FaWhatsappSquare className="text-green-500 text-4xl" /></a>
          <a href=""><FaLinkedin className="text-blue-500 text-4xl" /></a>
          <a href=""><FaXTwitter className="text-4xl bg-gray-300 rounded-[2px]" /></a>
        </div>
      </div>
    </div>
  )
}

export default BanerSection
