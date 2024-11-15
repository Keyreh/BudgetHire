import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function FeaturedTalent() {
  const talents = [
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Sarah Chen",
      role: "Virtual Assistant",
      rating: 4.9,
      reviews: 127,
      description: "Administrative expert with 5+ years experience in email management and customer support.",
      skills: ["Email Management", "Customer Service", "Data Entry", "Scheduling"]
    },
    {
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Michael Rodriguez",
      role: "UI/UX Designer",
      rating: 4.8,
      reviews: 94,
      description: "Creative designer specializing in mobile apps and web interfaces.",
      skills: ["Figma", "UI Design", "Web Design", "Mobile Apps"]
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Emma Thompson",
      role: "Digital Marketer",
      rating: 4.9,
      reviews: 156,
      description: "Growth specialist with proven track record in social media marketing.",
      skills: ["Social Media", "Content Strategy", "Analytics", "SEO"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Talent</h2>
            <p className="text-gray-600 text-lg">Work with the best remote professionals</p>
          </div>
          <button className="btn-primary hidden md:flex items-center">
            View All Talent
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {talents.map((talent, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{talent.name}</h3>
                    <p className="text-blue-600">{talent.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{talent.rating}</span>
                  <span className="ml-1 text-gray-600">({talent.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-6">{talent.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {talent.skills.map((skill) => (
                    <span key={skill} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="btn-primary w-full">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-primary w-full mt-8 md:hidden">
          View All Talent
        </button>
      </div>
    </section>
  );
}