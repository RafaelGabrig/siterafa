'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_spne9lc', //  Service ID do EmailJS
        'template_ad3iprn', // Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'rafagabrig@gmail.com',
        },
        'Dd_eE8-RohF7x-H7o' // ublic Key do EmailJS
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      console.error('Erro ao enviar email:', error);
    }
  };

  return (
    <section id="contact" className="py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-white/90">// let's connect</h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-black/30 border border-zinc-800 text-white 
                  placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Seu email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-black/30 border border-zinc-800 text-white 
                  placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Sua mensagem"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 rounded-lg bg-black/30 border border-zinc-800 text-white 
                  placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg 
                transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
            </button>

            {status === 'success' && (
              <p className="text-green-500">Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500">Erro ao enviar mensagem. Tente novamente.</p>
            )}
          </form>

          <div className="lg:pl-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white/90">Localização</h3>
                <p className="text-gray-400">{personalInfo.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white/90">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-accent">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white/90">Telefone</h3>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-accent">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 