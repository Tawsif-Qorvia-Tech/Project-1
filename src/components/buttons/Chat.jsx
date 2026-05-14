"use client";
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';
import { FiArrowLeft, FiX, FiPhone } from 'react-icons/fi';

const Chat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex flex-col items-end">
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? '160px' : '0px',
          opacity: open ? 1 : 0,
          width: '64px',
          marginBottom: open ? '8px' : '0px',
        }}
      >
        <div
          className="flex flex-col items-center gap-3 py-3 rounded-2xl"
          style={{
           background: '#d1d5db',

            width: '64px',
          }}
        >
          <button
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{
              background: 'linear-gradient(145deg, #25d366 0%, #128c7e 100%)',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
            }}
          >
            <BsWhatsapp className="text-white" size={20} />
          </button>

          <button
            aria-label="Call us"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{
              background: 'linear-gradient(145deg, #4f8ef7 0%, #2563eb 100%)',
              boxShadow: '0 4px 12px rgba(79, 142, 247, 0.4)',
            }}
          >
            <FiPhone className="text-white" size={18} />
          </button>
        </div>
      </div>

      <div className="relative inline-flex items-center justify-center">
        

        <button
          aria-label={open ? 'Close menu' : 'Open chat options'}
          onClick={() => setOpen(!open)}
          className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{
            background: '#c0186c',
            transition: 'background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
          }}
        >
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 38% 30%, rgba(255,255,255,0.18) 0%, transparent 70%)',
            }}
          />
          {open ? (
            <FiX className="text-white drop-shadow-md" size={28} />
          ) : (
            <FaChevronLeft className="text-white drop-shadow-md" size={28} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;