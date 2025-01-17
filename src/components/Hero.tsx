'use client';

import { personalInfo } from '../data';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { name, role } = personalInfo;

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e"
          alt="Night Sky"
          fill
          quality={100}
          priority
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-20 text-center px-6">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 text-white transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {name}
        </h1>
        <h5 
          className={`text-xl md:text-2xl text-gray-300 font-light transform transition-all duration-1000 delay-300 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {role}
        </h5>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}; 