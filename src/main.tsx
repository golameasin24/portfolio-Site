import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from '@/components/ReactRowter/About';
import Experience from '@/components/ReactRowter/Experience';
import Skill from '@/components/SkillSection/Skill';
import Education from '@/components/EducationSection/Education';
// import Projects from '@/components/ReactRowter/Projects';
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import MyProjects from '@/components/MyProjects/MyProjects';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Navbar01,

    children:[

      {
        path:"/about",
        Component: About,
      },

      {
        path:"/skill",
        Component: Skill,
      },

      {
        path: "/experience",
        Component: Experience
      },

      
      {
        path: "/education",
        Component: Education
      },
      
      {
        path: "/project",
        Component: MyProjects
      },
    ]
  },
]);









createRoot(document.getElementById('root')!).render(

  <StrictMode>
          <RouterProvider router={router} />,
  </StrictMode>,
)
