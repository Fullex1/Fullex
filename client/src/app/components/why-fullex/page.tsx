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
          <div className="flex justify-center text-center gap-8  mt-10 w-full">
              {whyFullex.map((item, index) => (
                  <div
                      key={item.id}
                      className={`${styles.serviceCard} group flex justify-center`}
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
          <div
            className={`${styles.bigCard} relative bg-[#021327] rounded-2xl mt-12 p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col md:flex-row items-center mx-auto group `}
          >
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-12">
              <h2 className="text-4xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                Start Strong. Go Far
              </h2>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Fullex doesn't just build you a website — we build your launchpad. Thoughtful design, blazing performance, and SEO built-in, so when people search for what you offer, they find you… and trust you enough to buy.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[350px]">
              <Image
                src="/whyfullex3.png"
                alt="whyfullex"
                width={300}
                height={300}
                className="transition-all duration-300"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
    </div>
  );
}
