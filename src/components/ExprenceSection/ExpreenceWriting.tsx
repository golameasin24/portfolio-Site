// import React from 'react'
import { FaChalkboardUser } from "react-icons/fa6";
export default function ExpreenceWriting() {
  return (
    <div className='sm:w-[400px] sm:mx-auto md:w-[500px]'>
         {/* section one */}
        <div className='p-5'>
            <div className='border border-blue-200 shadow-sm shadow-blue-300 p-7  rounded-sm'>
                <div className='text-center text-[#09fcd3] relative -top-5'>
                    <h4>(Jun 2023 - Present)</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                            <FaChalkboardUser className='text-4xl text-blue-400' />
                    </div>
                    <div className='text-white animate__animated animate__heartBeat'>
                        <p>FRONT-END</p>
                        <p>DEVELOPER &</p>
                        <p>INSTRUCTOR</p>
                        <p className='mt-2'>Ahmad's IT Institute</p>
                    </div>
                </div>
            </div>
       </div>
        {/* sectionTwo */}
        <div className='p-5'>
            <div className='border border-blue-200 shadow-sm shadow-blue-300 p-7 rounded-sm'>
                <div className='text-center text-[#09fcd3] relative -top-5'>
                    <h4>(Jun 2022 - Present)</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                            <FaChalkboardUser className='text-4xl text-blue-400' />
                    </div>
                    <div className='text-white animate__animated animate__heartBeat'>
                        <p>SELF EMPLOYED</p>
                        <p>code and build</p>
                        <p>Something in everyday</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}
