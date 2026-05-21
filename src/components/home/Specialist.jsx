import React from "react";
import Vet1 from "@/assets/Vet1.webp";
import Vet2 from "@/assets/Vet2.webp";
import Vet3 from "@/assets/Vet3.webp";
import SpecialistCard from "../cards/SpecialistCard";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const specialties = [
  {
    image: Vet1,
    title: "Poultry Health Solutions",
    description: <>Preventive & treatment medicines <br /> for chickens.</>,
  },
  {
    image: Vet2,
    title: "Nutritional Support",
    description: <>Supplements for better growth & <br /> immunity.</>,
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
      <h2 className="text-[35px] sm:text-4xl lg:text-6xl xl:text-[80px] font-semibold text-center text-gray-900 mb-5 sm:mb-7 leading-tight">
        Our Veterinary Specialties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sm:mb-10 max-w-7xl mx-auto">
        {specialties.map((item, index) => (
          <SpecialistCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Link
        href="/our-products"
        className="group relative overflow-hidden bg-primary text-white w-fit flex justify-center items-center gap-2 sm:gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] mx-auto border border-primary transition-transform duration-300 active:scale-95 cursor-pointer"
      >
        {/* Background slide panel */}
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />

        {/* Clean Text Layer */}
        <div className="z-10">
          <span className="inline-block text-m sm:text-[18px] font-medium text-white group-hover:text-primary transition-colors duration-300">
            Explore Products
          </span>
        </div>

        {/* Animated Arrow Container */}
        <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white">
          <MdOutlineArrowRightAlt size={28} />
        </div>
      </Link>

    </section>
  );
};

export default Specialist;