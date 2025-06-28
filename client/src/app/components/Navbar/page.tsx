"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-background shadow-md relative">
      {/* Desktop Navbar */}
      <div className="hidden lg:block bg-background shadow-md">
        <div className="flex items-center justify-between px-4">
      {/* Left Section */}
          <div className="flex flex-row gap-x-6 items-center">
        <Link href="/language" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Language</Link>
        <Link href="/home" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Home</Link>
        <Link href="/services" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Services</Link>
        <Link href="/why-fullex" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Why Fullex</Link>
      </div>

      {/* Center Logo */}
          <div className={`flex justify-center items-center ${styles.logoBox}`}>
            <Image src="/logo.png" alt="Fullex Logo" width={150} height={50} priority />
      </div>

      {/* Right Section */}
          <div className="flex flex-row gap-x-6 items-center">
        <Link href="/portfolio" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Portfolio</Link>
        <Link href="/rates" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Rates</Link>
        <Link href="/plans" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Plans</Link>
            <Link href="/contact" className="btn-outline px-4 py-2 rounded-lg font-semibold">Talk to us</Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navbar */}
      <div className="lg:hidden relative">
        <div className="flex items-center justify-between px-4 py-2 bg-[#03233AD9] rounded-b-lg mx-4">
          {/* Mobile Menu Button */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="Fullex Logo" width={120} height={40} priority />
          </div>

          {/* Empty div for spacing */}
          <div className="w-8"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 mx-4 transition-all duration-300 ease-in-out overflow-hidden z-50 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#03233AD9] px-3 py-6 flex flex-col items-center justify-center min-h-[60vh] space-y-6 rounded-b-lg">
            <Link 
              href="/language" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Language
            </Link>
            <Link 
              href="/home" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/why-fullex" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Why Fullex
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/rates" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Rates
            </Link>
            <Link 
              href="/plans" 
              className={`text-[1.15rem] font-medium ${styles["nav-underline"]} text-center text-white`}
              onClick={closeMenu}
            >
              Plans
            </Link>
            <Link 
              href="/contact" 
              className="btn-outline px-6 py-3 rounded-lg font-semibold text-center"
              onClick={closeMenu}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
