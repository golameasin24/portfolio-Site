
"use client"

import AnimatedBackground from "@/components/BirdAnimation/Bird"
import { motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll, animate } from "motion/react"
import { useRef } from "react"

export default function MyProjects() {
  const ref = useRef<HTMLUListElement | null>(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  // demo images
  const images = [
 
    {
        name:"/image/bdBooks.png",
        title:" BD Book is an online platform for exploring and discovering books in BangladeshIt connects readers with a wide range of genres, authors, and educational resources.Our mission is to make reading simple, accessible, and enjoyable for everyone. ",
        alimants1:"React",
        alimants2:"Next.js",
        alimants3:"Tailwind CSS",
        alimants4:"Express",
        alimants5:"MongoDB",
        
    },
    
    
    {
        name:"/image/mad.png",
        title:" ( https://madrasha-website-q542.vercel.app/) Madrasa is a digital learning platform dedicated to Islamic education.It provides easy access to courses, resources, and knowledge for students and teachers.Our goal is to make learning the Quran and Islamic studies simple and accessible for everyone.",
        alimants1:"React",
        alimants2:"Next.js",
        alimants3:"Tailwind CSS",
        alimants4:"Express",
        alimants5:"MongoDB",
    },

       {
        name:"/image/bdBooks.png",
        title:" BD Book is an online platform for exploring and discovering books in BangladeshIt connects readers with a wide range of genres, authors, and educational resources.Our mission is to make reading simple, accessible, and enjoyable for everyone. ",
        alimants1:"React",
        alimants2:"Next.js",
        alimants3:"Tailwind CSS",
        alimants4:"Express",
        alimants5:"MongoDB",

    },
    
    
    {
        name:"/image/mad.png",
        title:" ( https://madrasha-website-q542.vercel.app/) Madrasa is a digital learning platform dedicated to Islamic education.It provides easy access to courses, resources, and knowledge for students and teachers.Our goal is to make learning the Quran and Islamic studies simple and accessible for everyone.",
        alimants1:"React",
        alimants2:"Next.js",
        alimants3:"Tailwind CSS",
        alimants4:"Express",
        alimants5:"MongoDB",

    },

    
  
    
  ]

  return (
    <div className="bg-[#1A173C]" id="project">
      <AnimatedBackground/>
         <div className="text-4xl text-center mt-50">
             <button className="bg-[] px-3 py-2 text-white border bg-[#0A0A70] border-sky-900 rounded-sm">My Projects</button>
         </div>
        <div className="relative w-full max-w-5xl mx-auto py-10">
        {/* Progress indicator */}
        <svg className="absolute -top-16 left-4 rotate-[-90deg] w-20 h-20" viewBox="0 0 100 100">
            {/* <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-[#0b1011] stroke-[10%] fill-none" /> */}
            <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="stroke-accent stroke-[10%] fill-none"
            style={{ pathLength: scrollXProgress }}
            />
        </svg>

        {/* Horizontal scroll container */}
        <motion.ul
            ref={ref}
            style={{ maskImage }}
            className="flex gap-5 overflow-x-auto scroll-smooth py-5 px-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-gray-200"
        >
            {images.map((src, i) => (
            <li key={i} className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-96 h-44 sm:h-103 md:h-97 lg:h-110 rounded-xl overflow-hidden shadow-lg">
                <a href="https://book-website-13ee.vercel.app/">
                <img src={src.name} alt={`image-${i}`} className="w-[400px] h-[100px] lg:h-[150px]"/>
                </a>
                <p className="p-4 text-[#FFFFFF] hidden sm:block">{src.title}</p>
                <div className="text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-1 gap-1">
                        <button className="px-2 py-1 border rounded-sm">{src.alimants1}</button>
                        <button className="px-2 py-1 border rounded-sm">{src.alimants2}</button>
                        <button className="px-2 py-1 border rounded-sm">{src.alimants3}</button>
                    </div>
                    <div className="lg:grid grid-cols-2 gap-2 mt-4">
                        <button className="px-2 py-1 border rounded-sm">{src.alimants4}</button>
                        <button className="px-2 py-1 border rounded-sm">{src.alimants5}</button>
                    </div>
                </div>
            </li>
            ))}
        </motion.ul>
        </div>
    </div>
        
  )
}

// Scroll overflow mask
const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`)
    } else if (value === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`)
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`)
    }
  })

  return maskImage
}
