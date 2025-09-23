import BanerSection from '@/components/BanerSection/BanerSection'
import SubBlog from '@/components/BlogsSite/SubBlog'
import Education from '@/components/EducationSection/Education'
import Footer from '@/components/FooterSection/Footer'
import MyProjects from '@/components/MyProjects/MyProjects'
import Experience from '@/components/ReactRowter/Experience'
import Skill from '@/components/SkillSection/Skill'
// import React from 'react'

export default function About() {
  return (
    <div>
        <BanerSection/>
         <Experience/>
         <Skill/>
         <Education/>
         <MyProjects/>
         <SubBlog/>
         <Footer/>
    </div>
  )
}
