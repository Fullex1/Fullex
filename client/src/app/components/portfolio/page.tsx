'use client'
import Image from "next/image";
import styles from "./portfolio.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import AnimateIn from "@/app/AnimateIn";


type Portfolio = {
  _id: string;
  title: string;
  description: string;
  images: string[]; // assuming images is an array
};

export default function Portfoilo() {
    const [portfolioData, setPortfolioData] = useState<Portfolio[]>([]);

    useEffect(() => {
      getPortfolioData()
    })

    const getPortfolioData = async() => {
      const data  = await fetch('http://localhost:3000/portfolio')

      if(!data.ok || !data){
          console.log('Error');
          return ;
      }
      const portfolioData = await data.json()
      setPortfolioData(portfolioData)

    }


    return (
        <AnimateIn className="flex flex-col text-center justify-center">
            <div className="text-center mb-16">
                <h2 className="text-[40px] font-bold mb-4 bg-gradient-to-r ">
                    Our Projects
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    A glimpse into what we&apos;ve built — creative, smart, and made to last
                </p>
            </div>

            <div className={`${styles.cardContainer}`}>
              {portfolioData && portfolioData.length > 0 ?
              // If The portfolioData is avaiable
                <div className="flex flex-wrap gap-10 justify-center items-center mx-5"> 
                  {portfolioData.map((portfolio) =>
                    (
                      <Link
                        key={portfolio._id}
                        href={`/portfolio/${portfolio._id}`}
                        className={`${styles.card} cursor-pointer bg-[#021122] rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fade-in`}
                      >
                        <div className={`${styles.cardImage}`}>
                          <Image
                            src={portfolio.images[0]}
                            alt={portfolio.title}
                            fill
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-center">{portfolio.title}</h2>
                        <p className="text-gray-300 text-center line-clamp-3">{portfolio.description}</p>
                      </Link>
                    )
                  )}
                </div> : 
                // If the portolioData is not avaiable
                <h1 className="text-bold mt-5">There is no available projects | Please refresh the page to get projects</h1> 
              }
            </div>
        </AnimateIn>
    );
}
