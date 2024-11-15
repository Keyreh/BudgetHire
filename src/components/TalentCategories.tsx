import React from 'react';
import { Users, Palette, TrendingUp } from 'lucide-react';

export default function TalentCategories() {
  const categories = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Virtual Assistants",
      description: "From $8/hour • Administrative support, email management, and customer service",
      skills: ["Email Management", "Customer Support", "Calendar Management", "Data Entry"]
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Designers",
      description: "From $15/hour • UI/UX design, graphics, and brand identity",
      skills: ["UI/UX Design", "Graphic Design", "Brand Identity", "Web Design"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Marketers",
      description: "From $12/hour • Social media, content, and growth marketing",
      skills: ["Social Media", "SEO", "Content Marketing", "Email Marketing"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium mb-4 block shine">Our Services</span>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Remote Talent Categories</h2>
          <p className="text-gray-600 text-lg">Pre-vetted professionals ready to help grow your business</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 card-hover group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-sm group-hover:bg-indigo-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}