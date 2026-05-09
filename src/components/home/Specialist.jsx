import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Vet1 from "@/assets/Vet1.webp";
import Vet2 from "@/assets/Vet2.webp";
import Vet3 from "@/assets/Vet3.webp";
import SpecialistCard from "../cards/SpecialistCard";
import Image from "next/image";
import Arrow from "../../assets/Arrow.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const specialties = [
  {
    image: Vet1,
    title: "Poultry Health Solutions",
    description: <>Preventive & treatment medicines <br /> for chickens.</>,
  },
  {
    image: Vet2,
    title: "Nutritional Support",
    description: <>Supplements for better growth &  <br /> immunity.</>,
  },
  {
    image: Vet3,
    title: "Infectious Disease Control",
    description: <>Vaccines and treatments for <br /> common poultry diseases.</>,
  },
];

const Specialist = () => {
  return (
    <section className="bg-[#f5e6f5] w-full rounded-xl sm:rounded-2xl py-10 sm:py-14 px-4 sm:px-8 mt-20 sm:mt-32">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[80px] font-semibold text-center text-gray-900 mb-5 sm:mb-7 leading-tight">
        Our Veterinary Specialties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sm:mb-10 max-w-8xl mx-auto">
        {specialties.map((item, index) => (
          <SpecialistCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="bg-primary text-white w-fit flex justify-center items-center gap-2 sm:gap-3 rounded-[22.4px] py-[5.6px] pl-3 sm:pl-[16.8px] pr-[5.6px] mx-auto">
        <div>
          <h1 className="text-sm sm:text-[18px] font-light pl-2 sm:pl-4">Explore Products</h1>
        </div>
        <div className='bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1'>
                <MdOutlineArrowRightAlt size={28} />
            </div>
      </div>
    </section>
  );
};

export default Specialist;
