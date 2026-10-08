import React, { useState } from 'react';
import { 
  Flame, Dumbbell, Clock, Users, Target, ShieldCheck, 
  ArrowRight, Check, Zap, Filter 
} from 'lucide-react';
import { programsData } from '../data/gymData';
import ProgramCard from '../components/ProgramCard';
import ClassSchedule from '../components/ClassSchedule';

export default function Training({ onOpenTrial }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Protocols' },
    { id: 'strength', label: 'Strength & Barbells' },
    { id: 'hiit', label: 'HIIT & Conditioning' },
    { id: 'combat', label: 'Boxing & Combat' },
    { id: 'functional', label: 'Turf & Hybrid' },
    { id: 'recovery', label: 'Mobility & Recovery' },
  ];

  const filteredPrograms = programsData.filter((prog) => {
    if (selectedFilter === 'all') return true;
    return prog.category === selectedFilter;
  });

  return (
    <div className="pt-28 pb-20 space-y-24 sm:space-y-32">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-16 min-h-[440px] flex items-center">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=80"
              alt="Olympic barbell training"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.22] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-lime-400 uppercase">
                SCIENTIFICALLY FORMULATED
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase leading-none">
                TRAINING PROTOCOLS & <br />
                <span className="text-lime-400">WEEKLY TIMETABLE.</span>
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Whether your target is raw powerlifting totals, sub-10% body fat conditioning, or functional mobility, our elite group disciplines and private sessions are designed for absolute physiological adaptation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#schedule-section"
                  className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                  <Clock className="w-4 h-4" /> View Live Schedule
                </a>
                <button
                  onClick={() => onOpenTrial('Free 3-Day Pass')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  Drop-In Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING PROTOCOLS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            CHOOSE YOUR DISCIPLINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            SPECIALIZED PROGRAMS
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Curated programming led by certified strength coaches with heart rate and mechanical telemetry.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20'
                    : 'bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={onOpenTrial}
            />
          ))}
        </div>
      </section>

      {/* INTERACTIVE TIMETABLE SECTION */}
      <section id="schedule-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            REAL-TIME CALENDAR
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            WEEKLY CLASS SCHEDULE
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Filter by day of the week or training type. Reserve your station in advance to ensure spot availability.
          </p>
        </div>

        <ClassSchedule onBookClass={onOpenTrial} />
      </section>

      {/* PRIVATE 1-ON-1 COACHING ACCORD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
                TAILORED PROTOCOLS
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase">
                PRIVATE 1-ON-1 ATHLETE MENTORSHIP
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Group classes build camaraderie, but private training guarantees micro-focused progression. Work directly with an Olympic-certified head coach to dissect your biomechanics, fix muscle imbalances, and smash personal records.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Comprehensive 90-minute initial movement & mobility screen',
                  'Periodized 12-week progressive overload plan synced to your app',
                  'InBody 770 biometric scan with skeletal muscle mass and visceral fat analysis',
                  'Complete personalized macronutrient targets with weekly adjustments'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenTrial('Private 1-on-1 Coaching Consultation')}
                  className="px-8 py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-heading font-bold uppercase text-xs sm:text-sm tracking-wider transition shadow-lg shadow-lime-400/20 flex items-center gap-2 cursor-pointer"
                >
                  Request Coach Assessment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-heading font-black text-lime-400">100%</p>
                <p className="text-xs text-zinc-400 uppercase font-mono mt-1">Personalized Periodization</p>
              </div>
              <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-heading font-black text-lime-400">42+</p>
                <p className="text-xs text-zinc-400 uppercase font-mono mt-1">Certified Coaches</p>
              </div>
              <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-heading font-black text-lime-400">1:1</p>
                <p className="text-xs text-zinc-400 uppercase font-mono mt-1">Daily Accountability</p>
              </div>
              <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-heading font-black text-lime-400">24/7</p>
                <p className="text-xs text-zinc-400 uppercase font-mono mt-1">Direct App Messaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
