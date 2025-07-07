import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#111827] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row lg:justify-between gap-10 items-center px-6 sm:px-10 md:px-20 py-10 md:py-20 md:gap-10 overflow-x-hidden mt-10"
      >
        {/* Left Content */}
        <div className="lg:max-w-xl w-full md:text-left sm:text-xl text-center">
          <h1 className="text-[#e4ae08] text-base sm:text-5xl md:text-xl font-mono mb-4">
            Hello, Welcome
          </h1>
          <h2 className="text-white font-mono text-xl sm:text-2xl md:text-3xl mb-5 font-bold">
            I'M ADEKUNLE TOHEEB AYOMIDE
          </h2>
          <h3 className="text-gray-400 font-mono text-sm sm:text-base md:text-lg mb-5 leading-relaxed">
            a passionate Full Stack Developer, code crafter, and problem solver.
          </h3>

         <a href="#contact">
  <button className="bg-[#e4ae08] px-4 py-2 rounded-sm hover:bg-blue-500 text-sm">
    Contact Us
  </button>
</a>
</div>

        {/* Right Image */}
        <div className="bg-gray-300 p-4 rounded-xl w-full max-w-[100%] sm:max-w-[350px] mx-auto">
          <img
            src="/Images/img_3.png"
            alt="Developer"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </motion.div>
    </section>
  );
}
