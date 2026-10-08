import React from 'react';
import { Clock, Flame, Dumbbell, ArrowRight, Check } from 'lucide-react';

export default function ProgramCard({ program, onSelect }) {
  return (
    <div className="card-glass card-glass-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group">
      {/* Image Banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] via-[#0d0f15]/30 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider bg-lime-400 text-black shadow-md">
            {program.tag}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-lime-400" />
            {program.calories}
          </span>
        </div>

        {/* Coach tag */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Led by <span className="text-white font-semibold">{program.trainer}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-lime-400" /> {program.duration}
            </span>
            <span>•</span>
            <span className="text-zinc-300">{program.schedule}</span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-lime-300 transition-colors">
            {program.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            {program.description}
          </p>

          {/* Key Features */}
          <div className="mt-4 space-y-1.5 pt-3 border-t border-white/5">
            {program.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <Check className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={() => onSelect(program.title)}
            className="w-full py-3 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-xs sm:text-sm text-zinc-100 bg-white/5 hover:bg-lime-400 hover:text-black border border-white/10 hover:border-lime-400 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
          >
            <span>Reserve Class Pass</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
