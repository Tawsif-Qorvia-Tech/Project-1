"use client";

import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const ContactUS = () => {
    return (
        <button className='group relative overflow-hidden bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5px] pl-[16.5px] pr-[5.6px] border border-primary transition-transform duration-300 active:scale-95 cursor-pointer'>
            
            {/* Background slide panel */}
            <span className='absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0' />
            
            {/* Clean Text Layer */}
            <div className='pl-1 z-10'> 
                <span className='inline-block md:text-[16px] xl:text-[18px] font-medium text-white group-hover:text-primary transition-colors duration-300'>
                    Get a Quote
                </span>
            </div>
            
            {/* Animated Arrow Container */}
            <div className='bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white'>
                <MdOutlineArrowRightAlt size={28} />
            </div>
        </button>
    );
};

export default ContactUS;
