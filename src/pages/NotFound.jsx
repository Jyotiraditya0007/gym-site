import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="card-glass rounded-3xl p-10 max-w-lg border border-white/10 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-lime-400/10 text-lime-400 border border-lime-400/20 flex items-center justify-center mx-auto">
          <Dumbbell className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-heading font-black text-white">404</h1>
        <h2 className="text-2xl font-heading font-bold text-lime-400 uppercase">
          WORKOUT NOT FOUND
        </h2>
        <p className="text-sm text-zinc-400">
          Looks like this training page doesn't exist or has moved to another sector. Let's get you back to the main arena.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-heading font-bold uppercase text-xs tracking-wider hover:bg-lime-300 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
