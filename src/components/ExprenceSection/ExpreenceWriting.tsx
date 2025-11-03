import { FaChalkboardUser } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ExpreenceWriting() {
  return (
    <div className='sm:w-[400px] sm:mx-auto md:w-[500px]'>

      {/* section one */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}              
        whileInView={{ opacity: 1, y: 0 }}           
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}   
        className='p-5'
      >
        <div className='border border-blue-200 shadow-sm shadow-blue-300 p-7 rounded-sm'>
          <div className='text-center text-[#09fcd3] relative -top-5'>
            <h4>(September 2025 - Present)</h4>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <FaChalkboardUser className='text-4xl text-blue-400' />
            </div>
            <div className='text-white animate__animated animate__heartBeat'>
              <p>FRONT-END</p>
              <p>DEVELOPER &</p>
              <p>Learner</p>
              <p className='mt-2'>Ahmad's IT Institute</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* section two */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }} 
        className='p-5'
      >
        <div className='border border-blue-200 shadow-sm shadow-blue-300 p-7 rounded-sm'>
          <div className='text-center text-[#09fcd3] relative -top-5'>
            <h4>(Part-time Imam (Jun 2022 – Octuber 2024))</h4>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <FaChalkboardUser className='text-4xl text-blue-400' />
            </div>
            <div className='text-white animate__animated animate__heartBeat'>
              <p>SELF EMPLOYED</p>
              <p>Led daily prayers and provided </p>
              <p>religious guidance to the community.</p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
