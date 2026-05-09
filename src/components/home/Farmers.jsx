import Image from "next/image";
import Farmer1 from "@/assets/Farmer1.webp";
import Farmer2 from "@/assets/Farmer2.webp";
import Farmer3 from "@/assets/Farmer3.webp";
import Farmer4 from "@/assets/Farmer4.webp";

const posts = [
  {
    id: 1,
    image: Farmer2,
    date: "May 15, 2026",
    title: (
      <>
        Top Challenges Poultry Farmers Face – <br /> And How to Overcome Them
      </>
    ),
  },
  {
    id: 2,
    image: Farmer3,
    date: "May 06, 2026",
    title: (
      <>
        Why Preventive Care Matters in Poultry <br /> Farming
      </>
    ),
  },
  {
    id: 3,
    image: Farmer4,
    date: "May 10, 2026",
    title: (
      <>
        Nutrition First: Boosting Poultry Growth <br /> & Immunity Naturally
      </>
    ),
  },
];

const Farmers = () => {
  return (
    <section className="pt-20 sm:pt-32 px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-5">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-semibold text-[#232323] leading-tight font-">
          Knowledge for <br className="hidden md:block" /> Farmers & Vets
        </h2>
        <p className="text-sm sm:text-base md:text-[18px] text-[#444444] font-light max-w-xs leading-relaxed">
          Browse our wide range of veterinary medicines developed to ensure the
          health and productivity of poultry.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-8xl mx-auto items-stretch">
        {/* Featured Post — Left */}
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 p-3 sm:p-4 flex flex-col">
          <div className="relative w-full flex-1 min-h-48 sm:min-h-80">
            <Image
              src={Farmer1}
              alt="Featured farm post"
              fill
              className="object-cover object-top rounded-xl sm:rounded-2xl"
            />
          </div>
          <div className="pt-3 sm:pt-4">
            <p className="text-gray-400 mb-1">Aug 28, 2023</p>
            <h3 className="text-[16px] md:text-[22px] font-medium text-gray-900 leading-snug mb-2">
              The Future of Poultry Healthcare: Innovations in Veterinary
              Medicine
            </h3>
            <p className="text-[18px] font-light text-gray-500 leading-relaxed">
              New technologies are transforming poultry farming. From advanced
              vaccines to nutritional solutions, discover what is next for
              healthier flocks.
            </p>
          </div>
        </div>

        {/* Side Posts — Right */}
        <div className="flex-col hidden md:flex justify-between">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl overflow-hidden border-gray-200 p-3 sm:p-4 border flex-1 mb-4 last:mb-0"
            >
              <div className="relative w-28 sm:w-36 shrink-0 self-stretch">
                <Image
                  src={post.image}
                  alt={typeof post.title === "string" ? post.title : "post"}
                  fill
                  className="object-cover object-top rounded-lg sm:rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center py-1">
                <p className="text-[18px] text-[#444444] mb-1">{post.date}</p>
                <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 leading-snug">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Farmers;
