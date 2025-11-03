"use client";

import AnimatedBackground from "@/components/BackgroundAnimation/BackgroundAnimation";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function BanerSection() {
  const typedElement = useRef<HTMLSpanElement>(null);

  // Typed.js effect
  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Front-End Developer", "JavaScript Learner", "React Enthusiast"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <div id="bannerSection" className="relative bg-[#1A173C] overflow-hidden py-20 lg:py-24">
      {/* Background Animation */}
      <AnimatedBackground />

      <div className="lg:flex justify-between items-center xl:w-[85%] 2xl:w-[75%] mx-auto px-4 lg:px-10">
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-[45%] text-center lg:text-left z-10"
        >
          <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-3">Hello,</h2>
          <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-3">
            I am <span className="text-[#16F2B3]">Golam Easin</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl text-white mb-2">Professional</h3>

          {/* Typed.js Effect */}
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#16F2B3] mb-6">
            <span ref={typedElement}></span>
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed ">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion
            for learning, I am dedicated to delivering high-quality results. With a positive attitude and a
            growth mindset, I’m ready to make a meaningful contribution and achieve great things.
          </p>

          {/* Check Resume Button with floating animation */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="mt-10 relative inline-block px-8 py-3 text-lg font-semibold text-white rounded-full 
                       bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] 
                       transition-all duration-300 ease-in-out
                       hover:shadow-[0_0_25px_#03E1FF]"
                animate={{ y: [0, -5, 0] }} 
                transition={{
                  duration: 0.5,      
                  repeat: Infinity,   
                  ease: "easeInOut"
                }}>
            Check Resume
            <span className="absolute inset-0 rounded-full bg-[#16F2B3]/10 blur-md -z-10"></span>
          </motion.a>

          {/* Social Icons */}
        
        
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20 lg:mt-0 flex justify-center lg:w-[45%]" >
          <div className="relative">
            <img
              src="/image/yeasin.jpg"
              alt="Golam Easin"
              className="rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[420px] lg:h-[420px] object-cover border-4 border-[#16F2B3]/60 shadow-[0_0_25px_#16F2B3]"
            />
            <div className="absolute inset-0 rounded-full bg-[#16F2B3]/10 blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
