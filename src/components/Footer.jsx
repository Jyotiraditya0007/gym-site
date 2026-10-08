import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react';
import { clubLocations } from '../data/gymData';

export default function Footer({ onOpenTrial }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/10 text-zinc-400 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner Callout */}
      <div className="border-b border-white/10 bg-gradient-to-r from-lime-400/10 via-transparent to-cyan-400/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lime-400 text-xs font-mono font-bold tracking-widest uppercase">
              JOIN THE IRONPULSE MOVEMENT
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-white mt-1">
              READY TO SMASH YOUR PERSONAL BEST?
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Start with a zero-cost 3-day VIP club pass. Full facility and class access.
            </p>
          </div>
          <button
            onClick={() => onOpenTrial('Free 3-Day Pass')}
            className="shrink-0 px-8 py-4 rounded-xl font-heading font-bold text-black bg-lime-400 hover:bg-lime-300 transition shadow-xl shadow-lime-400/20 uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            Claim 3-Day Pass <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center text-black font-black">
                <Zap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider text-white">
                IRONPULSE
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The premier athletic training facility engineered for athletes, lifters, and relentless humans who demand measurable results, elite equipment, and science-backed recovery.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="X Twitter"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-lime-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors">About Us & Coaches</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Training Programs</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Class Timetable</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-400 transition-colors">Locations & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Olympic Barbell Power</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Metabolic HIIT MetCon</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Combat Boxing Camp</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Kinetic Recovery & Cryo</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-lime-400 transition-colors">Hypertrophy Sculpt</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase mb-4">
              Performance Digest
            </h4>
            <p className="text-xs text-zinc-400 mb-3">
              Get weekly workout science, macro recipes, and member perks.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-heading font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-lime-400" /> Subscribed!
                  </>
                ) : (
                  'Subscribe Free'
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Locations quick list */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-500">
          {clubLocations.map((loc) => (
            <div key={loc.id} className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-zinc-300">{loc.name}</p>
                <p className="text-zinc-500">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} IRONPULSE Athletic Club Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-400 cursor-pointer">Member Rules</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
