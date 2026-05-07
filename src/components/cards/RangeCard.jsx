import React from 'react';
import Image from 'next/image';
import WishList from '../buttons/WishList';


const RangeCard = ({ product }) => {
  const { _id, name, tagline, image, isWishlisted } = product;

  return (
    <div className="flex flex-col group cursor-pointer w-full">
      {/* Image Container Card */}
      <div className="relative bg-[#F4F4F4] rounded-[45px] aspect-[1/1.2] flex flex-col items-center justify-center p-2 transition-all duration-300 hover:shadow-lg">
        
        {/* Wishlist Button Component */}
        <div className="absolute top-1 right-1 z-15">
          <WishList 
            productId={_id} 
            isWishlisted={isWishlisted} 
          />
        </div>

        {/* Optimized Next.js Product Image */}
        <div className="relative w-full h-[65%] mb-12">
          <Image
            src={image?.url}
            alt={image?.alt || name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain mix-blend-multiply p-4"
            priority={false}
          />
        </div>

        {/* Action Button (daisyUI) */}
        <div className="absolute bottom-6 w-[88%] z-10">
          <button className="btn w-full bg-neutral text-white rounded-[50px] border-none hover:bg-neutral-800 font-medium text-sm sm:text-[18px] tracking-wide min-h-10 h-10 sm:min-h-12 sm:h-12">
          Get Quote
        </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 px-2">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-tight mb-2">
          {name}
        </h3>
        <p className="text-[#666666] text-[14px] font-light leading-snug line-clamp-2">
          {tagline}
        </p>
      </div>
    </div>
  );
};

export default RangeCard;