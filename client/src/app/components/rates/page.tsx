'use client'
import Image from "next/image";
import styles from "./rates.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'


type Rates = {
  _id: string;
  userName: string;
  description: string;
  stars: number;
};

export default function Rates() {
    const [ratesData, setRatesData] = useState<Rates[]>([]);

    useEffect(() => {
        getRatesData()
    })

    const getRatesData = async() => {
      const data  = await fetch('http://localhost:3000/rates')

      if(!data.ok || !data){
          console.log('Error');
          return ;
      }
      const ratesData = await data.json()
      setRatesData(ratesData)

    }


    return (
        <div className="flex flex-col text-center justify-center mt-10">
            <div className="text-center mb-16">
                <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Trusted by those we’ve worked with
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {ratesData && ratesData.length > 0 ? (
                    ratesData.map((rate) => (
                        <div
                            key={rate._id}
                            className="mx-10 w-full sm:w-[70%] md:w-[45%] lg:w-[30%] bg-[#021122] rounded-xl shadow-lg p-6 mb-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-white">{rate.userName}</h3>
                            <p className="text-gray-300 mb-4">{rate.description}</p>
                            <div className="w-full flex justify-center">
                                <Rating style={{ maxWidth: 180, width: "100%" }} readOnly value={rate.stars} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400">No reviews yet.</div>
                )}
            </div>
        </div>
    );
}
