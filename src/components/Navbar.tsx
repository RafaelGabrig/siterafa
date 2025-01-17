'use client';

import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.clientHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-center">
          {/* Nome animado */}
          <div
            className={`absolute left-0 transition-all duration-500 ${
              scrolled
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
          >
            <span className="text-accent font-bold">
              {personalInfo.name}
            </span>
          </div>

          {/* Menu para Mobile */}
          <div className="lg:hidden absolute right-0">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Links de Navegação - Sempre centralizados */}
          <ul className={`${
            isMenuOpen 
              ? 'absolute top-full left-0 w-full bg-black p-6 flex flex-col items-center space-y-4' 
              : 'hidden'
            } lg:flex lg:items-center lg:space-x-8 lg:p-0 lg:bg-transparent lg:static lg:w-auto lg:space-y-0 lg:flex`}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-white hover:text-accent transition-colors ${
                    activeSection === href.replace('#', '') ? 'text-accent' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
