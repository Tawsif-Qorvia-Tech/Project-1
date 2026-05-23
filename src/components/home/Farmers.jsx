import Image from "next/image";
import Farmer1 from "@/assets/Farmer1.webp";
import Farmer2 from "@/assets/Farmer2.webp";
import Farmer3 from "@/assets/Farmer3.webp";
import Farmer4 from "@/assets/Farmer4.webp";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const posts = [
  {
    id: 1,
    image: Farmer2,
    date: "May 20, 2026",
    title: "Top Challenges Poultry Farmers Face – And How to Overcome Them",
  },
  {
    id: 2,
    image: Farmer3,
    date: "May 15, 2026",
    title: "Why Preventive Care Matters in Poultry Farming",
  },
  {
    id: 3,
    image: Farmer4,
    date: "May 10, 2026",
    title: "Nutrition First: Boosting Poultry Growth & Immunity Naturally",
  },
];

const Farmers = () => {
  return (
    <section className="pt-20 sm:pt-32 px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4 mb-5">
        <h2 className="text-[42px] sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#232323] leading-tight">
          Knowledge for <br className="hidden lg:block" /> Farmers & Vets
        </h2>
        <p className="text-[16px] sm:text-[18px] text-[#444444] font-light max-w-xs leading-relaxed">
          Browse our wide range of veterinary medicines developed to ensure the
          health and productivity of poultry.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-7xl mx-auto items-stretch">
        
        {/* Featured Post — Left */}
        <Link
          href="#"
          className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 p-3 sm:p-4 flex flex-col"
        >
          <div className="relative w-full min-h-64 sm:min-h-80 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={Farmer1}
              alt="Featured farm post"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="pt-3 sm:pt-4">
            <p className="text-gray-400 mb-1">May 23, 2026</p>
            <h3 className="text-[16px] md:text-[22px] font-semibold text-gray-900 leading-snug mb-2">
              The Future of Poultry Healthcare: Innovations in Veterinary
              Medicine
            </h3>
            <p className="text-[16px] sm:text-[18px] font-light text-gray-500 leading-relaxed">
              New technologies are transforming poultry farming. From advanced
              vaccines to nutritional solutions, discover what is next for
              healthier flocks.
            </p>
          </div>
        </Link>

        {/* Side Posts — Right */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              href="#"
              key={post.id}
              className="flex gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 p-3 sm:p-4 flex-1"
            >
              <div className="relative w-28 sm:w-36 shrink-0 min-h-24 sm:min-h-28 rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center py-1">
                <p className="text-[14px] md:text-[16px] text-[#444444] mb-1">
                  {post.date}
                </p>
                <h4 className="text-[14px] md:text-[16px] font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* MATCHING INTERACTIVE HOVER BUTTON */}
      <div className="flex justify-center mt-10 md:mt-12">
        <Link
          href="/knowledge-center"
          className="group relative overflow-hidden bg-primary text-white w-fit flex justify-center items-center gap-2 sm:gap-3 rounded-[22.4px] py-[5.6px] pl-3 sm:pl-[10px] pr-[5.6px] border border-primary transition-transform duration-300 active:scale-95 cursor-pointer"
        >
          {/* Background slide panel */}
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />

          {/* Clean Text Layer */}
          <div className="pl-3 sm:pl-4 z-10">
            <span className="inline-block text-[16px] sm:text-[18px] font-medium text-white group-hover:text-primary transition-colors duration-300">
              Learn More
            </span>
          </div>

          {/* Animated Arrow Container */}
          <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white">
            <MdOutlineArrowRightAlt size={28} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Farmers;
