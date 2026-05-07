import Image from "next/image";
import React from "react";
import TrustImg from "@/assets/Trust.webp";

const trustPoints = [
  {
    title: "Science-Backed Solutions",
    desc: "Every product is developed with research and proven results.",
  },
  {
    title: "Farmer-Centric Approach",
    desc: "We listen to real on-ground challenges and create practical remedies.",
  },
  {
    title: "Affordable & Accessible",
    desc: "Quality medicines at prices that farmers can rely on.",
  },
];

const Trust = () => {
  return (
    <div className="w-full bg-[#f9eef9] py-16 md:py-24 px-4 sm:px-8 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Image */}
        <div className="flex-1 w-full rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src={TrustImg}
            alt="Farmers with poultry"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", display: "block" }}
            className="rounded-2xl md:rounded-3xl"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl md:text-7xl font-black text-gray-900 uppercase leading-tight">
            Why Farmers Trust Us
          </h2>

          <div className="flex flex-col">
            {trustPoints.map((point, index) => (
              <div key={index} className="border-b-2 border-gray-300 last:border-b-0">
                <div className="flex items-start gap-4 py-6">
                  {/* Check icon */}
                  <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L4.5 8.5L11.5 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#555] font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;