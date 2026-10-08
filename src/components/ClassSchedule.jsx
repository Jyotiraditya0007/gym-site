import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, CheckCircle2, ChevronRight } from 'lucide-react';
import { weeklySchedule } from '../data/gymData';

export default function ClassSchedule({ onBookClass }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Classes' },
    { id: 'strength', label: 'Strength & Barbells' },
    { id: 'hiit', label: 'HIIT & Conditioning' },
    { id: 'combat', label: 'Combat & Boxing' },
    { id: 'functional', label: 'Turf & Hybrid' },
    { id: 'recovery', label: 'Mobility & Recovery' }
  ];

  const filteredSchedule = weeklySchedule.filter(item => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Day Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              selectedDay === day
                ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/25 scale-[1.02]'
                : 'bg-zinc-900/90 text-zinc-400 border border-white/5 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs text-zinc-500 font-mono flex items-center gap-1 shrink-0 pl-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition shrink-0 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-white/20 text-white border border-white/30 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((session, idx) => (
            <div
              key={idx}
              className="card-glass card-glass-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                      <Clock className="w-3 h-3 text-lime-400" />
                      {session.time}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      • {session.room}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                    {session.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                    Coach: <span className="text-zinc-200 font-medium">{session.trainer}</span>
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider ${
                    session.spots <= 2 
                      ? 'bg-red-500/15 text-red-400 border border-red-500/30' 
                      : 'bg-lime-400/15 text-lime-400 border border-lime-400/30'
                  }`}>
                    {session.spots} Spots Left
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-mono">
                  {session.category} circuit
                </span>
                <button
                  onClick={() => onBookClass(session.title)}
                  className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-heading font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shadow-lime-400/20 cursor-pointer"
                >
                  Reserve Spot <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 py-12 text-center card-glass rounded-2xl border border-white/5 text-zinc-400">
            <Calendar className="w-8 h-8 mx-auto text-zinc-600 mb-2" />
            <p className="text-sm">No classes found matching this category on {selectedDay}.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs text-lime-400 hover:underline uppercase tracking-wider font-semibold"
            >
              Reset filter to all classes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
