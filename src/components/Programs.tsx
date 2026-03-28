import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Trophy } from 'lucide-react';

const programs = [
  {
    title: 'Bodybuilding',
    description: 'Build massive muscle and strength with our specialized weightlifting protocols and nutrition plans.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/bodybuilding-workout-42b86ead-1774457790835.webp',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'HIIT & Cardio',
    description: 'Torch calories and improve cardiovascular endurance with high-intensity interval training sessions.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/hiit-session-dcf4f4ff-1774457791691.webp',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Yoga & Mobility',
    description: 'Enhance flexibility, reduce stress, and improve recovery with our mindful movement classes.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0bc48bf6-1411-4370-bfbc-fdf4db902cc0/yoga-class-12774459-1774457791723.webp',
    icon: <Heart className="w-6 h-6" />,
  },
];

export const Programs: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black italic mb-4 tracking-tighter uppercase">
              Programs For <span className="text-cyan-500">Every Goal</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              We offer a wide range of specialized programs designed to help you achieve your specific fitness targets, whether it's weight loss, muscle gain, or athletic performance.
            </p>
          </div>
          <button className="text-cyan-500 font-bold hover:text-cyan-400 transition-colors flex items-center gap-2">
            VIEW ALL PROGRAMS <Zap className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-900"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 bg-cyan-500 p-3 rounded-2xl shadow-xl shadow-cyan-500/20 text-black">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-black italic mb-3 tracking-tight uppercase">
                  {program.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-500 transition-colors">
                  LEARN MORE <ShieldCheck className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};