'use client'
import Image from "next/image";
import styles from "./faq.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'
import { ChevronDown, ChevronUp } from "lucide-react";

type Faq = {
  _id: string;
  question: string;
  answer: string;
};

export default function FaqPage() {
  const [faq, setFaq] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  useEffect(() => {
    
    getFaqData();
  }, []);

  const getFaqData = async () => {
    const res = await fetch('http://localhost:3000/faq');
    if (!res.ok) {
      setFaq([]);
      return;
    }
    const data = await res.json();
    setFaq(data);
  };

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };


    return (
        <div className="flex flex-col text-center justify-center mt-10">
            <div className="text-center mb-16">
                <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
                    FAQ
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Find answers to common questions about our services and processes
                </p>
            </div>
            <div className=" flex flex-col items-center space-y-4 w-[90%] mx-auto px-4">
            {faq.map((faq, index) => (
                <div 
                    key={index} 
                    className=" w-full bg-gradient-to-r from-[#021327] to-[#03233A] border border-gray-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-600/70 overflow-hidden"
                >
                <button
                    onClick={() => toggle(index)}
                    className="cursor-pointer w-full flex justify-between items-center text-left text-white font-semibold text-lg px-6 py-5 hover:bg-gray-800/20 transition-colors duration-200"
                >
                    <span className="text-left pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                        {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-400 transition-transform duration-300" />
                        ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                        )}
                    </div>
                </button>
                {openIndex === index && (
                    <div className="px-6 pb-5 border-t border-gray-700/50 flex">
                        <p className="text-gray-300 mt-4 text-base leading-relaxed">{faq.answer}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
    );
}
