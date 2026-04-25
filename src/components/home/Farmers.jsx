import Image from 'next/image';
import Farmer1 from '@/assets/Farmer1.png';
import Farmer2 from '@/assets/Farmer2.png';
import Farmer3 from '@/assets/Farmer3.png';
import Farmer4 from '@/assets/Farmer4.png';

const posts = [
  {
    id: 1,
    image: Farmer2,
    date: 'Aug 15, 2022',
    title: <>Top Challenges Poultry Farmers Face – <br /> And How to Overcome Them</>,
  },
  {
    id: 2,
    image: Farmer3,
    date: 'Aug 06, 2022',
    title: <>Why Preventive Care Matters in Poultry <br /> Farming</>,
  },
  {
    id: 3,
    image: Farmer4,
    date: 'Aug 10, 2022',
    title: <>Nutrition First: Boosting Poultry Growth  <br /> & Immunity Naturally</>,
  },
];

const Farmers = () => {
  return (
    <section className="pt-32  px-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <h2 className="text-4xl md:text-7xl font-semibold text-[#232323] leading-tight">
          Knowledge for <br /> Farmers & Vets
        </h2>
        <p className="text-[18px] text-[#444444] font-light max-w-xs leading-relaxed">
          Browse our wide range of veterinary medicines developed to ensure the
          health and productivity of poultry.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-8xl mx-auto">

        {/* Featured Post — Left */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 p-4">
          <div className="relative w-full h-64">
            <Image
              src={Farmer1}
              alt="Featured farm post"
              fill
              className="object-cover object-top rounded-2xl"
            />
          </div>
          <div className="pt-4">
            <p className="text-xs text-gray-400 mb-1">Aug 28, 2023</p>
            <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
              The Future of Poultry Healthcare: Innovations in <br /> Veterinary Medicine
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              New technologies are transforming poultry farming. From advanced <br />
              vaccines to nutritional solutions, discover what is next for
              healthier flocks.
            </p>
          </div>
        </div>

        {/* Side Posts — Right */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex gap-4 bg-white rounded-2xl overflow-hidden border-gray-200 p-4 border"
            >
              {/* Thumbnail */}
              <div className="relative w-28 h-24 shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top rounded-xl"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center py-1">
                <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                <h4 className="text-sm font-semibold text-gray-900 leading-snug">
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