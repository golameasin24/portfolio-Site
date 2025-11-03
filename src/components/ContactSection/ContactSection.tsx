"use client";

import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaXTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ThirdBlog() {
  return (
    <div className="flex flex-col gap-6 p-5">
      
      {/* Email */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="mailto:golameasin.dev@gmail.com"
        className="flex items-center gap-4 p-3 bg-[#1A1443] rounded-xl shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
      >
        <CgMail className="text-[36px] p-2 bg-[#8B98A5] rounded-full text-white" />
        <span className="text-white font-medium break-all">golameasin.dev@gmail.com</span>
      </motion.a>

      {/* Phone */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="tel:+8801947540267"
        className="flex items-center gap-4 p-3 bg-[#1A1443] rounded-xl shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
      >
        <IoCall className="text-[36px] p-2 bg-[#8B98A5] rounded-full text-white" />
        <span className="text-white font-medium">+8801947540267</span>
      </motion.a>

      {/* Location */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="https://www.google.com/maps/place/Dhaka"
        target="_blank"
        className="flex items-center gap-4 p-3 bg-[#1A1443] rounded-xl shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
      >
        <CiLocationOn className="text-[36px] p-2 bg-[#8B98A5] rounded-full text-white" />
        <span className="text-white font-medium">Dhaka, Bangladesh</span>
      </motion.a>

      {/* Social Links */}
      <div className="flex gap-4 mt-2">
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://github.com/golameasin24"
          target="_blank"
          className="p-3 bg-[#8B98A5] rounded-full text-white shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
        >
          <IoLogoGithub className="text-2xl" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://www.linkedin.com/feed/"
          target="_blank"
          className="p-3 bg-[#8B98A5] rounded-full text-white shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
        >
          <FaLinkedin className="text-2xl" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://www.facebook.com/"
          target="_blank"
          className="p-3 bg-[#8B98A5] rounded-full text-white shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
        >
          <FaFacebookF className="text-2xl" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="#"
          className="p-3 bg-[#8B98A5] rounded-full text-white shadow-md shadow-blue-900/20 hover:shadow-blue-400/50 transition-all"
        >
          <FaXTwitter className="text-2xl" />
        </motion.a>
      </div>
    </div>
  );
}
