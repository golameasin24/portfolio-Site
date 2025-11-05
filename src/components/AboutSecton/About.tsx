"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#1A173B] text-white py-20 px-5 sm:px-10 lg:px-20 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/image/y.png"
              alt="Golam Easin"
              className="rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[420px] lg:h-[420px] 
                         object-cover border-4 border-[#1A173B]/60 shadow-[#1A173B]"
            />
            <div className="absolute inset-0 rounded-full bg-[#16F2B3]/10 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C35EB9] mb-5">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-5">
            Hi! I'm{" "}
            <span className="text-[#b890da] font-semibold">Golam Easin</span>, a
            passionate Frontend Developer who loves building beautiful,
            interactive, and user-friendly web applications using modern tools
            like React, Tailwind CSS, and JavaScript.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy crafting smooth UI experiences and writing clean,
            maintainable code. I’m also learning backend technologies to become
            a complete full-stack developer.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://github.com/golameasin24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8E00FF] hover:bg-[#7A00E0] transition text-white font-medium px-6 py-3 rounded-lg shadow-md"
            >
              Visit My GitHub
            </motion.a>

            <motion.a
              href="#project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#8E00FF] hover:bg-[#8E00FF] hover:text-white transition text-[#8E00FF] font-medium px-4 py-3 rounded-lg shadow-md"
            >
              View My Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
