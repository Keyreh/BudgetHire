import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onHire: () => void;
}

export default function Hero({ onHire }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center text-indigo-300 font-medium mb-4 px-4 py-1 rounded-full bg-indigo-900/50 backdrop-blur-sm shine">
            <Sparkles className="w-4 h-4 mr-2 animate-bounce-slow" />
            Premium Talent, Budget-Friendly Rates
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Hire Expert Remote
            <span className="gradient-text block">Talent On Budget</span>
          </h1>
          
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Access pre-vetted virtual assistants, designers, and marketers. Save up to 70% on hiring costs with our remote talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={onHire} className="btn-primary flex items-center justify-center group">
              Hire Remote Talent
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {[
              ['70%', 'Cost Savings'],
              ['24h', 'Matching Time'],
              ['100%', 'Money-back Guarantee'],
              ['4.9/5', 'Client Rating']
            ].map(([number, label]) => (
              <div key={label} className="text-center animate-float">
                <div className="text-3xl font-bold text-white">{number}</div>
                <div className="text-indigo-200 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl"></div>
    </div>
  );
}