"use client";

import React from 'react';
import { FaArrowAltCircleRight, FaLongArrowAltRight } from 'react-icons/fa';

const ContactUS = () => {
    return (
        <div className='bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px]'>
            <div>
                <h1 className='text-[18px] font-light'>Contact Us</h1>
            </div>
            <div>
                <FaArrowAltCircleRight size={20} />
            </div>
        </div>
    );
};

export default ContactUS;