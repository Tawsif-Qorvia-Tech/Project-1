import React from "react";
import Image from "next/image";
import banner from "@/assets/Banner.png";
import Explore from "../buttons/Explore";
import LearnMore from "../buttons/LearnMore";

const Banner = () => {
  return (
    <div className="relative w-full h-100 sm:h-125 md:h-150 lg:h-200 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-4xl">
      <Image
        src={banner}
        alt="Banner"
        fill
        className="object-cover object-[75%] md:object-center"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center text-left pl-4 sm:px-6 md:pl-24 md:pr-16 w-full">
        <h1 className="text-white  text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-2 sm:mb-3 md:mb-4 w-full max-w-full md:max-w-4xl font-[family-name:--font-gilroy]">
          Leading the Future  <br /> of Animal Health
        </h1>
        <p className="text-white text-xs md:text-[18px] font-light mb-3 sm:mb-4 md:mb-6 leading-relaxed w-full md:max-w-xl font-[family-name:--font-bdo-grotesk]">
          We manufacture trusted, science-backed veterinary medicines to keep
          your animals healthier and your farm more productive.
        </p>

        <div className="flex flex-row gap-2 md:gap-4 w-full">
          <Explore></Explore>
          <LearnMore></LearnMore>
        </div>
      </div>
    </div>
  );
};

export default Banner;
