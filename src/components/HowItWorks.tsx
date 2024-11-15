import React from 'react';
import { ClipboardCheck, Users, Zap, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-indigo-600" />,
      title: "1. Tell us your needs",
      description: "Share your requirements, budget, and timeline. We'll help you find the perfect match for your project."
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "2. Meet pre-vetted talent",
      description: "Within 24 hours, we'll introduce you to carefully selected professionals who match your needs."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
      title: "3. Interview and select",
      description: "Schedule interviews with your preferred candidates and select the best fit for your team."
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-600" />,
      title: "4. Start working",
      description: "Begin collaboration immediately with our streamlined onboarding process and dedicated support."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium mb-4 block shine">Simple Process</span>
          <h1 className="text-4xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-600">Get started with your remote talent in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-200 card-hover h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}