import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className={styles.container + ""} >
            <div className={styles.hero + ""} >
                <div className='flex justify-center items-center flex-col w-full h-full gap-4'>
                    <div className={`flex justify-center items-center`}>
                        <Image src="/logo.png" alt="Fullex Logo" width={350} height={100} priority />
                    </div>  
                    <div className='flex justify-center items-center flex-col w-full h-full gap-10'>
                        <div className='flex justify-center items-center flex-col'>
                            <p className="text-[10px] sm:text-[20px]">Digital solutions that transform your ideas into tangible</p>
                            <p className="text-[10px] sm:text-[20px]">achievements with warmth and confidence</p>
                        </div>                
                        <div className='flex justify-center items-center flex-row gap-10'>
                            <button className='btn-gradient'>Let&apos;s Talk</button>
                            <button className='btn-gradient'>Services</button>
                        </div>
                    </div>   
                    
                </div>
            </div>
        </div>
       
  )
}

