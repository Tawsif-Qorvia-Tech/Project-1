"use client";

import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const ContactUS = () => {
    return (
        <div className='bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-1.5 pl-[16.8px] pr-[5.6px]'>
    <div className='pl-4'> 
        <h1 className='text-[18px] font-light'>Contact Us</h1>
    </div>
    
    {/* White circular background for the arrow */}
    <div className='bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1'>
        <MdOutlineArrowRightAlt size={28} />
    </div>
</div>
    );
};

export default ContactUS;