import React, { useState, useEffect } from "react";
import { animate } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 70;

    animate(startPosition, targetPosition, {
      duration: 1,
      ease: [0.68, -0.55, 0.27, 1.55],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-transparent`}
      >
        <h1 className="text-white text-[30px] md:text-[45px] font-mono">
          Ayo<span className="text-[#e4ae08]">Forge</span>.
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex text-white gap-5 mr-20">
          <li onClick={() => scrollToSection("home")} className="hover:text-[#e4ae08] cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("service")} className="hover:text-[#e4ae08] cursor-pointer">Service</li>
          <li onClick={() => scrollToSection("portfolio")} className="hover:text-[#e4ae08] cursor-pointer">Portfolio</li>
          <li onClick={() => scrollToSection("experience")} className="hover:text-[#e4ae08] cursor-pointer">Resume</li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-[#e4ae08] cursor-pointer">Contact</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-[#e4ae08] cursor-pointer">About me</li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#020617]/50 backdrop-blur-sm flex flex-col justify-center items-center gap-8 z-40">
  <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setIsOpen(false)}>
    &times;
  </button>

  <button onClick={() => scrollToSection("home")} className="text-white text-xl">Home</button>
  <button onClick={() => scrollToSection("service")} className="text-white text-xl">Service</button>
  <button onClick={() => scrollToSection("portfolio")} className="text-white text-xl">Portfolio</button>
  <button onClick={() => scrollToSection("experience")} className="text-white text-xl">Resume</button>
  <button onClick={() => scrollToSection("contact")} className="text-white text-xl">Contact</button>
  <button onClick={() => scrollToSection("about")} className="text-white text-xl">About me</button>
</div>

      )}
    </>
  );
}
