"use client";

import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FiX, FiPhone } from "react-icons/fi";

const Chat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex flex-col items-end">
      
      {/* Popup Box */}
      <div
        className="overflow-hidden transition-all rounded-3xl duration-300 ease-in-out"
        style={{
          maxHeight: open ? "220px" : "0px",
          opacity: open ? 1 : 0,
          width: "90px",
          marginBottom: open ? "12px" : "0px",
        }}
      >
        <div
          className="flex flex-col items-center gap-4 py-4"
          style={{
            background: "#d1d5db",
            width: "90px",
          }}
        >
          
          {/* WhatsApp Button */}
          <button
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{
              background:
                "linear-gradient(145deg, #25d366 0%, #128c7e 100%)",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
            }}
          >
            <BsWhatsapp className="text-white" size={28} />
          </button>

          {/* Call Button */}
          <button
            aria-label="Call us"
            className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{
              background:
                "linear-gradient(145deg, #4f8ef7 0%, #2563eb 100%)",
              boxShadow: "0 4px 12px rgba(79, 142, 247, 0.4)",
            }}
          >
            <FiPhone className="text-white" size={26} />
          </button>
        </div>
      </div>

      {/* Main Toggle Button */}
      <div className="relative inline-flex items-center justify-center">
        <button
          aria-label={open ? "Close menu" : "Open chat options"}
          onClick={() => setOpen(!open)}
          className="relative flex items-center justify-center w-20 h-20 rounded-3xl shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "#c0186c",
            transition:
              "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
          }}
        >
          <span
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 38% 30%, rgba(255,255,255,0.18) 0%, transparent 70%)",
            }}
          />

          {open ? (
            <FiX className="text-white drop-shadow-md" size={38} />
          ) : (
            <FaChevronLeft className="text-white drop-shadow-md" size={38} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;