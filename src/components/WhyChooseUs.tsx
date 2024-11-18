import React from 'react';
import { Shield, Clock, DollarSign, Award, Users, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pre-vetted Talent",
      description: "Only 3% of applicants pass our rigorous screening process"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24-Hour Matching",
      description: "Get matched with the perfect talent within one business day"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Rates",
      description: "70% cost savings compared to traditional hiring methods"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee or your money back"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Personal account manager for ongoing assistance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Talent Pool",
      description: "Access professionals from over 50 countries"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">Why Choose BudgetHire</h2>
          <p className="text-xl text-gray-600">Experience the advantages of our premium remote talent platform</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/20"
            >
              <div className="mb-6 p-3 bg-indigo-50 rounded-lg inline-block text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}