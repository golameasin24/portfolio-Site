import ExpreenceWriting from '@/components/ExprenceSection/ExpreenceWriting'
import ExprenceLaptop from '@/components/ExprenceSection/ExprenceLaptop'
// import React from 'react'

export default function SupllyExprence() {
  return (
    <div>
        <div className=' text-center text-4xl mt-50 mb-[80px]'>
            <button id='exp' className=' text-white bg-[#0a0a70] px-10 py-3 rounded-sm'>Experience</button>
        </div>
        <div className='lg:flex  justify-between lg:w-[1200px] xl:w-[1350px] xl:mx-auto 2xl:w-[1500px]'>
            <ExprenceLaptop/>
            <ExpreenceWriting/>
        </div>
    </div>
  )
}
