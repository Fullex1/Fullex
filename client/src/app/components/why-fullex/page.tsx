import React from "react";
import Image from "next/image";
import styles from "./why-fullex.module.css";
import Card from "../card/page";
import AnimateIn from "@/app/AnimateIn";

const whyFullex = [
  {
    id: 1,
    image: "/whyfullex1.png",
    title: "A Real Step Toward Growth",
    description: "We help you build a professional website that gets your project market-ready and earns customer trust from the very first glance."
  },
  {
    id: 2,
    image: "/whyfullex2.png",
    title: "Power Your Digital Presence",
    description: "Your online identity matters. Fullex gives you a site that looks amazing and performs better—helping you convert, grow, and elevate your digital presence."
  },
  {
    id: 3,
    image: "/whyfullex3.png",
    title: "Power Your Digital Presence",
    description: "Fullex builds more than websites — we build launchpads. With smart design, fast performance, and built-in SEO, your audience finds you and trusts you."
  },
  {
    id: 4,
    image: "/whyfullex2.png",
    title: "Scale With Confidence",
    description: "We stay with you after launch — offering support, monitoring, and upgrades to keep your site secure, scalable, and aligned with your long-term goals."
  }
];

export default function WhyFullex() {

  return (
    <AnimateIn className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center text-center flex-col ">
          <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
              Why Fullex?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover our complete range of services — and why Fullex stands out.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full mx-auto mt-10 px-2 sm:px-4 md:px-0">
              {whyFullex.map((item, index) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  width={220}
                  height={220}
                />
                
              ))}
            </div>
         
        </div>
    </AnimateIn>
  );
}
