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
        navbarBg
          ? 'bg-white bg-opacity-30 backdrop-blur-lg'
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 mt-2">
          <div>
            <a href="#">
              <Image src="/logo-blanc.png" alt="Logo_nucleo" width={150} height={50} />
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white text-lg hidden sm:block hover:text-primaryLila">
              Planes
            </a>
            <a
              href="#"
              className="border border-white text-white px-4 py-2  hover:bg-primaryLila  transition duration-300">
              Conversemos <span className="inline-block transform rotate-45 ">↑</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;
