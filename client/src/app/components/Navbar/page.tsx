import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 bg-background shadow-md">
      {/* Left Section */}
      <div className="flex flex-row gap-x-6 items-center mt-2">
        <Link href="/language" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Language</Link>
        <Link href="/home" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Home</Link>
        <Link href="/services" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Services</Link>
        <Link href="/why-fullex" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Why Fullex</Link>
      </div>

      {/* Center Logo */}
      <div className={`top-0 flex justify-center items-center ${styles.logoBox}`}>
        <Image src="/Logo.png" alt="Fullex Logo" width={150} height={50} priority />
      </div>

      {/* Right Section */}
      <div className="flex flex-row gap-x-6 items-center mt-2">
        <Link href="/portfolio" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Portfolio</Link>
        <Link href="/rates" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Rates</Link>
        <Link href="/plans" className={`text-[1.15rem] font-medium ${styles["nav-underline"]}`}>Plans</Link>
        <Link href="/contact" className="btn-outline px-4 py-2 rounded-lg font-semibold ">Talk to us</Link>
      </div>
    </nav>
  );
}
