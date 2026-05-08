import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import WishList from '../buttons/WishList';
import AddtoCart from '../buttons/AddtoCart';


const TopSellerCard = ({ product }) => {
  const { _id, name, price, currency, rating, image, isWishlisted } = product;

  // Formatting price (Example: 100.000)
  const formattedPrice = new Intl.NumberFormat('de-DE').format(price);
  
  // Calculate a fake original price for the "discount" look in the image 
  // (Or use product.originalPrice if you add it to DB later)
  const originalPrice = (price * 1.25).toFixed(0); 
  const formattedOriginalPrice = new Intl.NumberFormat('de-DE').format(originalPrice);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 w-full max-w-[320px]">
      
      {/* Upper Image Section */}
      <div className="relative bg-[#F8F8F8] rounded-xl aspect-square w-full flex items-center justify-center overflow-hidden">
        {/* Wishlist Button Component */}
        <div className="absolute top-1 right-1 z-10 scale-90">
            <WishList productId={_id} isWishlisted={isWishlisted} />
        </div>

        {/* Product Image */}
        <div className="relative w-[80%] h-[80%]">
          <Image
            src={image?.url}
            alt={image?.alt || name}
            fill
            className="object-contain mix-blend-multiply"
            sizes="300px"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] line-clamp-1">
          {name}
        </h3>

        {/* Price and Rating Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#888EA2] line-through text-lg">
                ${formattedOriginalPrice}
            </span>
            <span className="bg-[#C4C4C4] text-white text-xs px-2 py-1 rounded font-bold">
                -25%
            </span>
          </div>
          
          {/* Stars */}
          <div className="flex text-[#FFC107] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={16} color={i < rating.average ? "#FFC107" : "#E4E5E9"} />
            ))}
          </div>
        </div>

        {/* Bottom Row: Final Price & Cart */}
        <div className="flex items-center justify-between mt-1">
          <p className="text-[32px] font-bold text-[#1A1A1A]">
            {formattedPrice}{currency === "USD" ? "$" : "€"}
          </p>
          
          <AddtoCart productId={_id} />
        </div>
      </div>
    </div>
  );
};

export default TopSellerCard;