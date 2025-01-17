'use client';

import { projects } from '../data';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

export const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="work" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-white/90">// selected work</h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group project-card bg-black/50 backdrop-blur-sm border border-zinc-800 rounded-lg overflow-hidden transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Link 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative h-56 overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Ver projeto →</span>
                </div>
              </Link>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white/90">
                  <Link 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 