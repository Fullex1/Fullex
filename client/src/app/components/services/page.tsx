import React from "react";
import Image from "next/image";
import styles from "./services.module.css";

type servicesType = {
  id : number;
  image : string;
  name : string;
  description : string;
}

export default function Services() {
  const services : servicesType[] = [
    {
      id:1,
      name: "Website Development",
      image: "/web dev.png",
      description: "We build your website from scratch with speed, performance, and smooth functionality"
    },
    {
      id: 2,
      name: "UI/UX Design",
      image: "/ui-ux.png",
      description: "We create attractive, user-friendly interfaces that make browsing easy and enjoyable"
    },
    {
      id:3,
      image: "/testing.png",
      name: "Website & App Testing",
      description: "We test your site on all devices and browsers to ensure smooth performance and flawless functionality"
    },
    {
      id:4,
      image: "/enhancement.png",
      name: "Project Enhancement",
      description: "We upgrade your existing project by adding features and boosting performance—no need to start over."
    }
  ]

  return (
    <div className="w-full flex justify-center items-center mt-20 mb-20 flex-col px-4">
      <div className="text-center mb-16">
        <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
          What We Offer
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Scalable, elegant websites by a full-stack design & development team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`${styles.serviceCard} group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative bg-[#021327] rounded-2xl p-8 h-full border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Icon section */}
              <div className="flex justify-center mb-8">
                <div className={`${styles.iconWrapper} relative`}>
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    width={80} 
                    height={80}
                    className={`${styles.serviceIcon} transition-all duration-300`}
                  />
                  <div className={`${styles.iconGlow} absolute inset-0 rounded-full`}></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
