'use client'
import Image from "next/image";
import styles from "./plans.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'
import { CircleCheckBig, CirclePlus, Goal, Plus } from "lucide-react";



type Plans = {
  _id: string;
  name: string;
  price: string;
  goal: string;
  features: string[];
  additions: string[];
};

export default function Plans() {
    const [plans, setPlans] = useState<Plans[]>([]);

    useEffect(() => {
        getPlansData()
    }, [])

    const getPlansData = async() => {
      const data  = await fetch('http://localhost:3000/pricing')

      if(!data.ok || !data){
          console.log('Error');
          return ;
      }
      const plansData = await data.json()
      console.log(plansData); 
      setPlans(plansData)
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan: Plans) => (
                <div
                key={plan._id}
                className="mx-10 bg-[#021327] cursor-pointer rounded-xl shadow-lg p-6 flex flex-col justify-start items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn"
                >
                <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
                <h2 className="text-2xl font-semibold mb-2">${plan.price}</h2>
                <div>
                    <h2 className="text-base mb-4 flex justify-start gap-0.5"><Goal color="#3300CC"/>Goal:</h2>
                    <h2 className="text-base text-gray-400 mb-4">{plan.goal}</h2>
                </div>
                <hr className="w-full "/>
                <div className="my-4 w-full flex flex-col justify-start items-start gap-5">
                    {Array.isArray(plan.features) &&
                        plan.features.map((feature) => (
                            <div key={feature} className="flex flex-col justify-start items-start gap-5">
                                <p  className="flex justify-center items-center text-sm text-gray-200 gap-0.5">
                                    <CircleCheckBig color="#3300CC" size={20}/>{feature}
                                </p>
                            </div>
                        )
                    )}
                </div>
                <hr className="w-full "/>
                <div className="my-4 w-full flex flex-col justify-start items-start gap-3">
                    {Array.isArray(plan.additions) &&
                        plan.additions.map((addtion) => (
                            <div key={addtion} className="flex flex-col justify-start items-start gap-5">
                                <p  className="flex justify-center items-center text-sm text-gray-200 gap-0.5">
                                    <Plus color="#3300CC"/>{addtion}
                                </p>
                            </div>

                        )
                    )}
                </div>
                <button className="btn-gradient w-full">Get Started</button>

                </div>
            ))}
            </div>
        </div>
    );
}
