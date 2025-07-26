import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
        {/* Light mode header background */}
        <div className='fixed top-0 right-0 w-full max-w-[90%] -z-10 translate-y-[-80%] dark:hidden overflow-hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-full object-cover' />
        </div>
        
        {/* Dark mode header background */}
        <div className='fixed top-0 left-0 w-full h-screen -z-10 bg-darkTheme hidden dark:block'></div>

        <nav className={`w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/95 dark:shadow-white/20" : ""}`}>
            <a href="#top" className='flex-shrink-0'>
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold cursor-pointer mr-4 sm:mr-8 lg:mr-14'>
                    <span style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Tariq</span><span style={{ color: '#ef4444' }}>.</span>
                </div>
            </a>

            <ul className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-6 lg:px-8 xl:px-12 py-3 ${isScroll ? "backdrop-blur-sm dark:bg-darkTheme/90 dark:border-2 dark:border-white/40 dark:shadow-white" : "bg-white/50 shadow-sm dark:bg-darkTheme dark:border-2 dark:border-white/60 dark:shadow-white"} `}>
                <li><a className='font-Ovo text-sm lg:text-base whitespace-nowrap' href="#top">Home</a></li>
                <li><a className='font-Ovo text-sm lg:text-base whitespace-nowrap' href="#about">About me</a></li>
                <li><a className='font-Ovo text-sm lg:text-base whitespace-nowrap' href="#services">Services</a></li>
                <li><a className='font-Ovo text-sm lg:text-base whitespace-nowrap' href="#work">My Work</a></li>
                <li><a className='font-Ovo text-sm lg:text-base whitespace-nowrap' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-2 sm:gap-4 flex-shrink-0'>

                <button onClick={()=> setIsDarkMode(prev => !prev)} className='flex-shrink-0'>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-5 sm:w-6' />
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-2 lg:gap-3 px-6 lg:px-8 xl:px-10 py-2.5 border-2 border-gray-500 rounded-full ml-2 lg:ml-4 font-Ovo dark:border-white/60 dark:bg-darkTheme dark:shadow-white text-sm lg:text-base whitespace-nowrap'>
                    Contact 
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                </a>

                <button className='block md:hidden ml-2 sm:ml-3 flex-shrink-0' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-5 sm:w-6' />
                </button>
            </div>

            {/* -- ----- mobile menu ------  -- */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-8 sm:px-10 fixed -right-64 top-0 bottom-0 w-64 max-w-[80vw] z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white overflow-y-auto'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Ovo text-sm sm:text-base block py-2' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo text-sm sm:text-base block py-2' onClick={closeMenu} href="#about">About me</a></li>
                <li><a className='font-Ovo text-sm sm:text-base block py-2' onClick={closeMenu} href="#services">Services</a></li>
                <li><a className='font-Ovo text-sm sm:text-base block py-2' onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className='font-Ovo text-sm sm:text-base block py-2' onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>


        </nav>
    </>
  )
}

export default Navbar
