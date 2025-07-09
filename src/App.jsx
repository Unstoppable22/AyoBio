import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import MyService from "./pages/MyService";
import MyPortfolio from "./pages/Myportfolio";
import MyExperience from "./components/Myexperience";
import ContactMe from "./pages/Contactme";
import Loader from "./components/UI/loader";

const pageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0.3, duration: 0.8 },
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#020617] overflow-x-hidden max-w-full">
      <Navbar />

      <motion.section id="home" {...pageAnimation}>
        <Hero />
      </motion.section>

      <motion.section id="about" {...pageAnimation}>
        <About />
      </motion.section>

      <motion.section id="service" {...pageAnimation}>
        <MyService />
      </motion.section>

      <motion.section id="portfolio" {...pageAnimation}>
        <MyPortfolio />
      </motion.section>

      <motion.section id="experience" {...pageAnimation}>
        <MyExperience />
      </motion.section>

      <motion.section id="contact" {...pageAnimation}>
        <ContactMe />
      </motion.section>
    </div>
  );
}
