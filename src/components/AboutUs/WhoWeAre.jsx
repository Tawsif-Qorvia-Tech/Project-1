import Image from "next/image";
import React from "react";
import aboutChick from "@/assets/AboutChick.png";
import Arrow from '../../assets/Arrow.png'

const WhoWeAre = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 md:py-36 px-4 sm:px-8 lg:px-24">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-6">
          Who We Are
        </h2>
        <p className="text-[#444444] text-sm md:text-[18px] font-light leading-relaxed mb-4">
          We are a trusted manufacturer of veterinary medicines, specializing in
          poultry healthcare. With a strong commitment to research, innovation,
          and quality, our goal is to support farmers by ensuring healthier
          animals and more productive farms.
        </p>
        <p className="text-[#444444] text-sm md:text-[18px] font-light leading-relaxed mb-4">
          Our products are developed under strict quality standards to meet the
          needs of veterinarians and livestock owners across the region
        </p>

        <div className="bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] w-max">
          <div>
            <h1 className="text-base lg:text-[18px] font-light">
              Learn More About Us
            </h1>
          </div>
          <div>
            <Image src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 w-full relative rounded-2xl md:rounded-3xl overflow-hidden">
        <Image
          src={aboutChick}
          alt="About Chick"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          className="rounded-2xl md:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
