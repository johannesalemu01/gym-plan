import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, User } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'dashboard';
  setActiveTab: (tab: 'home' | 'dashboard') => void;
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
  ];

  const handleNavClick = (href: string) => {
    setActiveTab('home');
    setIsOpen(false);
    // Smooth scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="bg-cyan-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic">TITAN<span className="text-cyan-500">GYM</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {activeTab === 'home' && navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setActiveTab(activeTab === 'home' ? 'dashboard' : 'home')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-white text-black hover:bg-neutral-200' 
                : 'bg-cyan-500 text-black hover:bg-cyan-400'
            }`}
          >
            <User className="w-4 h-4" />
            {activeTab === 'dashboard' ? 'Back to Home' : 'Member Portal'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {activeTab === 'home' && navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-neutral-400 text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveTab(activeTab === 'home' ? 'dashboard' : 'home');
                setIsOpen(false);
              }}
              className="w-full bg-cyan-500 text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <User className="w-5 h-5" />
              {activeTab === 'dashboard' ? 'Back to Home' : 'Member Portal'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};