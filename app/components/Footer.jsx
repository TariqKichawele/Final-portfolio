import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 px-4 sm:px-6'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 sm:w-32 lg:w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto text-sm sm:text-base'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5 sm:w-6'/>
            <span className='break-all'>greatstackdev@gmail.com</span>
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[5%] lg:mx-[10%] mt-12 py-6'>
        <p className='text-xs sm:text-sm lg:text-base'>© 2025 GreatStack. All rights reserved.</p>
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
