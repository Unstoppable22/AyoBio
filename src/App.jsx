import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./pages/About";
import MyService from "./pages/MyService";
import MyPortfolio from "./pages/MyPortfolio";
import MyExperience from "./components/Myexperience";
import ContactMe from "./pages/Contactme";
import Loader from "./components/UI/loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#020617]">
      <Navbar />

      <section id="home">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero />
        </motion.div>
      </section>

      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.div>
      </section>

      <section id="service">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MyService />
        </motion.div>
      </section>

      <section id="portfolio">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MyPortfolio />
        </motion.div>
      </section>

      <section id="experience">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MyExperience />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactMe />
        </motion.div>
      </section>
    </div>
  );
}
