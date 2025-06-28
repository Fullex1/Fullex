import React from 'react'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <div className={styles.container + ""}>
            <div className={styles.hero + ""} >
                <div className='flex justify-center items-center flex-col w-full h-full'>
                    <h2>Fullex</h2>
                    <p>Digital solutions that transform your ideas into tangible achievements with warmth and confidence</p>
                </div>
                
            </div>
        </div>
       
  )
}

