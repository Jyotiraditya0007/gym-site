import React, { useState } from 'react';
import { X, CheckCircle, Flame, Dumbbell, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { clubLocations } from '../data/gymData';

export default function TrialModal({ isOpen, onClose, defaultService = 'Free 3-Day Pass' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: clubLocations[0].name,
    service: defaultService,
    goal: 'Build Muscle & Strength'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#11131a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-lime-400/10 text-lime-400 border border-lime-400/25">
                <Flame className="w-3.5 h-3.5" /> VIP ACCESS PASS
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white mb-2">
              CLAIM YOUR PASS
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Experience the highest echelon of athletic training. No obligations, no pushy sales tactics.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                    Select Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                  >
                    {clubLocations.map((loc) => (
                      <option key={loc.id} value={loc.name} className="bg-zinc-900 text-white">
                        {loc.name.split('&')[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                  >
                    <option value="Build Muscle & Strength" className="bg-zinc-900 text-white">Muscle & Strength</option>
                    <option value="Fat Loss & Conditioning" className="bg-zinc-900 text-white">Fat Loss / Conditioning</option>
                    <option value="Athletic Performance" className="bg-zinc-900 text-white">Athletic Performance</option>
                    <option value="Boxing / Combat" className="bg-zinc-900 text-white">Boxing / Combat</option>
                    <option value="Mobility & Recovery" className="bg-zinc-900 text-white">Mobility / Recovery</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 px-6 rounded-xl font-heading font-bold text-black bg-lime-400 hover:bg-lime-300 active:scale-[0.99] transition shadow-lg shadow-lime-400/20 text-base tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Dumbbell className="w-5 h-5" />
                    Activate Guest Pass Now
                  </>
                )}
              </button>

              <p className="text-center text-xs text-zinc-500 mt-2">
                🔒 We respect your privacy. No spam guaranteed. Instant SMS pass code.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-scale-up">
            <div className="w-16 h-16 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-lime-400/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              YOU'RE ON THE LIST!
            </h3>
            <p className="text-zinc-300 text-sm max-w-sm mx-auto mb-6">
              Welcome <span className="text-lime-400 font-semibold">{formData.name}</span>! Your 3-Day VIP All-Access pass has been generated.
            </p>

            {/* Mock Digital Pass Card */}
            <div className="bg-zinc-900/90 border border-lime-400/30 rounded-xl p-5 mb-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-lime-400 text-black text-[11px] font-bold uppercase rounded-bl-lg">
                VIP ACTIVATED
              </div>
              <p className="text-xs text-zinc-400 uppercase font-mono tracking-wider mb-1">Guest Pass ID</p>
              <p className="text-lg font-mono font-bold text-lime-300 mb-3">IP-9842-{Math.floor(1000 + Math.random() * 9000)}</p>
              
              <div className="text-xs space-y-1.5 text-zinc-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-lime-400" />
                  <span>Valid for 7 days from today</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-black bg-lime-400 hover:bg-lime-300 transition text-sm tracking-wider uppercase cursor-pointer"
            >
              Done & Explore Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
