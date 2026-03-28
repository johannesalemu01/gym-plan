import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-cyan-500 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter italic">TITAN<span className="text-cyan-500">GYM</span></span>
            </div>
            <p className="text-neutral-500 leading-relaxed mb-8">
              The ultimate destination for those who refuse to be average. Push your limits and redefine what's possible with Titan Gym.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Our Classes</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Safety Rules</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Member FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-6 text-neutral-500 font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>123 Elite Performance Way, <br />Metro City, MC 90210</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>contact@titangym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-sm font-medium">
            © 2024 Titan Gym. All rights reserved.
          </p>
          <p className="text-neutral-600 text-sm font-medium flex items-center gap-2">
            Engineered for <span className="text-white italic">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};