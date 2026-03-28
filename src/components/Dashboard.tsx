import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Calendar, Clock, Settings, LogOut, Flame, Heart, Target, ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Workouts', value: '12', icon: <Flame className="w-5 h-5 text-orange-500" />, trend: '+2 this week' },
  { label: 'Calories', value: '8,420', icon: <Activity className="w-5 h-5 text-cyan-500" />, trend: '+12% vs last week' },
  { label: 'Avg Heart Rate', value: '132 bpm', icon: <Heart className="w-5 h-5 text-pink-500" />, trend: 'Healthy range' },
  { label: 'Consistency', value: '92%', icon: <Target className="w-5 h-5 text-green-500" />, trend: 'Streak: 14 days' },
];

const upcomingClasses = [
  { name: 'HIIT Intensive', time: 'Today, 5:30 PM', trainer: 'Marcus Thorne', color: 'bg-cyan-500' },
  { name: 'Power Yoga', time: 'Tomorrow, 8:00 AM', trainer: 'Elena Vance', color: 'bg-purple-500' },
  { name: 'Strength Lab', time: 'Thu, 6:00 PM', trainer: 'Sarah Dragan', color: 'bg-orange-500' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-neutral-950">
      <div className="container mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">Member <span className="text-cyan-500">Dashboard</span></h1>
            <p className="text-neutral-500">Welcome back, Alex. Ready for today's grind?</p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 transition-all">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-red-500/10 text-red-500 font-bold rounded-2xl hover:bg-red-500 hover:text-white transition-all">
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stats Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-neutral-900 border border-neutral-800 rounded-[2rem] hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{stat.trend}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">{stat.label}</h3>
                  <p className="text-3xl font-black italic mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Performance Chart Mock */}
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black italic uppercase tracking-tight">Performance Flow</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[10px] font-black rounded-full">WEEKLY</span>
                  <span className="px-3 py-1 bg-neutral-800 text-neutral-500 text-[10px] font-black rounded-full">MONTHLY</span>
                </div>
              </div>
              <div className="h-64 w-full flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-500 rounded-t-xl"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-neutral-600">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="space-y-8">
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-[2.5rem]">
              <h3 className="text-xl font-black italic uppercase tracking-tight mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-500" /> Upcoming
              </h3>
              <div className="space-y-4">
                {upcomingClasses.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 transition-colors cursor-pointer group">
                    <div className={`w-3 h-12 rounded-full ${item.color}`} />
                    <div className="flex-grow">
                      <p className="font-bold text-sm">{item.name}</p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                        <Clock className="w-3 h-3" /> {item.time}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-4 border border-neutral-700 rounded-2xl text-sm font-bold hover:bg-neutral-800 transition-all">
                BOOK NEW CLASS
              </button>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] text-black">
              <h3 className="text-xl font-black italic uppercase leading-tight mb-2">Upgrade to Pro</h3>
              <p className="text-sm font-medium mb-6 opacity-80">Unlock personalized meal plans and 24/7 coaching access.</p>
              <button className="w-full py-4 bg-black text-white rounded-2xl font-black text-sm hover:bg-neutral-900 transition-all">
                CLAIM 20% OFF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};