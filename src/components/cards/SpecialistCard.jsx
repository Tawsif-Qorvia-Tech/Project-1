import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const SpecialistCard = ({ image, title, description }) => {
    return (
        <div className="bg-white p-2 rounded-2xl overflow-hidden flex flex-col">
            <div className="relative w-full h-52">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover  rounded-2xl"
                />
            </div>

            <div className="flex flex-col flex-1 pt-5">
                <h3 className="text-[24px] font-bold text-[#222222] mb-2">
                    {title}
                </h3>
                <p className="text-lg text-[#222222] flex-1">
                    {description}
                </p>
                <div className="flex justify-end mt-4">
                    <button className="bg-primary text-white rounded-full p-2 hover:opacity-90 transition">
                        <FiArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialistCard;