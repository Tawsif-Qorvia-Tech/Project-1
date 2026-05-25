"use client";

import React, { useState } from 'react';
import { PostLeads } from '@/actions/server/Leads';

const QuoteModal = ({ productName, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    query: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await PostLeads({
        productName,
        name: formData.name,
        email: formData.email,
        number: formData.number,
        query: formData.query,
      });

      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        // Reset form and close after delay
        setTimeout(() => {
          setFormData({ name: '', email: '', number: '', query: '' });
          setMessage({ type: '', text: '' });
          onClose();
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to submit lead' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while submitting your request' });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
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
              disabled={isLoading}
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-white placeholder-white/50 focus:outline-none cursor-not-allowed"
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Your Name</label>
            <input
              type="text"
              required
              disabled={isLoading}
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-60"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Email Address</label>
            <input
              type="email"
              required
              disabled={isLoading}
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-60"
            />
          </div>

          {/* Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Contact Number</label>
            <input
              type="tel"
              required
              disabled={isLoading}
              placeholder="+1 (555) 000-0000"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-60"
            />
          </div>

          {/* Query Text Area */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-white/80">Query About The Product</label>
            <textarea
              required
              rows="4"
              disabled={isLoading}
              placeholder="How can we help you regarding this product?"
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none disabled:opacity-60"
            />
          </div>

          {/* Message Display */}
          {message.text && (
            <div className={`p-3 rounded-lg text-sm font-medium ${
              message.type === 'success' 
                ? 'bg-green-500/30 text-green-100 border border-green-400' 
                : 'bg-red-500/30 text-red-100 border border-red-400'
            }`}>
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-neutral text-white font-semibold py-3 rounded-lg hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;