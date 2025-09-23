
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RiMessage2Line } from "react-icons/ri";
// import React from 'react'
import ThirdBlog from '@/components/BlogsSite/ThirdBlog';

export default function SecondBlog() {
  return (
    <div className='mb-50 mt-50'>
         <div>
             <div className='lg:flex justify-between items-center lg:ml-21 xl:ml-42 xl:w-[1000px] 2xl:ml-110 2xl:w-[1090px]'>
                    <div className='text-center md:hidden lg:block order-3 lg:rotate-90 xl:mb-80 xl:mr-5'>
                        <button className='text-[22px] text-white  bg-[#1A1443] border px-10  py-2 rounded-sm'>Contact</button>
                    </div>
                  <div className='p-4'>
                     <div className='text-white w-[280px] sm:w-[600px] md:w-[740px] lg:w-[400px] xl:w-[470px] mx-auto border border-blue-300 px-3 py-6 rounded-sm'>
                            <div className='mb-6'>
                                <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                            </div>
                            <form>
                                    <div className='mb-4'>
                                        <label className='block mb-2' htmlFor="name">Your Name: </label>
                                        <Input type='text' id='email' />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block mb-2' htmlFor="email">Your Email: </label>
                                        <Input type='email' id='email' />
                                    </div>
                                    <div>
                                        <label  className='block mb-2' htmlFor="message">Your Message:</label>
                                        <Textarea className='p-10'  />
                                    </div>
                                    <div className='text-center mt-5 relative'>
                                        <button type='submit' className='px-7 py-3 border rounded-sm bg-[#A53FCF]'>SEND MESSAGE </button>
                                        <RiMessage2Line className='absolute top-5 right-13 sm:right-53 md:right-70 lg:right-28 xl:right-36' />
                                    </div>
                            </form>
                        </div>
                  </div>
                  <ThirdBlog/>
             </div>
         </div>
    </div>
  )
}
