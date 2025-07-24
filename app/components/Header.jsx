import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <div className='w-full max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8'>
        <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img_2} alt='' className='rounded-full w-24 sm:w-28 md:w-32'/>
        </motion.div>
        <motion.h3 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className='flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo'
        >
            Hi! I'm Tariq Kichawele <Image src={assets.hand_icon} alt='' className='w-5 sm:w-6'/>
        </motion.h3>
        <motion.h1 
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            className='text-responsive-xl font-Ovo leading-tight px-2'
        >
            fullstack web developer based in Raleigh, NC.
        </motion.h1>

        <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className='max-w-2xl mx-auto font-Ovo text-sm sm:text-base px-4'
        >
            I am a fullstack web developer from Raleigh, NC with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 w-full max-w-md'>
                <motion.a 
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1}}
                    href="#contact"
                    className='px-6 sm:px-8 md:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent text-sm sm:text-base w-full sm:w-auto justify-center'
                >
                    contact me 
                    <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                </motion.a>

                <motion.a 
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                    href="/sample-resume.pdf" download 
                    className='px-6 sm:px-8 md:px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black dark:bg-darkTheme dark:text-white dark:border-white/50 text-sm sm:text-base w-full sm:w-auto justify-center'
                >
                    my resume <Download className='w-4 h-4 dark:text-white'/>
                </motion.a>
        </div>
    </div>
  )
}

export default Header
