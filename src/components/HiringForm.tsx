import React, { useState } from 'react';
import { X } from 'lucide-react';

interface HiringFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HiringForm({ isOpen, onClose }: HiringFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    talentType: '',
    budget: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Hire Remote Talent</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Talent Needed
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.talentType}
              onChange={(e) => setFormData({ ...formData, talentType: e.target.value })}
            >
              <option value="">Select talent type</option>
              <option value="virtual-assistant">Virtual Assistant</option>
              <option value="designer">Designer</option>
              <option value="marketer">Marketer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Budget
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Select budget range</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-5000">$2,000 - $5,000</option>
              <option value="5000+">$5,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your project needs and requirements..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}