'use client';

import { expertiseCards } from '../data';
import { useInView } from 'react-intersection-observer';

export const Expertise = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="expertise" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-white/90">// expertise</h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCards.map((card) => (
            <div
              key={card.id}
              className={`expertise-card bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white/90">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 