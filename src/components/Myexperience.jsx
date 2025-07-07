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
         I began at OOU, creating outdoor ad campaigns that boosted local brand visibility. At Mysogi Ads, I honed SEO, social media, and content marketing to drive engagement. recently, At Nupat Technologies, I collaborated with teams and clients to build responsive web applications delivering smooth digital experiences..
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {[
          {
            date: "Jan 2017 - July 2021",
            title: "Outdoor Advertising",
            place: "Olabisi Onabanjo University",
            description:
              "At Olabisi Onabanjo University, I teamed up with students to design and roll out outdoor ad campaigns across campus, boosting local brand visibility and fostering stronger community engagement.",
          },
          {
            date: "Jan 2025 - Dec 2025",
            title: "Web Development",
            place: "Nupat Technologies",
            description:
              "Worked as a frontend developer building scalable web apps using React, Tailwind CSS, and Node.js. Contributed to UI/UX improvements and collaborated on team-based agile projects.",
          },
          {
            date: "Jan 2023 - June 2024",
            title: "Digital Marketing",
            place: "Mysogi Ads",
            description:
              "Developed and executed digital marketing strategies across social media and Google Ads, improving client engagement rates and increasing conversion by 25%.",
          },
        ].map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#020617] p-5 rounded-xl text-center w-full max-w-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="font-bold text-white text-sm sm:text-base mb-2">
              {exp.date}
            </h1>
            <h3 className="text-[#e4ae08] font-mono text-base sm:text-lg">
              {exp.title}
            </h3>
            <h4 className="text-white mb-3 text-sm">{exp.place}</h4>
            <p className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
