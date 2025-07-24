import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        id="services" className='w-full responsive-padding py-10 scroll-mt-20'
    >

        <motion.h4 
            initial={{ y: -20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-center mb-2 text-lg font-Ovo'
        >
            What I offer
       </motion.h4>

        <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'
        >
            My Services
        </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base px-4'
      >
        I am a fullstack web developer from Raleigh, NC with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className='flex flex-wrap justify-center gap-4 sm:gap-6 my-10 max-w-6xl mx-auto'
        >
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                    whileHover={{scale: 1.05}}
                    key={index}
                    className='group border border-gray-400 rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white dark:border-white/50 min-w-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] flex-shrink-0'
                >
                    <Image src={icon} alt='' className='w-8 sm:w-10'/>
                    <h3 className='text-base sm:text-lg my-3 sm:my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-xs sm:text-sm text-gray-600 leading-5 dark:text-white'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-xs sm:text-sm mt-4 sm:mt-5 text-gray-700 dark:text-white/90'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-3 sm:w-4 dark:text-white'/>
                    </a>
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services
