import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, CreditCard, Shield, Apple, Wallet } from 'lucide-react';
import { toast } from 'sonner';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: ['Access to Gym Floor', 'Locker Room Access', 'Free WiFi', 'Standard Equipment'],
    unsupported: ['Group Classes', 'Personal Training', 'Nutritional Guide', 'Spa Access'],
    color: 'border-neutral-800',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '59',
    features: ['Access to Gym Floor', 'Locker Room Access', 'All Group Classes', 'Nutritional Guide', 'Professional App Access'],
    unsupported: ['Personal Training', 'Spa & Recovery'],
    color: 'border-cyan-500',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '99',
    features: ['Unlimited Gym Access', 'All Premium Classes', '2x Personal Training / mo', 'Spa & Sauna Access', 'Full Nutrition & Bio-tracking'],
    unsupported: [],
    color: 'border-neutral-800',
    highlight: false,
  }
];

export const Membership: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleSubscribe = (plan: string) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const processPayment = () => {
    toast.loading('Processing secure payment...');
    setTimeout(() => {
      toast.success(`Successfully subscribed to ${selectedPlan} plan!`);
      setShowPayment(false);
      setSelectedPlan(null);
    }, 2000);
  };

  return (
    <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic mb-4 tracking-tighter uppercase">
            Choose Your <span className="text-cyan-500">Ascension</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Flexible membership options tailored to your commitment and fitness objectives. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2rem] border-2 bg-neutral-900 flex flex-col ${
                plan.highlight ? 'border-cyan-500 shadow-2xl shadow-cyan-500/10' : 'border-neutral-800'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <p className="text-neutral-400 font-bold text-sm uppercase mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black italic">$</span>
                  <span className="text-6xl font-black italic">{plan.price}</span>
                  <span className="text-neutral-500 font-medium">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-cyan-500/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-cyan-500" />
                    </div>
                    <span className="text-sm font-medium text-neutral-200">{feature}</span>
                  </div>
                ))}
                {plan.unsupported.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 opacity-30">
                    <div className="bg-neutral-800 p-1 rounded-full">
                      <X className="w-4 h-4 text-neutral-400" />
                    </div>
                    <span className="text-sm font-medium text-neutral-400 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-4 rounded-2xl font-black transition-all ${
                  plan.highlight 
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mock Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPayment(false)}
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2.5rem] max-w-md w-full relative z-10"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter">SECURE CHECKOUT</h3>
                <p className="text-neutral-400 text-sm">Review and confirm your subscription</p>
              </div>
              <button onClick={() => setShowPayment(false)} className="text-neutral-500 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-4 mb-6 flex justify-between items-center">
              <div>
                <p className="text-xs text-neutral-500 font-bold uppercase">Plan Selected</p>
                <p className="text-lg font-black italic text-cyan-500">{selectedPlan} Membership</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500 font-bold uppercase">Total Due</p>
                <p className="text-lg font-black italic">${plans.find(p => p.name === selectedPlan)?.price}.00</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full bg-neutral-800 border-none rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 ring-cyan-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full bg-neutral-800 border-none rounded-xl py-4 px-4 text-sm focus:ring-2 ring-cyan-500"
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  className="w-full bg-neutral-800 border-none rounded-xl py-4 px-4 text-sm focus:ring-2 ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={processPayment}
                className="w-full bg-cyan-500 text-black py-4 rounded-xl font-black text-lg shadow-xl shadow-cyan-500/20"
              >
                PAY NOW
              </button>
              <div className="flex gap-2">
                <button className="flex-1 bg-neutral-800 py-3 rounded-xl flex items-center justify-center">
                  <Apple className="w-5 h-5" />
                </button>
                <button className="flex-1 bg-neutral-800 py-3 rounded-xl flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-center text-[10px] text-neutral-500 mt-6 flex items-center justify-center gap-1 uppercase tracking-widest">
              <Shield className="w-3 h-3" /> Secure SSL Encrypted Payment
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};