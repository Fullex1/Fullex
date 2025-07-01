import React from "react";
import Image from "next/image";
import styles from "./services.module.css";
import Card from "../card/page";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full mx-auto">
        {services.map((service, index) => (
          <Card
            key={service.id}
            image={service.image}
            title={service.name}
            description={service.description}
            width={130}
            height={130}
          />
          
        ))}
      </div>
    </div>
  );
}
