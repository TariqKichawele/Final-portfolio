import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { ExternalLink, Github, Calendar } from 'lucide-react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='work' className='w-full responsive-padding py-10 scroll-mt-20'
    >
        {/* Proof of Work Badge */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center mb-6'
        >
            <span className='bg-black text-white px-4 py-2 rounded-full text-sm font-medium dark:bg-white dark:text-black'>
                Proof of Work
            </span>
        </motion.div>

        <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-6'
        >
            Check out my latest work
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-sm sm:text-base px-4 text-gray-600 dark:text-gray-300'
        >
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'
        >
            {workData.map((project, index)=>(
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                    key={index}
                    className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700'
                >
                    {/* Project Image */}
                    <div className='relative h-64 sm:h-72 overflow-hidden'>
                        <Image 
                            src={project.bgImage} 
                            alt={project.title}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-500'
                        />
                    </div>

                    {/* Project Content */}
                    <div className='p-6'>
                        {/* Title and Status */}
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white font-Ovo'>
                                {project.title}
                            </h3>
                            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-green-900 dark:text-green-200'>
                                {project.status}
                            </span>
                        </div>

                        {/* Date */}
                        <div className='flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400'>
                            <Calendar className='w-4 h-4' />
                            <span>{project.date}</span>
                        </div>

                        {/* Description */}
                        <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-Ovo'>
                            {project.description}
                        </p>

                        {/* Technology Stack */}
                        <div className='mb-6'>
                            <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm font-medium'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-4'>
                            <a 
                                href={project.link} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                            >
                                <ExternalLink className='w-4 h-4' />
                                Website
                            </a>
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-black px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
                                >
                                    <Github className='w-4 h-4' />
                                    Source
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-6 sm:px-8 md:px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:!text-white dark:border-white dark:hover:bg-darkHover dark:hover:!text-black text-sm sm:text-base'
        >
            View All Projects
            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.a>
    </motion.div>
  )
}

export default Work
