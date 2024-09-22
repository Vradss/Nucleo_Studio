import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OrbitingCirclesNucleo } from './orbiting' 

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black relative">
      <div className="space-y-4 md:space-y-8 max-w-[950px] z-10 px-8 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:leading-tight lg:text-[50px] text-white">
          <span className="font-bold">La diferenciación de tu empresa tech B2B</span> comienza en tu sitio web.
          <br />
          ¿La comunicas efectivamente?
        </h1>
        <p className="text-white text-lg md:text-xl">
          Te ayudamos a hacerlo definiendo el posicionamiento y messaging de tu
          empresa B2B o SaaS startup para que atraigas a tus clientes ideales.
        </p>
        <Link
          href="/meetings"
          className="border text-white text-lg md:text-xl px-4 py-2 transition-colors duration-300 inline-flex items-center">
          Conversemos 
          <Image
            src="/arrow.svg"
            alt="arrow_icon" 
            width={10} 
            height={10} 
            className="ml-4 hover:text-white"
          />
        </Link>
      </div>
      <div className="relative mt-8 md:mt-0 w-1/3 md:w-auto">
        <Image
          src="/isotipo_nucleo.svg"
          alt="hero_image" 
          width={400} 
          height={400}
          className="absolute -right-32 -bottom-24 md:hidden" // Móvil: imagen de fondo
        />
        <Image
          src="/isotipo_nucleo.svg"
          alt="hero_image" 
          width={500} 
          height={500}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;

