"use client"

import AnimatedBackground from "@/components/BackgroundAnimation/BackgroundAnimation"
import { motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll, animate } from "motion/react"
import { useRef } from "react"

export default function MyProjects() {
  const ref = useRef<HTMLUListElement | null>(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <div className="bg-[#1A173C] relative py-20" id="project">
      <AnimatedBackground />

      {/* Title */}
      <div className="text-center mt-10 mb-16">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl text-white bg-gradient-to-r from-[#0A0A70] to-[#1E40AF] px-6 py-3 border border-sky-900 rounded-md shadow-lg shadow-blue-800/50 hover:scale-105 transition-all duration-300"
        >
          My Projects
        </motion.button>
      </div>

      {/* Scroll container */}
      <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
        <motion.ul
          ref={ref}
          style={{ maskImage }}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-8 px-2 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent"
        >
          {/* Project 1 */}
          <ProjectCard
            link="https://book-website-13ee.vercel.app/"
            img="/image/bdBooks.png"
            title="BD Book is an online platform for exploring and discovering books in Bangladesh. It connects readers with a wide range of genres, authors, and educational resources."
            tech={["HTML", "Tailwind CSS", "React", "Express", "MongoDB"]}
          />

          {/* Project 2 */}
          <ProjectCard
            link="https://madrasha-website.vercel.app/"
            img="/image/mad.png"
            title="Madrasa is a digital learning platform dedicated to Islamic education. It provides access to Quran and Islamic studies for students and teachers."
            tech={["Tailwind CSS", "Express", "MongoDB"]}
          />

          {/* Project 3 */}
          <ProjectCard
            link="https://book-website-13ee.vercel.app/"
            img="/image/bdBooks.png"
            title="BD Book project with React, Tailwind and MongoDB, focused on user-friendly book discovery experience."
            tech={["React", "Tailwind CSS", "MongoDB"]}
          />

          {/* Project 4 */}
          <ProjectCard
            link="https://madrasha-website.vercel.app/"
            img="/image/mad.png"
            title="Madrasa Learning platform for Islamic courses with full-stack technologies."
            tech={["HTML", "Tailwind CSS", "Express"]}
          />
        </motion.ul>
      </div>
    </div>
  )
}

// ✅ Single Project Card Component
function ProjectCard({ link, img, title, tech }: { link: string; img: string; title: string; tech: string[] }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(56, 189, 248, 0.5)" }}
      className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-[#23205a]/70 border border-cyan-400/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="" className="w-full h-40 object-cover border-b border-cyan-400/20" />
      </a>
      <div className="p-4 text-white">
        <p className="text-sm mb-3 text-gray-200 hidden sm:block">{title}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="border border-cyan-400/40 px-3 py-1 rounded-md text-sm hover:bg-cyan-400/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.li>
  )
}

// ✅ Scroll overflow mask
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
