import React from 'react';
import { Users, Palette, TrendingUp, Code, Megaphone, LineChart } from 'lucide-react';

export default function TalentCategories() {
  const categories = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Virtual Assistants",
      rate: "From $8/hour",
      description: "Administrative support, email management, and customer service specialists"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developers",
      rate: "From $25/hour",
      description: "Full-stack, frontend, and backend development experts"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Designers",
      rate: "From $15/hour",
      description: "UI/UX design, graphics, and brand identity professionals"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketers",
      rate: "From $12/hour",
      description: "Social media, content, and growth marketing specialists"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Data Analysts",
      rate: "From $18/hour",
      description: "Business intelligence and data analysis experts"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Project Managers",
      rate: "From $20/hour",
      description: "Agile project management and team coordination professionals"
    }
  ];

  return (
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">Talent Categories</h2>
          <p className="text-xl text-gray-400">Access a diverse pool of pre-vetted professionals ready to help grow your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-gray-700/50 rounded-lg inline-block text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                <p className="text-indigo-400 mb-3">{category.rate}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}