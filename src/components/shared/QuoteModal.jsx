import React, { useState } from 'react';

const QuoteModal = ({ productName, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    query: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission API logic here
    console.log('Submitting Quote Request:', { productName, ...formData });
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Form Container */}
      <div className="relative w-full max-w-md bg-primary p-6 sm:p-8 rounded-2xl shadow-xl z-10 text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6">Request a Quote</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Product Name (ReadOnly) */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Product Name</label>
            <input
              type="text"
              value={productName || ''}
              readOnly
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-white placeholder-white/50 focus:outline-none cursor-not-allowed"
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Your Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Email Address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Contact Number</label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Query Text Area */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Query About The Product</label>
            <textarea
              required
              rows="4"
              placeholder="How can we help you regarding this product?"
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-neutral text-white font-semibold py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;