import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  ChevronDown, MessageSquare, Dumbbell, Sparkles 
} from 'lucide-react';
import { clubLocations, gymFaqs } from '../data/gymData';

export default function Contact({ onOpenTrial }) {
  const [selectedLocation, setSelectedLocation] = useState(clubLocations[0]);
  const [activeFaq, setActiveFaq] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Membership Question',
    location: clubLocations[0].name,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-28 pb-20 space-y-24 sm:space-y-32">
      
      {/* HEADER SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-lime-400 uppercase">
              GET IN TOUCH & VISIT US
            </span>
            <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase leading-none">
              WE ARE HERE TO HELP YOU <br />
              <span className="text-lime-400">CRUSH EVERY BARRIER.</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Have questions regarding our memberships, coaching staff, private tours, or guest passes? Reach out directly or drop by any of our 4 performance labs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & LOCATIONS DUAL GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 card-glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                  <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest">
                    DIRECT MESSAGE LINE
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
                  SEND US AN INQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Our front desk operations team typically responds within 30 minutes during facility hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Marcus Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-lime-400 transition"
                      >
                        <option value="Membership Question">Membership Question</option>
                        <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                        <option value="Free 3-Day Trial Pass">Free 3-Day Trial Pass</option>
                        <option value="Facility Tour Booking">Facility Tour Booking</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Target Location
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-lime-400 transition"
                      >
                        {clubLocations.map((loc) => (
                          <option key={loc.id} value={loc.name}>
                            {loc.name.split('&')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you are looking to achieve, your current fitness routine, or any specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-lime-400 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-heading font-bold text-black bg-lime-400 hover:bg-lime-300 active:scale-[0.99] transition shadow-lg shadow-lime-400/20 text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message Now
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center mx-auto border border-lime-400/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto">
                  Thank you <span className="text-lime-400 font-semibold">{formData.name}</span>. Our concierge team at {formData.location.split('&')[0]} has received your request and will reach out via {formData.email}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Membership Question',
                        location: clubLocations[0].name,
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Locations & Interactive Map Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400 block">
                OUR LOCATIONS
              </span>
              <h3 className="font-heading text-2xl font-bold text-white uppercase">
                FIND YOUR LOCAL CLUB
              </h3>
            </div>

            {/* Location selector cards */}
            <div className="space-y-3">
              {clubLocations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`card-glass rounded-2xl p-5 border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-lime-400 bg-zinc-900/90 ring-1 ring-lime-400/40'
                        : 'border-white/5 hover:border-white/20 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white uppercase">
                          {loc.name}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </p>
                      </div>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-lime-400 text-black uppercase">
                          Active
                        </span>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-lime-400" /> {loc.hours}
                      </span>
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-lime-400 hover:underline flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-3.5 h-3.5" /> {loc.phone}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Dark Map Preview */}
            <div className="card-glass rounded-2xl p-4 border border-white/10 relative overflow-hidden bg-[#0c0d12]">
              <div className="h-56 w-full rounded-xl bg-zinc-950 relative overflow-hidden border border-white/5 flex items-center justify-center bg-grid-pattern">
                {/* Simulated Pins */}
                <div className="absolute top-1/3 left-1/3 flex flex-col items-center animate-bounce">
                  <div className="w-7 h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-xs shadow-lg shadow-lime-400/50">
                    <Dumbbell className="w-3.5 h-3.5" />
                  </div>
                  <span className="px-2 py-0.5 mt-1 rounded bg-black/90 text-[10px] font-mono text-lime-300 border border-white/10">
                    Downtown
                  </span>
                </div>

                <div className="absolute top-1/2 right-1/4 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 border border-lime-400/40 flex items-center justify-center text-xs">
                    <MapPin className="w-3 h-3 text-lime-400" />
                  </div>
                  <span className="px-2 py-0.5 mt-1 rounded bg-black/90 text-[10px] font-mono text-zinc-400">
                    Uptown
                  </span>
                </div>

                <div className="absolute bottom-1/4 left-1/2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 border border-lime-400/40 flex items-center justify-center text-xs">
                    <MapPin className="w-3 h-3 text-lime-400" />
                  </div>
                  <span className="px-2 py-0.5 mt-1 rounded bg-black/90 text-[10px] font-mono text-zinc-400">
                    Westside
                  </span>
                </div>

                {/* Map Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <span>3 Locations Open Now In Greater NYC</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase mt-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Everything you need to know about memberships, guest passes, and amenities.
          </p>
        </div>

        <div className="space-y-3">
          {gymFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="card-glass rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-zinc-800/80 text-lime-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-lime-400/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
