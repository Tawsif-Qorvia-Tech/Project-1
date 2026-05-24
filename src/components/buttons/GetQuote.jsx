"use client";
import React from 'react';

const GetQuote = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="btn w-full bg-neutral text-white rounded-[50px] border-none hover:bg-neutral-800 font-medium text-m sm:text-[18px] tracking-wide min-h-10 h-10 sm:min-h-12 sm:h-12 flex items-center justify-center cursor-pointer"
    >
      Get Quote
    </button>
  );
};

export default GetQuote;