import React from "react";
import Image from "next/image";
import styles from "./why-fullex.module.css";
import Card from "../card/page";

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
    description: "Your online identity matters. With Fullex, we give you a website that not only looks amazing but works harder for your business. Optimize, convert, and elevate your presence to the next level."
  },
  {
    id: 3,
    image: "/whyfullex3.png",
    title: "Power Your Digital Presence",
    description: "Your online identity matters. With Fullex, we give you a website that not only looks amazing but works harder for your business. Optimize, convert, and elevate your presence to the next level."
  },
  {
    id: 4,
    image: "/whyfullex2.png",
    title: "Scale With Confidence",
    description: "Your growth doesn't stop at launch. With Fullex, we stay by your side — offering continuous support, performance tracking, and upgrades that keep your website sharp, secure, and scalable. Maintain momentum, adapt fast, and lead with confidence."
  }
];

export default function WhyFullex() {

  return (
    <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center text-center flex-col">
          <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
              Why Fullex?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover our complete range of services — and why Fullex stands out.</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center text-center gap-8 mt-10 w-full px-4">
              {whyFullex.map((item, index) => (
                  <div
                      key={item.id}
                      className={`${styles.serviceCard} group flex justify-center ${styles.cardMobileSmall}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        width={180}
                        height={180}
                    />
                  </div>
              ))}
          </div>
         
        </div>
    </div>
  );
}
