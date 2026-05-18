"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RiMessage2Line } from "react-icons/ri";
import ThirdBlog from "@/components/ContactSection/ContactSection";
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function FromSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // লোডিং দেখানোর জন্য

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // বাটনটি ডিজেবল করে লোডিং শুরু হবে

    // EmailJS এ পাঠানোর জন্য ডেটা
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // sendForm এর বদলে send ব্যবহার করতে হবে
    emailjs
      .send(
        "service_alagl7k", // আপনার Service ID
        "template_yhgx09x", // ⚠️ আপনার Template ID টি কপি করে এখানে বসান ⚠️
        templateParams, // ফর্মের ডেটা
        "NeS1skFUI5_wjrkxv", // আপনার Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Sent message successfully!");

        // Form reset
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false); // লোডিং বন্ধ হবে
      });
  };

  return (
    <div className="mb-5 mt-10 bg-[#1A173C] py-16">
      <Toaster position="top-right" />
      <div className="xl:w-[1000px] 2xl:w-[1090px] mx-auto px-4 lg:px-0">
        <div className="lg:flex justify-between items-start gap-9">
          {/* Left: Vertical Contact Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center md:hidden lg:block order-3 lg:rotate-90 xl:mb-80 xl:mr-5"
          >
            <button className="text-[22px] text-white bg-[#1A1443] border px-10 py-2 rounded-sm">
              Contact
            </button>
          </motion.div>

          {/* Middle: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-4 flex-1"
          >
            <div className="text-white w-full max-w-lg mx-auto border border-blue-400 px-6 py-8 rounded-2xl shadow-lg shadow-blue-500/20 bg-[#100a33]">
              <div className="mb-6 text-gray-200 text-sm sm:text-base">
                <p>
                  If you have any questions or concerns, please don't hesitate
                  to contact me. I am open to any work opportunities that align
                  with my skills and interests.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 font-medium" htmlFor="name">
                    Your Name:
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="bg-[#2A234B] text-white border border-blue-400 focus:border-[#16F2B3]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium" htmlFor="email">
                    Your Email:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="bg-[#2A234B] text-white border border-blue-400 focus:border-[#16F2B3]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium" htmlFor="message">
                    Your Message:
                  </label>
                  <Textarea
                    placeholder="Write your message..."
                    className="bg-[#2A234B] text-white border border-blue-400 focus:border-[#16F2B3] p-4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center relative mt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.05,
                      boxShadow: isSubmitting ? "none" : "0 0 20px #03E1FF",
                    }}
                    className={`px-7 py-3 border rounded-full text-white font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed opacity-70"
                        : "bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF]"
                    }`}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </motion.button>
                  {/* আইকনটি শুধুমাত্র তখনই দেখাবে যখন মেসেজ সেন্ড হচ্ছে না */}
                  {!isSubmitting && (
                    <RiMessage2Line className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-2xl" />
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: ThirdBlog Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-10 lg:mt-0"
          >
            <ThirdBlog />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
