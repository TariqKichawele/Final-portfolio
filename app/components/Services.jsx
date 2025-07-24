import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { Globe, Smartphone, Palette, Brush, ArrowRight } from 'lucide-react'

const Services = () => {
  const serviceData = [
    { icon: Globe, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: Smartphone, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: Palette, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: Brush, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
  ];

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
            {serviceData.map(({icon: IconComponent, title, description, link}, index)=>(
                <motion.div 
                    whileHover={{scale: 1.05}}
                    key={index}
                    className='group border border-gray-400 rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white dark:border-white/50 min-w-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] flex-shrink-0'
                >
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4'>
                        <IconComponent className='w-5 h-5 sm:w-6 sm:h-6 text-white'/>
                    </div>
                    <h3 className='text-base sm:text-lg my-3 sm:my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-xs sm:text-sm text-gray-600 leading-5 dark:text-white'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-xs sm:text-sm mt-4 sm:mt-5 text-gray-700 dark:text-white/90'>
                        Read more <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4'/>
                    </a>
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services
