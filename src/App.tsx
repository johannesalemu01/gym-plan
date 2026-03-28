import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { Trainers } from './components/Trainers';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { Dashboard } from './components/Dashboard';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'dashboard'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30">
      <Toaster position="top-center" richColors />
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isScrolled={isScrolled} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onJoinClick={() => setActiveTab('dashboard')} />
              <div id="programs">
                <Programs />
              </div>
              <div id="membership">
                <Membership />
              </div>
              <div id="trainers">
                <Trainers />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Dashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;