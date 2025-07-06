import React, { useState } from "react";
import { animate } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 70; // adjust 70 for navbar height

    animate(startPosition, targetPosition, {
      duration: 1,
      ease: [0.68, -0.55, 0.27, 1.55], // Ease out bounce effect
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#020617] flex justify-between items-center px-6 py-4 relative">
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

      {/* Mobile Links */}
      {isOpen && (
        <ul className="absolute top-[70px] right-6 bg-[#020617] text-white flex flex-col gap-4 p-4 rounded-lg z-50">
          <li onClick={() => scrollToSection("home")} className="cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("service")} className="cursor-pointer">Service</li>
          <li onClick={() => scrollToSection("portfolio")} className="cursor-pointer">Portfolio</li>
          <li onClick={() => scrollToSection("experience")} className="cursor-pointer">Resume</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</li>
          <li onClick={() => scrollToSection("about")} className="cursor-pointer">About me</li>
        </ul>
      )}
    </nav>
  );
}
