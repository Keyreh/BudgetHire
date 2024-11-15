import React from 'react';
import { Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Virtual Assistant Services",
      description: "Boost your productivity with dedicated administrative support",
      tasks: [
        "Email & Calendar Management",
        "Customer Support",
        "Data Entry & Research",
        "Travel Arrangements",
        "Document Preparation",
        "Social Media Management",
        "Bookkeeping & Invoicing",
        "Project Coordination"
      ]
    },
    {
      title: "Design Services",
      description: "Transform your brand with professional design solutions",
      tasks: [
        "UI/UX Design",
        "Website Design",
        "Mobile App Design",
        "Brand Identity Design",
        "Social Media Graphics",
        "Marketing Materials",
        "Presentation Design",
        "Product Packaging"
      ]
    },
    {
      title: "Marketing Services",
      description: "Grow your business with data-driven marketing strategies",
      tasks: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "SEO Optimization",
        "PPC Campaign Management",
        "Marketing Analytics",
        "Brand Strategy",
        "Lead Generation"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium mb-4 block shine">Our Services</span>
          <h1 className="text-4xl font-bold mb-6">Comprehensive Solutions</h1>
          <p className="text-xl text-gray-600">Expert services tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 card-hover">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8">{service.description}</p>
              <ul className="space-y-4">
                {service.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}