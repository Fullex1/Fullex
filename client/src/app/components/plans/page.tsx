'use client'
import Image from "next/image";
import styles from "./rates.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'


type Plans = {
  _id: string;
  name: string;
  price: string;
  goal: string;
  features: string;
  addtions: string;
};

export default function Plans() {
    const [plansData, setPlansData] = useState<Plans[]>([]);

    useEffect(() => {
        getPlansData()
    })

    const getPlansData = async() => {
      const data  = await fetch('http://localhost:3000/rates')

      if(!data.ok || !data){
          console.log('Error');
          return ;
      }
      const plansData = await data.json()
      setPlansData(plansData)

    }


    return (
        <div className="flex flex-col text-center justify-center mt-10">
            <div className="text-center mb-16">
                <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
                    Plans
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Flexible plans tailored to grow with your business
                </p>
            </div>

        </div>
    );
}
