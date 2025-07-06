import React from "react";
import { motion } from "framer-motion";

export default function Myportfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#020617] py-16 px-6 sm:px-10"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-white font-mono text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-[#e4ae08]">Portfolio</span>
        </h1>
        <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed">
          We offer a range of services including modern web development,
          result-driven digital marketing, and impactful outdoor advertising — all designed to help brands grow online and offline.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {[
          "/Images/Hero.png",
          "/Images/loopS.png",
          "/Images/real ES.png",
          "/Images/SchoolE.png",
          "/Images/AdvU.png",
          "/Images/sunny.png",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Portfolio ${index + 1}`}
            className="w-full max-w-[320px] h-auto rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

