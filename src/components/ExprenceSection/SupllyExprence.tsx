import ExpreenceWriting from '@/components/ExprenceSection/ExpreenceWriting'
import ExprenceLaptop from '@/components/ExprenceSection/ExprenceLaptop'
// import React from 'react'

export default function SupllyExprence() {
  return (
    <div>
        <div className=' text-center text-4xl mt-50 mb-[80px] animate__animated animate__backInDown'>
            <button id='exp' className='text-3xl sm:text-4xl text-white bg-gradient-to-r from-[#0A0A70] to-[#1E40AF] px-6 py-3 border border-sky-900 rounded-md shadow-lg shadow-blue-800/50 hover:scale-105 transition-all duration-300'>Experience</button>
        </div>
        <div className='lg:flex  justify-between lg:w-[1200px] xl:w-[1350px] xl:mx-auto 2xl:w-[1500px]'>
            <ExprenceLaptop/>
            <ExpreenceWriting/>
        </div>
    </div>
  )
}
