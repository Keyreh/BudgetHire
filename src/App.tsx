import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TalentCategories from './components/TalentCategories';
import WhyChooseUs from './components/WhyChooseUs';
import HiringForm from './components/HiringForm';

function App() {
  const [isHiringFormOpen, setIsHiringFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onHire={() => setIsHiringFormOpen(true)} />
      <main>
        <Hero onHire={() => setIsHiringFormOpen(true)} />
        <TalentCategories />
        <WhyChooseUs />
      </main>
      
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">BudgetHire</h3>
              <p className="text-gray-400">Access pre-vetted remote talent at affordable rates.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Virtual Assistants</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Designers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BudgetHire. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <HiringForm isOpen={isHiringFormOpen} onClose={() => setIsHiringFormOpen(false)} />
    </div>
  );
}

export default App;