import React from 'react';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Pre-vetted Talent",
      description: "Thoroughly screened professionals with proven track records"
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "Fast Matching",
      description: "Get matched with the perfect talent within 24 hours"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
      title: "70% Cost Savings",
      description: "Access top talent at a fraction of traditional hiring costs"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Money-back Guarantee",
      description: "100% satisfaction guaranteed or your money back"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium mb-4 block">Benefits</span>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">Experience the advantages of our remote talent platform</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 card-hover">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}