import AnimatedBackground from '@/components/BackgroundAnimation/BackgroundAnimation';
import { FaChalkboardUser } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className='relative bg-[#1A173C] py-20 overflow-hidden ml-2'>
      <AnimatedBackground />

      {/* Title */}
      <div id='education' className='text-3xl text-white text-center mb-16'>
        <button className='bg-gradient-to-r from-[#0A0A70] to-[#1E40AF] border border-blue-200 px-6 py-3 rounded-md shadow-md shadow-blue-700 hover:scale-105 transition-all duration-300'>
          EDUCATION
        </button>
      </div>

      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className='relative w-full mb-16'
      >
        <div className='lg:w-[700px] xl:w-[800px] 2xl:w-[900px] mx-auto'>
          <div className='bg-[#23205a] border border-cyan-300/40 rounded-2xl p-8 text-white shadow-lg shadow-blue-800/30'>
            <div className='flex items-center gap-4 mb-4'>
              <FaChalkboardUser className='text-4xl text-cyan-400' />
              <h4 className='text-xl font-semibold text-cyan-300'>(Jun 2025 - Present)</h4>
            </div>
            <p className='text-2xl font-semibold mb-2'>MASTER'S IN ISLAMIC STUDIES</p>
            <p className='text-gray-200'>
              JAMIA ARABIA ISLAMIC EDUCATION, KUSHTIA DOWLOTPUR, BANGLADESH
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className='relative w-full mb-16'
      >
        <div className='lg:w-[700px] xl:w-[800px] 2xl:w-[900px] mx-auto'>
          <div className='bg-[#23205a] border border-cyan-300/40 rounded-2xl p-8 text-white shadow-lg shadow-blue-800/30'>
            <div className='flex items-center gap-4 mb-4'>
              <FaChalkboardUser className='text-4xl text-cyan-400' />
              <h4 className='text-xl font-semibold text-cyan-300'>(Jun 2025 - Present)</h4>
            </div>
            <p className='text-2xl font-semibold mb-2'>
              Diploma in English & COMPUTER TECHNOLOGY
            </p>
            <p className='text-gray-200'>Ahmad Education</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
