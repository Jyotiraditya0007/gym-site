import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Flame, Dumbbell, ShieldCheck, ArrowRight, Star, 
  Check, ChevronRight, Trophy, HeartPulse, Sparkles, Clock, Activity 
} from 'lucide-react';
import { gymStats, programsData, membershipPlans, testimonialsData, facilitiesData } from '../data/gymData';
import BmiCalculator from '../components/BmiCalculator';
import ProgramCard from '../components/ProgramCard';

export default function Home({ onOpenTrial }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
            alt="Gym workout hero"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090d]/90 via-[#08090d]/40 to-transparent" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime-400/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-400/15 border border-lime-400/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-lime-400 uppercase">
                24/7 ELITE FACILITY • ALL-ACCESS RECOVERY SPA
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95]">
              REDEFINE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-white">
                HUMAN LIMITS.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Step into an unapologetic arena of peak human conditioning. Olympic barbells, high-velocity metabolic circuits, sub-zero cryotherapy, and coaches that hold you to the standard you deserve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenTrial('Free 3-Day Pass')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black text-black bg-lime-400 hover:bg-lime-300 active:scale-95 transition-all text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl shadow-lime-400/25 cursor-pointer glow-lime"
              >
                <Dumbbell className="w-5 h-5" />
                Claim 3-Day Free Pass
              </button>

              <Link
                to="/training"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 hover:border-lime-400/50 transition text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <span>Explore 20+ Classes</span>
                <ArrowRight className="w-4 h-4 text-lime-400" />
              </Link>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Zero Commitment 3-Day Pass</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Eleiko & Arsenal Strength</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Cold Plunges & Infrared</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS TICKER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gymStats.map((stat, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 border border-white/10 text-center sm:text-left transition-all hover:border-lime-400/40"
            >
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-lime-400 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-zinc-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS / WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            ENGINEERED FOR EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2 tracking-tight">
            THE IRONPULSE ADVANTAGE
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Most gyms lease floor space. We engineer an ecosystem where every detail—from air purification to barbell knurling—is tuned for maximum human output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass card-glass-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Dumbbell className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Competition Olympic Gear
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Train on calibrated Eleiko bars, competition drop platforms, Prime Fitness selectorized machinery, and Rogue Monster racks. No lines, no broken cables.
            </p>
          </div>

          <div className="card-glass card-glass-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Contrast Recovery Lounge
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Supercharge your nervous system recovery with 38°F twin cold plunges, dry cedar saunas, full-body cryotherapy, and compression boots.
            </p>
          </div>

          <div className="card-glass card-glass-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Precision Biometric Guidance
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Monthly InBody 770 body composition diagnostics, heart rate tracking during HIIT sessions, and customized macronutrient periodization.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR TRAINING PROGRAMS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
              DISCIPLINE & SPECIALTIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2 tracking-tight">
              FEATURED TRAINING PROTOCOLS
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              From heavy powerlifting and combat striking to high-tempo metabolic conditioning, find the exact path tailored to your body.
            </p>
          </div>
          <Link
            to="/training"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase text-lime-400 hover:text-lime-300 transition"
          >
            <span>View All Programs & Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programsData.slice(0, 3).map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={onOpenTrial}
            />
          ))}
        </div>
      </section>

      {/* INTERACTIVE BIOMETRIC CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            INTERACTIVE TOOLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            CALCULATE YOUR BASELINE
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Use our science-backed formula to get your Body Mass Index (BMI) and recommended daily training protocol.
          </p>
        </div>

        <BmiCalculator onSelectProgram={onOpenTrial} />
      </section>

      {/* FACILITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            SANCTUARY OF IRON & SCIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            THE PERFORMANCE ARENA
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Over 25,000 square feet of meticulously engineered athletic zones designed to ignite focus and eradicate distraction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilitiesData.map((facility, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl overflow-hidden border border-white/10 group relative flex flex-col justify-end min-h-[340px] p-6"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="relative z-10 space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-lime-400 text-black inline-block">
                  {facility.badge}
                </span>
                <h3 className="font-heading text-xl font-bold text-white uppercase">
                  {facility.name}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-3">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            MEMBERSHIP TIERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            INVEST IN YOUR HEALTH
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Transparent pricing. Zero hidden lock-in contracts. Freeze anytime.
          </p>

          {/* Billing Switch */}
          <div className="mt-6 inline-flex items-center gap-3 bg-zinc-900 border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                billingCycle === 'monthly' ? 'bg-lime-400 text-black shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                billingCycle === 'yearly' ? 'bg-lime-400 text-black shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-black text-lime-400 font-mono">SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {membershipPlans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.id}
                className={`card-glass rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-lime-400 ring-1 ring-lime-400/50 shadow-2xl shadow-lime-400/10 lg:-translate-y-2'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-md">
                    MOST POPULAR ATHLETE CHOICE
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-2xl font-bold text-white uppercase">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  <div className="my-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-5xl font-heading font-black text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono uppercase">
                      / Month ({billingCycle})
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onOpenTrial(`${plan.name} Membership`)}
                    className={`w-full py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-lime-400 hover:bg-lime-300 text-black shadow-lg shadow-lime-400/25 font-black'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEMBER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            REAL ATHLETE STORIES
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Hear from members who transformed their bodies, mindsets, and health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="card-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-lime-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lime-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                
                <div className="px-3 py-1.5 rounded-lg bg-lime-400/10 border border-lime-400/20 text-[11px] font-mono text-lime-300 mb-6">
                  {t.achievement}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-lime-400/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
