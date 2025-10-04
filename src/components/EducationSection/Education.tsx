import AnimatedBackground from '@/components/BirdAnimation/Bird';
// import React from 'react'
import { FaChalkboardUser } from "react-icons/fa6";

export default function Education() {
  return (
    <div className='bg-[#1A173C]'> 
     <AnimatedBackground/>
        {/* section one */}
        <div id='education' className='text-3xl text-white text-center mt-50 mb-10'>
             <button className='bg-[#0A0A70] border border-blue-100 p-3 rounded-sm'>EDUCATIONS</button>
        </div>
          <div className='p-5 animate__animated animate__fadeInLeft'>
                      <div className='border border-blue-200 shadow-sm shadow-blue-300 px-3 py-12 rounded-sm lg:w-[800px] lg:mx-auto xl:w-[900px] 2xl:w-[1000px]'>
                          <div className='text-center text-[#09fcd3] relative -top-9'>
                              <h4>(Jun 2025 - Present)</h4>
                          </div>
                          <div className='flex justify-between items-center gap-5'>
                              <div className='md:pl-10'>
                                      <FaChalkboardUser className='text-4xl text-blue-400' />
                              </div>
                              <div className='text-white animate__animated animate__heartBeat'>
                                <p className='text-2xl mb-3'>MASTER'S IN ISLAMIC STUDIES </p>
                                <p>JAMIA ARABIA ISLAMIC EDUCATION  KUSHTIA DOWLOTPUR BANGLADESH</p>
                              </div>
                          </div>
                      </div>
                 </div>

        {/* section two */}

              <div className='p-5 animate__animated animate__fadeInRight'>
                      <div className='border border-blue-200 shadow-sm shadow-blue-300 px-3 py-12 rounded-sm lg:w-[800px] lg:mx-auto xl:w-[900px] 2xl:w-[1000px]'>
                          <div className='text-center text-[#09fcd3] relative -top-9'>
                              <h4>(Jun 2025 - Present)</h4>
                          </div>
                          <div className='flex justify-between items-center gap-5'>
                              <div className='pl-10'>
                                      <FaChalkboardUser className='text-4xl text-blue-400' />
                              </div>
                              <div className='text-white'>
                                <p className='text-2xl mb-3'>Diploma in English &  COUMPUTER TECHNOLOGY </p>
                                <p>Ahmad Education</p>
                              </div>
                          </div>
                      </div>
                 </div>

    </div>
  )
}
