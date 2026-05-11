import React from "react";
import Image from "next/image";
import banner from "@/assets/Banner.webp";
import Explore from "../buttons/Explore";
import LearnMore from "../buttons/LearnMore";

const Banner = () => {
  return (
    <div className="relative w-full h-100 sm:h-125 md:h-150 lg:h-200 overflow-hidden rounded-2xl md:rounded-4xl">
      <Image
        src={banner}
        alt="Banner"
        fill
        className="object-cover object-[60%_center]"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center text-left pl-4 sm:px-6 md:pl-24 md:pr-16 w-full">
        <h1 className="text-white text-4xl xs-only:text-[30px] md:text-5xl lg:text-[82px] font-medium mb-2 sm:mb-3 md:mb-4 w-full max-w-full md:max-w-4xl">
          Leading the Future <br /> of Animal Health
        </h1>
        <p className="text-white text-xs md:text-[18px] font-light mb-3 sm:mb-4 md:mb-6 leading-relaxed w-full md:max-w-xl">
          We manufacture trusted, science-backed veterinary medicines to keep
          your animals healthier and your farm more productive.
        </p>

        <div className="flex flex-row gap-2 md:gap-4 w-full justify-center md:justify-start">
          <Explore></Explore>
          <LearnMore></LearnMore>
        </div>
      </div>
    </div>
  );
};

export default Banner;
