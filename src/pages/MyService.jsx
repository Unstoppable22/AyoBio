import React from "react";
import { motion } from "framer-motion";

export default function MyService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#111827] py-16 px-6 sm:px-10"
    >
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-white font-mono text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-[#e4ae08]">Service</span>
        </h1>
        <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed">
          We offer a range of services including modern web development,
          result-driven digital marketing, and impactful outdoor advertising — all designed to help brands grow online and offline.
        </p>
      </div>

      {/* Services */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {[ // Service Card Data
          {
            title: "Digital Marketing",
            description: "I help brands grow online through SEO, social media strategy, and content-driven campaigns.",
            icon: (
              <svg className="w-6 h-6 text-[#e4ae08]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835Z" clipRule="evenodd" />
                <path d="M6 4a10 10 0 1 0 12 16V18.4A3.4 3.4 0 0 0 15 15h-.218a2.575 2.575 0 0 0-.75.112 8.027 8.027 0 0 1-6.932-11.512Z" />
              </svg>
            )
          },
          {
            title: "Web Development",
            description: "I design and develop modern, responsive, and high-performing web applications.",
            icon: (
              <svg className="w-6 h-6 text-[#e4ae08]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1" />
              </svg>
            )
          },
          {
            title: "Outdoor Advertising",
            description: "We craft impactful billboards and on-ground campaigns to reach your audience where they live and work.",
            icon: (
              <svg className="w-6 h-6 text-[#e4ae08]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z" clipRule="evenodd" />
              </svg>
            )
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#020617] w-full max-w-[280px] p-5 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-center font-bold text-white mb-2">{service.title}</h2>
            <p className="text-center text-gray-400 font-mono text-xs">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
