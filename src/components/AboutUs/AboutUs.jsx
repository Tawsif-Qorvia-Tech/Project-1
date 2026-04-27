import Image from 'next/image';
import React from 'react';
import aboutBanner from '@/assets/AboutBanner.png';

const AboutUs = () => {
    return (
            <div className="relative h-100 md:h-137.5 overflow-hidden rounded-2xl md:rounded-4xl">
                <Image
                    src={aboutBanner}
                    alt="About Us Banner"
                    fill
                    className="object-cover object-[center_30%] md:object-top"
                    priority
                />

                <div className="absolute inset-0 flex items-center md:items-start">
                    <div className="relative flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 py-16 md:py-24 lg:py-32 w-full">
                    <div className="border border-white/70 rounded-full hidden md:block px-11 py-2.5 text-white text-[18px] font-light tracking-wide bg-white/10">
                        About Us
                    </div>

                    <h1 className="text-white text-3xl md:text-[80px] font-semibold mb-2 text-left md:text-center" style={{ fontFamily: "'inter', serif" }}>
                        Dedicated to Animal <br /> Health & Farm Productivity
                    </h1>

                    <p className="text-white text-left md:text-center text-sm md:text-[18px] font-normal">
                        With years of experience, we provide science-backed veterinary solutions for healthier <br />
                        animals and sustainable farming.
                    </p>
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;