import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/hero-bg-09caa2c2-1774457797248.webp" 
          alt="Gym Hero"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              Elite Fitness Performance
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
              UNLEASH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                INNER BEAST
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of fitness with state-of-the-art equipment, world-class trainers, and a community dedicated to pushing boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onJoinClick}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg rounded-full flex items-center justify-center gap-2 group transition-all"
              >
                JOIN THE ELITE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg rounded-full flex items-center justify-center gap-2 backdrop-blur-sm transition-all">
                <Play className="w-5 h-5 fill-current" />
                WATCH TOUR
              </button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-3 gap-8 mt-20"
          >
            <div>
              <p className="text-3xl font-black text-white italic">200+</p>
              <p className="text-sm text-neutral-500 font-medium">Expert Trainers</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white italic">50+</p>
              <p className="text-sm text-neutral-500 font-medium">Weekly Classes</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white italic">15k+</p>
              <p className="text-sm text-neutral-500 font-medium">Active Members</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-12 rounded-full bg-white/10 flex justify-center"
      >
        <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
      </motion.div>
    </section>
  );
};