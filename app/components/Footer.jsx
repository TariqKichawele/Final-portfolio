import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 px-4 sm:px-6'>
      <div className='text-center'>
        <div className='text-3xl sm:text-4xl lg:text-5xl font-bold mx-auto mb-2'>
            <span style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Tariq</span><span style={{ color: '#ef4444' }}>.</span>
        </div>

        <div className='w-max flex items-center gap-2 mx-auto text-sm sm:text-base'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5 sm:w-6'/>
            <span className='break-all'>tariqkichawele@gmail.com</span>
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[5%] lg:mx-[10%] mt-12 py-6'>
        <p className='text-xs sm:text-sm lg:text-base'>© 2025 Tariq Kichawele. All rights reserved.</p>
        <ul className='flex items-center gap-6 sm:gap-8 lg:gap-10 justify-center mt-4 sm:mt-0 text-xs sm:text-sm lg:text-base'>
            <li><a target='_blank' href="https://github.com" className='hover:underline'>GitHub</a></li>
            <li><a target='_blank' href="https://linkedin.com" className='hover:underline'>LinkedIn</a></li>
            <li><a target='_blank' href="https://twitter.com" className='hover:underline'>Twitter</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
