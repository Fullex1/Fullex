import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ScanEye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1627] pt-14 pb-6 px-4 mt-20 text-white w-full border-t border-[#1a2940]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Left: Logo and description */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <div className="flex justify-items-start text-start">
            <Image src="/logo.png" alt="Fullex Logo" width={200} height={200} />
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
            Innovative digital solutions crafted to bring your ideas to life. From web design to marketing, we deliver quality and creativity.
          </p>
          <Link href="#contact" className="mt-2 btn-gradient flex gap-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Talk to Us
          </Link>
        </div>
        {/* Links and Social icons: left-aligned vertical block */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex flex-row gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-300">Company</h4>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li><Link href="#home" className="hover:text-blue-400 transition">Home</Link></li>
                <li><Link href="#services" className="hover:text-blue-400 transition">Services</Link></li>
                <li><Link href="#why-fullex" className="hover:text-blue-400 transition">Why Fullex</Link></li>
                <li><Link href="#about" className="hover:text-blue-400 transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-300">Explore</h4>
              <ul className="flex flex-col gap-2 text-gray-300">
                <li><Link href="#how-we-work" className="hover:text-blue-400 transition">Our Process</Link></li>
                <li><Link href="#portfolio" className="hover:text-blue-400 transition">Portfolio</Link></li>
                <li><Link href="#plans" className="hover:text-blue-400 transition">Plans</Link></li>
                <li><Link href="#rates" className="hover:text-blue-400 transition">Rates</Link></li>
              </ul>
            </div>
          </div>
          {/* Social icons below links, left-aligned */}
          <div className="bg-[#101e36] rounded-full px-6 py-3 flex gap-4 shadow-md mt-4 w-fit">
            <Link href="#" aria-label="Facebook" className="hover:scale-110 transition"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link href="#" aria-label="Instagram" className="hover:scale-110 transition"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="#" aria-label="all" className="hover:scale-110 transition"><ScanEye /></Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#1a2940] pt-6 text-center text-gray-500 text-sm">
        Fullex © 2026 &nbsp; All rights reserved
      </div>
    </footer>
  );
}
