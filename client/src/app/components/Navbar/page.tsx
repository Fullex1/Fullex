import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 bg-background shadow-md">
      {/* Left Section */}
      <div className="flex flex-row gap-x-6 items-center">
        <Link href="/language" className="text-lg font-medium nav-underline">Language</Link>
        <Link href="/home" className="text-lg font-medium nav-underline">Home</Link>
        <Link href="/services" className="text-lg font-medium nav-underline">Services</Link>
        <Link href="/why-fullex" className="text-lg font-medium nav-underline">Why Fullex</Link>
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex justify-center items-center">
        <Image src="/Logo.png" alt="Fullex Logo" width={84} height={28} priority />
      </div>

      {/* Right Section */}
      <div className="flex flex-row gap-x-6 items-center">
        <Link href="/portfolio" className="text-lg font-medium nav-underline">Portfolio</Link>
        <Link href="/rates" className="text-lg font-medium nav-underline">Rates</Link>
        <Link href="/plans" className="text-lg font-medium nav-underline">Plans</Link>
        <Link href="/contact" className="btn-outline px-4 py-2 rounded-lg font-semibold ">Talk to us</Link>
      </div>
    </nav>
  );
}
