import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onHire: () => void;
}

export default function Hero({ onHire }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-people-working-in-the-office-5244/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Hire Top Remote Talent That Fits Your Budget
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Access pre-vetted professionals at 70% less than traditional hiring. Start scaling your team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onHire} className="btn-primary flex items-center justify-center group text-lg px-8 py-4">
              Hire Remote Talent
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Talent Pool
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20">
            {[
              ['500+', 'Active Talent'],
              ['70%', 'Cost Savings'],
              ['24h', 'Matching Time']
            ].map(([number, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{number}</div>
                <div className="text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
        <span className="text-white/50 mt-2 text-sm">Scroll</span>
      </div>
    </div>
  );
}