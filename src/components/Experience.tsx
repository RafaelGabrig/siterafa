'use client';

import { experiences } from '../data';
import { useInView } from 'react-intersection-observer';

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-white/90">// experience</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-accent/50" />
          
          <div ref={ref}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'
                } mb-16 transform transition-all duration-700 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div 
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-2 
                  ring-4 ring-accent/20"
                />
                
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg">
                  <div className="text-accent font-bold mb-3">{exp.period}</div>
                  <h3 className="text-xl font-bold mb-2 text-white/90">{exp.role}</h3>
                  {exp.id === '1' ? (
                    <h4 className="text-gray-400 mb-4">
                      <a 
                        href="https://criaweb.es" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Criaweb.es
                      </a>
                      {' - Portugal / Espanha'}
                    </h4>
                  ) : (
                    <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                  )}
                  <ul className="space-y-3 text-gray-400">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-accent mr-3">→</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 