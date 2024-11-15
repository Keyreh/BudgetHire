import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Virtual Assistant",
      price: "8",
      features: [
        "Email Management",
        "Calendar Management",
        "Data Entry",
        "Customer Support",
        "Basic Research",
        "Document Preparation",
        "40 hours/week",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Designer",
      price: "15",
      popular: true,
      features: [
        "UI/UX Design",
        "Website Design",
        "Mobile App Design",
        "Brand Identity",
        "Social Media Graphics",
        "Unlimited Revisions",
        "40 hours/week",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Marketer",
      price: "12",
      features: [
        "Social Media Management",
        "Content Marketing",
        "Email Marketing",
        "SEO Optimization",
        "Analytics & Reporting",
        "Campaign Management",
        "40 hours/week",
        "Dedicated Account Manager"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium mb-4 block shine">Pricing</span>
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 border ${plan.popular ? 'border-indigo-600 shadow-lg' : 'border-gray-200'} card-hover relative`}>
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/hour</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan?</p>
          <button className="btn-secondary">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}