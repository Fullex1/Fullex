import React from "react";
import Image from "next/image";
import styles from "./howWeWork.module.css";
import { Lightbulb, MousePointerClick } from "lucide-react";

export default function HowWeWork() {


  return (
    <div className="w-full flex justify-center items-center mt-20 mb-20 flex-col ">
      <div className="text-center mb-16">
        <div className="bg-[#021327] p-5 rounded-xl">
          <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
            A Small Team. A Big Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Fullex, we believe a website is more than just code or design — it’s your identity. We treat every project like our own — no templates, no shortcuts, no copy-paste.
          </p>
        </div>
        <h2 className="text-[40px] font-bold mt-8">
          How We Work
        </h2>
        <div className="w-full mt-5 flex flex-col gap-5">
          <div className="flex gap-10 text-center">
            <div className="bg-[#021327] p-3 rounded-md">
              <Lightbulb  size={70} />
            </div>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">Brain Storm</h2>
              <p className="text-[#999] text-[18px]">
                We start by understanding your vision and goals, brainstorming ideas to shape the project's direction.
              </p>
            </div>
          </div>
          <div className="flex gap-10 text-center">
            <div className="bg-[#021327] p-3 rounded-md">
              <MousePointerClick   size={70} />
            </div>
            <div className="flex flex-col text-start">
              <h2 className="text-[35px]">Prototype</h2>
              <p className="text-[#999]">
                We create interactive prototypes to visualize the user experience and refine the design based on feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
