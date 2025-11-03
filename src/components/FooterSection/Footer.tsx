"use client";

import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1A173C] py-16">
      <div className="text-center max-w-3xl mx-auto px-4">
        
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF]"
        >
          Golam Easin
        </motion.h2>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-10 text-white font-medium text-lg sm:text-xl"
        >
          <li className="hover:text-[#16F2B3] transition-colors"><a href="#education">About</a></li>
          <li className="hover:text-[#16F2B3] transition-colors"><a href="#skill">Skills</a></li>
          <li className="hover:text-[#16F2B3] transition-colors"><a href="#experience">Experience</a></li>
          <li className="hover:text-[#16F2B3] transition-colors"><a href="#project">Projects</a></li>
          <li className="hover:text-[#16F2B3] transition-colors"><a href="#education">Education</a></li>
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 sm:gap-8 mb-10"
        >
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://github.com/golameasin24" target="_blank" className="p-3 bg-white text-[#1A173C] rounded-full shadow-md shadow-blue-900/20 transition-all">
            <IoLogoGithub className="text-2xl" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.linkedin.com/feed/" target="_blank" className="p-3 bg-white text-[#0A66C2] rounded-full shadow-md shadow-blue-900/20 transition-all">
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.facebook.com/" target="_blank" className="p-3 bg-white text-[#1877F2] rounded-full shadow-md shadow-blue-900/20 transition-all">
            <FaFacebookF className="text-2xl" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" className="p-3 bg-white text-[#1DA1F2] rounded-full shadow-md shadow-blue-900/20 transition-all">
            <FaXTwitter className="text-2xl" />
          </motion.a>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-base"
        >
          © 2025 Golam Easin. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
