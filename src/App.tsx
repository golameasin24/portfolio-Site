



import BanerSection from '@/components/BanerSection/BanerSection'
import SubBlog from '@/components/ContactSection/MainContactSection'
import Education from '@/components/EducationSection/Education'
import Footer from '@/components/FooterSection/Footer'
import MyProjects from '@/components/MyProjects/MyProjects'
import Experience from '@/components/ReactRowter/Experience'
import Skill from '@/components/SkillSection/Skill'
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01/Navbar'
import {} from 'react'
import AboutSection from './components/AboutSecton/About'

function App() {
  

  return (
    <>
    
      <div>
        <Navbar01/>  
        <BanerSection/>
        <AboutSection/>
          <Experience/>
            <Skill/>
            <Education/>
            <MyProjects/>
              <SubBlog/>
                <Footer/>
      </div>
    </>
  )
}

export default App




