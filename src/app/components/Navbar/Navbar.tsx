"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Navbar: React.FC = () => {
    const [navbarBg, setNavbarBg] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav
        className={`fixed top-0 w-full h-20 z-50 transition-colors duration-300 ease-in-out ${
          navbarBg ? 'bg-white bg-opacity-30 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 mt-2">
            {/* Logo dinámico */}
            <div>
              <a href="#">
                {navbarBg ? (
                  <Image src="/logo-black.png" alt="Logo_nucleo_dark" width={150} height={50} />
                ) : (
                  <Image src="/logo-blanc.png" alt="Logo_nucleo" width={150} height={50} />
                )}
              </a>
            </div>
            
            {/* Enlaces de navegación */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className={`text-lg hidden sm:block transition-colors duration-300 ${
                  navbarBg ? 'text-black' : 'text-white'
                } hover:text-primaryLila `}
              >
                Planes
              </a>
              <a
                href="#"
                className={`border px-4 py-2 rounded-md transition-colors duration-300 flex ${
                  navbarBg ? 'border-black text-black hover:text-white' : 'border-white text-white hover:text-white'
                } hover:bg-primaryLila hover:text-white`}
              >
                Conversemos 
                <Image
                src={navbarBg ? "/arrow-dark.svg" : "/arrow.svg"} 
                alt="arrow_icon" 
                width={10} 
                height={10} 
                className="ml-4 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
