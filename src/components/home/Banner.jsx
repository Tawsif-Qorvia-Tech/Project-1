import React from 'react';
import Image from 'next/image';
import banner from '@/assets/Banner.png';
import Explore from '../buttons/Explore';
import LearnMore from '../buttons/LearnMore';

const Banner = () => {
    return (
        <div className="relative w-full h-150 overflow-hidden mt-3 rounded-4xl">
            <Image
                src={banner}
                alt="Banner"
                fill
                className="object-cover object-center"
                priority
            />

            <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-2xl">
                <h1 className="text-white text-5xl font-semibold leading-tight mb-4">
                    Leading the Future <br /> of Animal Health
                </h1>
                <p className="text-white text-[13px] font-light mb-4 leading-relaxed">
                    We manufacture trusted, science-backed veterinary medicines to keep your animals
                    healthier and your farm more productive.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <Explore></Explore>
                    <LearnMore></LearnMore>
                </div>
            </div>
        </div>
    );
};

export default Banner;