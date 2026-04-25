import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Vet1 from "@/assets/Vet1.png";
import Vet2 from "@/assets/Vet2.png";
import Vet3 from "@/assets/Vet3.png";
import SpecialistCard from "../cards/SpecialistCard";
import Image from "next/image";
import Arrow from "../../assets/Arrow.png";

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
    <section className="bg-[#f5e6f5] w-full rounded-2xl py-14 px-8 mt-32">
      <h2 className="text-[80px] font-semibold text-center text-gray-900 mb-7">
        Our Veterinary Specialties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-8xl mx-auto">
        {specialties.map((item, index) => (
          <SpecialistCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="bg-primary text-white w-fit flex justify-center items-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] mx-auto">
        <div>
          <h1 className="text-[18px] font-light pl-4">Explore Products</h1>
        </div>
        <div>
          <Image src={Arrow} alt="Arrow" />
        </div>
      </div>
    </section>
  );
};

export default Specialist;
