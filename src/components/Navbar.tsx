import React from 'react';
import { Menu, X, DollarSign } from 'lucide-react';

interface NavbarProps {
  onHire: () => void;
}

export default function Navbar({ onHire }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text flex items-center">
              <DollarSign className="w-8 h-8 mr-2" />
              BudgetHire
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-indigo-200 transition-colors">How it Works</a>
            <a href="#" className="text-white hover:text-indigo-200 transition-colors">Services</a>
            <button onClick={onHire} className="btn-primary">
              Hire Talent
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-white hover:text-indigo-200 transition-colors">How it Works</a>
            <a href="#" className="block text-white hover:text-indigo-200 transition-colors">Services</a>
            <button onClick={onHire} className="btn-primary w-full">
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}