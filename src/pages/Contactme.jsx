import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contactme() {
  return (
    <div className="bg-[#020617] px-6 py-10">
      {/* Contact Header */}
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-white font-mono text-3xl md:text-4xl font-bold mb-5">
          Contact <span className="text-[#e4ae08]">Me</span>
        </h1>
        <h2 className="text-gray-400 font-mono text-sm md:text-base mb-10 max-w-2xl">
          We offer a range of services including modern web development,
          result-driven digital marketing, and impactful outdoor advertising — all designed to help brands grow online and offline.
        </h2>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-white w-full md:w-1/2">
            <h1 className="text-[#e4ae08]">
              Address -{" "}
              <span className="text-gray-400 font-mono">
                Infinity Estate, Ajah, Lagos state
              </span>
            </h1>
            <h2 className="text-[#e4ae08]">
              Phone - <span className="text-gray-400">+2349067964045</span>
            </h2>
            <h3 className="text-[#e4ae08]">
              Email - <span className="text-gray-400">Toheebadekunle22@gmail.com</span>
            </h3>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#1f2937] w-full p-3 text-white rounded"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="bg-[#1f2937] w-full p-3 text-white rounded"
            />
            <button className="bg-[#e4ae08] text-black font-semibold px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <h1 className="text-[60px] text-white text-center mt-16 mb-10">-</h1>

      {/* About Me & Socials */}
      <div className="text-center px-4">
        <h1 className="text-white font-mono text-3xl md:text-4xl font-bold">AboutMe.</h1>
        <h2 className="text-gray-400 font-mono text-sm md:text-base pt-2 mb-8">
          We offer a range of services including modern web development.
        </h2>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 pb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: <FaTwitter />, url: "https://x.com/de_unstoppable7?s=21&t=99V1Kil_i4IdTzoY9rws5A" },
            { icon: <FaTiktok />, url: "https://www.tiktok.com/@unstoppableoo7?_t=ZM-8xPmtmVVmR3&_r=1" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/d___unstoppable" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/toheeb-adekunle-474863333" },
          ].map(({ icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1f2937] hover:text-[#e4ae08] text-3xl transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
