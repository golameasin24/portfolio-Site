import FirstBlog from '@/components/BlogsSite/FirstBlog'
import SecondBlog from '@/components/BlogsSite/SecondBlog'
// import React from 'react'

export default function SubBlog() {
  return (
    <div className='bg-[#1A173C]'>
        <div>
            <FirstBlog/>
        </div>
         <SecondBlog/>
    </div>
  )
}
