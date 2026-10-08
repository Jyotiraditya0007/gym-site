import React from 'react';
import { Award, Calendar, ArrowRight } from 'lucide-react';

export default function TrainerCard({ trainer, onBookTrainer }) {
  return (
    <div className="card-glass card-glass-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group">
      {/* Trainer Image */}
      <div className="relative h-72 sm:h-80 overflow-hidden bg-zinc-900">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] via-transparent to-transparent" />
        
        {/* Experience badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-lime-400 border border-lime-400/30 flex items-center gap-1.5">
            <Award className="w-3 h-3 text-lime-400" />
            {trainer.experience}
          </span>
        </div>
      </div>

      {/* Trainer Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-lime-400 block mb-1">
            {trainer.role}
          </span>
          <h3 className="font-heading text-2xl font-bold text-white tracking-wide">
            {trainer.name}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
            {trainer.bio}
          </p>

          {/* Specialties pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {trainer.specialties.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <button
            onClick={() => onBookTrainer(`Private Coaching with ${trainer.name}`)}
            className="w-full py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-heading font-bold uppercase tracking-wider text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-lime-400/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 1-on-1 Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
