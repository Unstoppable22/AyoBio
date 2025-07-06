import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#020617] py-16 px-6 sm:px-10 flex flex-col md:flex-row items-center md:justify-between gap-10"
    >
      {/* Image Section */}
      <div className="relative">
        <div className="absolute top-0 left-0 border-[10px] h-[420px] w-[340px] border-[#e4ae08] rounded-[32px]"></div>
        <div className="relative ml-6 mt-0 pb-5 ">
          <img
            src="/Images/img_1.png"
            alt="About Me"
            className="h-[420px] w-[200px] object-cover rounded-[32px]"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-white font-mono text-2xl sm:text-3xl mb-4 font-bold">
          About <span className="text-[#e4ae08]">Me</span>
        </h1>
        <p className="text-gray-400 font-mono text-sm sm:text-base mb-6 leading-relaxed">
          As a focused full stack developer, I build responsive web apps with
          HTML, CSS, JavaScript, React, and Tailwind CSS. I collaborate with
          backend teams to turn ideas into fast, functional applications.
        </p>
        <button className="bg-[#e4ae08] px-4 py-2 rounded-sm hover:bg-blue-500 text-sm">
          Contact Us
        </button>
      </div>
    </motion.div>
  );
}
