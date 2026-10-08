import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, Target, Activity, Flame } from 'lucide-react';

export default function BmiCalculator({ onSelectProgram }) {
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [heightCm, setHeightCm] = useState(178);
  const [weightKg, setWeightKg] = useState(76);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(10);
  const [weightLbs, setWeightLbs] = useState(168);
  const [goal, setGoal] = useState('hypertrophy');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    let bmiValue = 0;
    let weightInKg = 0;

    if (unit === 'metric') {
      const heightInMeters = heightCm / 100;
      bmiValue = weightKg / (heightInMeters * heightInMeters);
      weightInKg = weightKg;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      bmiValue = (weightLbs / (totalInches * totalInches)) * 703;
      weightInKg = weightLbs * 0.453592;
    }

    let category = '';
    let color = '';
    let recommendation = '';
    let estimatedCalories = Math.round(weightInKg * 24 * 1.45); // Active baseline

    if (bmiValue < 18.5) {
      category = 'Underweight / Lean';
      color = 'text-amber-400';
      recommendation = 'Hypertrophy & Mass Building Protocol';
      estimatedCalories += 450; // Surplus
    } else if (bmiValue < 25) {
      category = 'Optimal Athletic Range';
      color = 'text-lime-400';
      recommendation = 'Olympic Strength & Conditioning';
    } else if (bmiValue < 30) {
      category = 'Power/Overweight Baseline';
      color = 'text-cyan-400';
      recommendation = 'Metabolic HIIT & Kinetic Sculpt';
      estimatedCalories -= 350; // Deficit
    } else {
      category = 'High Mass / Conditioning Priority';
      color = 'text-red-400';
      recommendation = 'Metabolic HIIT & Low-Impact Conditioning';
      estimatedCalories -= 500;
    }

    setResult({
      bmi: bmiValue.toFixed(1),
      category,
      color,
      recommendation,
      tdee: estimatedCalories
    });
  };

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        
        {/* Left Form */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center border border-lime-400/30">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white tracking-wide">
                  BIOMETRIC CALCULATOR
                </h3>
                <p className="text-xs text-zinc-400">Estimate your BMI & targeted caloric demand</p>
              </div>
            </div>

            {/* Metric / Imperial switcher */}
            <div className="bg-zinc-900 border border-white/10 p-1 rounded-xl flex items-center">
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  unit === 'metric' ? 'bg-lime-400 text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Metric
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  unit === 'imperial' ? 'bg-lime-400 text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Imperial
              </button>
            </div>
          </div>

          {/* Controls */}
          {unit === 'metric' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase font-semibold tracking-wider">Height (cm)</span>
                  <span className="font-mono text-lime-400 font-bold text-sm">{heightCm} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="220"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-lime-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase font-semibold tracking-wider">Weight (kg)</span>
                  <span className="font-mono text-lime-400 font-bold text-sm">{weightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-lime-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase font-semibold tracking-wider">Height</span>
                  <span className="font-mono text-lime-400 font-bold text-sm">{heightFeet}ft {heightInches}in</span>
                </div>
                <div className="flex gap-2">
                  <select
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="flex-1 bg-zinc-800 text-white p-2 rounded-xl text-sm border border-zinc-700"
                  >
                    {[4, 5, 6, 7].map((f) => (
                      <option key={f} value={f}>{f} Feet</option>
                    ))}
                  </select>
                  <select
                    value={heightInches}
                    onChange={(e) => setHeightInches(Number(e.target.value))}
                    className="flex-1 bg-zinc-800 text-white p-2 rounded-xl text-sm border border-zinc-700"
                  >
                    {[...Array(12).keys()].map((i) => (
                      <option key={i} value={i}>{i} In</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase font-semibold tracking-wider">Weight (lbs)</span>
                  <span className="font-mono text-lime-400 font-bold text-sm">{weightLbs} lbs</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="350"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(Number(e.target.value))}
                  className="w-full accent-lime-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Goal Selector */}
          <div>
            <label className="block text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-2">
              Primary Fitness Objective
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'hypertrophy', label: 'Build Muscle' },
                { id: 'fatloss', label: 'Incinerate Fat' },
                { id: 'endurance', label: 'Hybrid Stamina' },
                { id: 'mobility', label: 'Mobility & Joint' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGoal(item.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition border ${
                    goal === item.id
                      ? 'bg-lime-400/20 text-lime-300 border-lime-400/60'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-black bg-lime-400 hover:bg-lime-300 active:scale-[0.99] transition shadow-lg shadow-lime-400/20 text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            Analyze Biometrics Now
          </button>
        </div>

        {/* Right Output Card */}
        <div className="w-full lg:w-80 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block mb-1">
              Analysis Results
            </span>
            <h4 className="font-heading text-xl font-bold text-white mb-4">
              YOUR FITNESS METRICS
            </h4>

            {result ? (
              <div className="space-y-4">
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-xs text-zinc-400 uppercase font-mono block">Calculated BMI</span>
                  <span className="text-4xl font-heading font-black text-lime-400 mt-1 block">
                    {result.bmi}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider mt-1 block ${result.color}`}>
                    {result.category}
                  </span>
                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-xl p-3 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-400" /> Target Daily Energy:
                  </span>
                  <span className="font-mono font-bold text-white">{result.tdee} kcal</span>
                </div>

                <div className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-3">
                  <span className="text-[11px] text-lime-400 uppercase font-bold tracking-wider block mb-1">
                    Recommended Protocol:
                  </span>
                  <p className="text-xs text-zinc-200 font-medium">
                    {result.recommendation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 px-2 text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
                <Activity className="w-10 h-10 mx-auto text-zinc-600 mb-2 stroke-1" />
                <p className="text-xs text-zinc-400">
                  Select your height and weight, then click "Analyze Biometrics Now" to get your personalized athletic profile.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-zinc-800 mt-4">
            <button
              onClick={() => onSelectProgram && onSelectProgram('Personalized Assessment')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-lime-400 hover:text-black transition flex items-center justify-center gap-2 cursor-pointer"
            >
              Consult A Coach Free <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
