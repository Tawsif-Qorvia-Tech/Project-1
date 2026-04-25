"use client";

import React from 'react';
import Arrow from '../../assets/Arrow.png'
import { FaArrowAltCircleRight, FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';

const ContactUS = () => {
    return (
        <div className='bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px]'>
            <div className='pl-4'> 
                <h1 className='text-[18px] font-light'>Contact Us</h1>
            </div>
            <div>
                <Image src={Arrow} alt="Arrow" />
            </div>
        </div>
    );
};

export default ContactUS;