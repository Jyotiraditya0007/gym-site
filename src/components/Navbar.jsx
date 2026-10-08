import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Zap, Phone, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center text-black font-black shadow-lg shadow-lime-400/25 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl font-black tracking-wider text-white group-hover:text-lime-300 transition-colors">
                  IRONPULSE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block animate-ping" />
              </div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-400 -mt-1">
                Athletic Performance Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 uppercase tracking-wider ${
                    isActive
                      ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20 font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15553829001"
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-lime-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lime-400" />
              <span>(555) 382-9001</span>
            </a>
            <button
              onClick={() => onOpenTrial('Free 3-Day Pass')}
              className="px-5 py-2.5 rounded-full bg-lime-400 text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-lime-300 active:scale-95 transition-all shadow-lg shadow-lime-400/25 flex items-center gap-2 cursor-pointer"
            >
              <Dumbbell className="w-4 h-4" />
              Claim Free Pass
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenTrial('Free 3-Day Pass')}
              className="px-3 py-1.5 rounded-lg bg-lime-400 text-black font-heading font-bold text-xs uppercase tracking-wider mr-1"
            >
              Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017]/98 border-b border-white/10 px-6 py-6 backdrop-blur-xl animate-fade-in shadow-2xl">
          <nav className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-heading font-semibold uppercase tracking-wider flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-lime-400 text-black font-bold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial('Free 3-Day Pass');
              }}
              className="w-full py-3.5 rounded-xl bg-lime-400 text-black font-heading font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20"
            >
              <Dumbbell className="w-4 h-4" />
              Claim 3-Day Free Pass
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-2">
              <Phone className="w-3.5 h-3.5 text-lime-400" />
              <span>Call (555) 382-9001 • Open 24/7</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
