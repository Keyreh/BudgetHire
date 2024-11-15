import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TalentCategories from './components/TalentCategories';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import FeaturedTalent from './components/FeaturedTalent';
import HiringForm from './components/HiringForm';

function App() {
  const [isHiringFormOpen, setIsHiringFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onHire={() => setIsHiringFormOpen(true)} />
      <main>
        <Hero onHire={() => setIsHiringFormOpen(true)} />
        <HowItWorks />
        <Services />
        <TalentCategories />
        <FeaturedTalent />
        <WhyChooseUs />
      </main>
      
      <footer className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">BudgetTalent</h3>
              <p className="text-gray-600">Access pre-vetted remote talent at affordable rates.</p>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Virtual Assistants</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Designers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Marketers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} BudgetTalent. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <HiringForm isOpen={isHiringFormOpen} onClose={() => setIsHiringFormOpen(false)} />
    </div>
  );
}

export default App;