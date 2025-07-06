import React from "react";
import Image from "next/image";
import styles from "./howWeWork.module.css";
import { CodeXml, Lightbulb, MousePointerClick, Rocket } from "lucide-react";
import AnimateIn from "@/app/AnimateIn";

export default function HowWeWork() {


  return (
    <AnimateIn className="w-full flex justify-center items-center mt-20 mb-20 flex-col ">
      <div className="text-center mb-16 px-10">
        <div className={`${styles.card} bg-[#021327] p-5 rounded-xl `}>
          <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r">
            A Small Team. A Big Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Fullex, we believe a website is more than just code or design — it's your identity. We treat every project like our own — no templates, no shortcuts, no copy-paste.
          </p>
        </div>
        <h2 className="text-[40px] font-bold mt-8">
          How We Work
        </h2>
        <div className="w-full mt-5 flex flex-col gap-5">
          <AnimateIn className="flex gap-10 text-center">
            <AnimateIn className="flex items-center justify-center h-20 w-20 mx-auto sm:h-auto sm:w-auto sm:mx-0 bg-[#021327] rounded-full p-4">
              <Lightbulb size={70} />
            </AnimateIn>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">Brain Storm</h2>
              <p className="text-[#999] text-[18px]">
                We start by understanding your vision and goals, brainstorming ideas to shape the project's direction.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn className="flex gap-10 text-center">
            <AnimateIn className="flex items-center justify-center h-20 w-20 mx-auto sm:h-auto sm:w-auto sm:mx-0 bg-[#021327] rounded-full p-4">
              <MousePointerClick size={70} />
            </AnimateIn>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">Prototype</h2>
              <p className="text-[#999]">
                We create interactive prototypes to visualize the user experience and refine the design based on feedback.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn className="flex gap-10 text-center">
            <AnimateIn className="flex items-center justify-center h-20 w-20 mx-auto sm:h-auto sm:w-auto sm:mx-0 bg-[#021327] rounded-full p-4">
              <CodeXml size={70} />
            </AnimateIn>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">Code</h2>
              <p className="text-[#999]">
              Our skilled developers bring the prototype to life, writing clean, efficient code to build the application.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn className="flex gap-10 text-center">
            <AnimateIn className="flex items-center justify-center h-20 w-20 mx-auto sm:h-auto sm:w-auto sm:mx-0 bg-[#021327] rounded-full p-4">
              <Rocket size={70} />
            </AnimateIn>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">QA &amp; Polish</h2>
              <p className="text-[#999]">
              testing and quality assurance ensure a polished and bug-free product ready for launch.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </AnimateIn>
  );
}
