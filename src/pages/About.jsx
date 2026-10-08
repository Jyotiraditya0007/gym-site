import React from 'react';
import { 
  ShieldCheck, Target, HeartHandshake, Award, 
  Dumbbell, Flame, CheckCircle, ArrowRight, Sparkles 
} from 'lucide-react';
import { trainersData, facilitiesData } from '../data/gymData';
import TrainerCard from '../components/TrainerCard';

export default function About({ onOpenTrial }) {
  const pillars = [
    {
      icon: Dumbbell,
      title: 'Biomechanics Over Bullsh*t',
      desc: 'We don’t believe in gimmicks or fad workouts. Every movement pattern is calibrated for joint longevity, neuromuscular adaptation, and progressive overload.'
    },
    {
      icon: Flame,
      title: 'Active Scientific Recovery',
      desc: 'You don’t grow in the gym; you grow when you repair. Our twin cold plunge tubs, dry cedar saunas, and pneumatic boots guarantee 2x faster rebound.'
    },
    {
      icon: Target,
      title: 'Objective Data & Telemetry',
      desc: 'We monitor what matters: InBody 770 composition scans, velocity-based barbell sensors, and metabolic output data so you never guess your progress.'
    },
    {
      icon: HeartHandshake,
      title: 'Zero Ego, 100% Grit',
      desc: 'No posers, no intimidation. Whether you are deadlifting 250kg or picking up a kettlebell for the first time, this brotherhood and sisterhood backs you.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'The Garage Foundry', desc: 'Started with 4 custom power racks and 20 dedicated lifters seeking real coaching.' },
    { year: '2021', title: 'Downtown Flagship', desc: 'Opened our 18,000 sq ft headquarters with Olympic lifting bays and turf lanes.' },
    { year: '2023', title: 'Cold Plunge Spa Integration', desc: 'Expanded with full contrast hydrotherapy suites and high-performance recovery.' },
    { year: '2025', title: '4 Mega Locations', desc: 'Serving over 14,000 athletes across 4 premier facilities in the state.' }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 sm:space-y-32">
      
      {/* HERO BANNER */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-16 min-h-[480px] flex items-center">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=80"
              alt="IronPulse facility"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-lime-400 uppercase">
                OUR PHILOSOPHY & DNA
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase leading-none">
                BUILT TO OUTWORK <br />
                <span className="text-lime-400">EVERY EXCUSE.</span>
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                IronPulse was forged out of frustration with commercial gyms that prioritize passive subscriptions over human results. We designed an unapologetic home for people who value discipline, scientific progression, and relentless mental fortitude.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenTrial('Tour the Facility')}
                  className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                  Schedule A Private Facility Tour <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 4 PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            HOW WE OPERATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            OUR FOUR CORE PILLARS
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            The foundation underlying every training cycle, recovery modality, and coaching session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-glass card-glass-hover rounded-3xl p-8 border border-white/10 flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEET THE MASTER COACHES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
              WORLD-CLASS LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
              MEET THE MASTER COACHES
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Our training directors aren't weekend certificate holders. They are Olympians, CSCS specialists, Golden Glove fighters, and collegiate strength coaches.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onBookTrainer={onOpenTrial}
            />
          ))}
        </div>
      </section>

      {/* FACILITY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
              GROWTH & LEGACY
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase mt-2">
              THE ROAD TO EXCELLENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 relative">
                <span className="text-3xl font-heading font-black text-lime-400 block mb-2 font-mono">
                  {m.year}
                </span>
                <h4 className="font-heading text-lg font-bold text-white mb-2 uppercase">
                  {m.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 rounded-3xl p-8 sm:p-14 text-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl sm:text-5xl font-heading font-black uppercase tracking-tight">
              YOUR TRANSFORMATION BEGINS WITH ONE SESSION.
            </h3>
            <p className="text-zinc-900 font-medium text-sm sm:text-base max-w-xl">
              Book a complimentary private coaching consultation and facility trial today.
            </p>
          </div>
          <button
            onClick={() => onOpenTrial('Free 3-Day Pass')}
            className="shrink-0 px-8 py-4 rounded-xl bg-black hover:bg-zinc-900 text-white font-heading font-black uppercase text-sm tracking-wider transition shadow-xl cursor-pointer"
          >
            Claim 3-Day Trial Pass
          </button>
        </div>
      </section>

    </div>
  );
}
