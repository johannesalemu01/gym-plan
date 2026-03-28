import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Thorne',
    specialty: 'Master Strength Coach',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/trainer-1-931f943d-1774457791568.webp',
  },
  {
    name: 'Elena Vance',
    specialty: 'Yoga & Flow Expert',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/trainer-2-5b8ec13f-1774457792544.webp',
  },
  {
    name: 'Sarah Dragan',
    specialty: 'Crossfit Specialist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/trainer-3-4ac12648-1774457797274.webp',
  },
];

export const Trainers: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic mb-4 tracking-tighter uppercase">
            The <span className="text-cyan-500">Elite</span> Crew
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg">
            Train with world-class athletes and fitness experts dedicated to transforming your physique and mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black italic tracking-tight uppercase mb-1">{trainer.name}</h3>
                <p className="text-cyan-500 font-bold text-sm tracking-widest uppercase">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};