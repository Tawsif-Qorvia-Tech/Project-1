import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Vet1 from "@/assets/Vet1.png";
import Vet2 from "@/assets/Vet2.png";
import Vet3 from "@/assets/Vet3.png";
import SpecialistCard from "../cards/SpecialistCard";

const specialties = [
  {
    image: Vet1,
    title: "Poultry Health Solutions",
    description: "Preventive & treatment medicines for chickens.",
  },
  {
    image: Vet2,
    title: "Nutritional Support",
    description: "Supplements for better growth & immunity.",
  },
  {
    image: Vet3,
    title: "Infectious Disease Control",
    description: "Vaccines and treatments for common poultry diseases.",
  },
];

const Specialist = () => {
  return (
    <section className="bg-[#f5e6f5] w-full rounded-2xl py-14 px-8 mt-25">
      <h2 className="text-6xl font-semibold text-center text-gray-900 mb-7">
        Our Veterinary Specialties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-6xl mx-auto">
        {specialties.map((item, index) => (
          <SpecialistCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn btn-primary rounded-full px-8">
          Explore Products
          <FiArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Specialist;
