'use client';

import { navLinks, personalInfo, socialLinks } from '../data';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return <FaGithub size={24} />;
    case 'linkedin':
      return <FaLinkedin size={24} />;
    case 'instagram':
      return <FaInstagram size={24} />;
    default:
      return null;
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-black text-white border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white/90">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Software Engineer focado em criar experiências digitais excepcionais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Links Rápidos</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-accent transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">{personalInfo.location}</li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-accent transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-accent transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>© {currentYear} {personalInfo.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}; 