import React from "react";
import { motion } from "framer-motion";

export default function Myexperience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#111827] py-16 px-6 sm:px-10"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-white font-mono text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-[#e4ae08]">Experiences</span>
        </h1>
        <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed">
          We offer a range of services including modern web development,
          result-driven digital marketing, and impactful outdoor advertising —
          all designed to help brands grow online and offline.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {[
          {
            date: "Jan 2017 - July 2021",
            title: "Outdoor Advertising",
            place: "Olabisi Onabanjo University",
          },
          {
            date: "Jan 2025 - Dec 2025",
            title: "Web Development",
            place: "Nupat Technologies",
          },
          {
            date: "Jan 2023 - June 2024",
            title: "Digital Marketing",
            place: "Mysogi Ads",
          },
        ].map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#020617] p-5 rounded-xl text-center w-full max-w-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="font-bold text-white text-sm sm:text-base mb-2">{exp.date}</h1>
            <h3 className="text-[#e4ae08] font-mono text-base sm:text-lg">{exp.title}</h3>
            <h4 className="text-white mb-3 text-sm">{exp.place}</h4>
            <p className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed">
              I help brands grow online through SEO, social media strategy, and
              content-driven campaigns.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
