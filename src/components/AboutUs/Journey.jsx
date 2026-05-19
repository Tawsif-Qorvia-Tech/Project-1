import Image from "next/image";
import React from "react";
import Journey1 from "@/assets/Journey1.webp";
import Journey2 from "@/assets/Journey2.webp";
import Journey3 from "@/assets/Journey3.webp";

const journeyData = [
  {
    icon: Journey1,
    title: "Vision & Beginning",
    desc: "We started with a simple vision: to connect science with animal care and practical, effective solutions.",
  },
  {
    icon: Journey2,
    title: "Growth & Trust",
    desc: "By working hand-in-hand with farmers, veterinary products that earned trust nationwide.",
  },
  {
    icon: Journey3,
    title: "Today & Future",
    desc: "Now a leading veterinary medicine company, we continue to innovate for healthier animals.",
    highlight: true,
  },
];

const TopArrow = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] w-[calc(160%+4rem)] h-28 pointer-events-none z-20">
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M270 95 Q330 10 420 80"
        stroke="#d63ad5"
        strokeWidth="2"
        strokeDasharray="5 4"
        fill="none"
      />
      <polygon points="418,74 426,84 412,84" fill="#d63ad5" />
    </svg>
  </div>
);

const BottomArrow = () => (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[100%] w-[calc(160%+4rem)] h-28 pointer-events-none z-20">
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M140 5 Q70 90 -20 20"
        stroke="#d63ad5"
        strokeWidth="2"
        strokeDasharray="5 4"
        fill="none"
      />
    </svg>
  </div>
);

const VerticalArrow = () => (
  <div className="h-12 flex items-center justify-center my-2">
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-15"
    >
      <path
        d="M30 5 L30 70"
        stroke="#d63ad5"
        strokeWidth="2"
        strokeDasharray="5 4"
        fill="none"
      />
      <polygon points="25,65 35,65 30,75" fill="#d63ad5" />
    </svg>
  </div>
);

const Journey = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 md:py-24 px-4 sm:px-8 lg:px-24">
      <h2 className="text-5xl md:text-[80px] font-semibold text-gray-900 mb-5 md:mb-20 text-center">
        Our Journey
      </h2>

      {/* Desktop: horizontal row */}
      <div className="hidden md:flex items-start justify-center relative gap-4">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 w-65 lg:w-75 text-center relative z-10 shadow-sm border-[1.5px] border-gray-200 hover:border-primary hover:shadow-[0_4px_20px_rgba(214,58,213,0.15)] transition-all duration-300"
          >
            {/* Arrow overlays on second card */}
            {index === 1 && (
              <>
                <TopArrow />
                <BottomArrow />
              </>
            )}

            <div className="relative w-20 h-20 rounded-full bg-linear-to-br from-[#CF02A6] to-[#AF008C] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_10px_rgba(214,58,213,0.12)]">
              <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[rgba(214,58,213,0.35)]" />
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-[14px] text-[#666] leading-relaxed m-0">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex md:hidden flex-col items-center w-full max-w-sm">
        {journeyData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="bg-white rounded-2xl p-6 w-full text-center relative z-10 shadow-sm border-[1.5px] border-gray-200 hover:border-primary hover:shadow-[0_4px_20px_rgba(214,58,213,0.15)] transition-all duration-300"
            >
              <div className="relative w-20 h-20 rounded-full bg-linear-to-br from-[#CF02A6] to-[#AF008C] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_10px_rgba(214,58,213,0.12)]">
                <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[rgba(214,58,213,0.35)]" />
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-[#666] leading-relaxed m-0">
                {item.desc}
              </p>
            </div>

            {/* Render a vertical arrow element after card 1 and card 2 in mobile stack view */}
            {index < journeyData.length - 1 && <VerticalArrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Journey;
