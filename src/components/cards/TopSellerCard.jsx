import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import WishList from '../buttons/WishList';
import AddtoCart from '../buttons/AddtoCart';

const TopSellerCard = ({ product }) => {
  // SAFEGUARD: Gracefully handle if product data is missing
  if (!product) return null;

  const { _id, name, price, rating, image, isWishlisted } = product;

  // Formatting configurations
  const formattedPrice = new Intl.NumberFormat('de-DE').format(price || 0);
  const originalPrice = ((price || 0) * 1.25).toFixed(0); 
  const formattedOriginalPrice = new Intl.NumberFormat('de-DE').format(originalPrice);
  
  // SAFEGUARD: Fallback to 0 if rating object or average value is missing
  const safeRating = rating?.average || 0;

  // Prevent event bubbling on mobile touch sliders
  const stopSliderBubbling = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 w-full select-none">
      
      {/* Upper Image Section */}
      <div className="relative bg-[#F8F8F8] rounded-xl aspect-square w-full flex items-center justify-center overflow-hidden">
        {/* Wishlist Button Container with touch protection */}
        {/* <div 
          className="absolute top-2 right-2 z-20 scale-90 pointer-events-auto"
          onClick={stopSliderBubbling}
          onTouchStart={stopSliderBubbling}
        >
          <WishList productId={_id} isWishlisted={isWishlisted} />
        </div> */}

        {/* Product Image */}
        <div className="relative w-[80%] h-[80%]">
          {image?.url ? (
            <Image
              src={image.url}
              alt={image.alt || name || "Product Image"}
              fill
              className="object-contain mix-blend-multiply"
              sizes="(max-w-768px) 100vw, 300px"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
              No Image
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] line-clamp-1">
          {name || "Untitled Product"}
        </h3>

        {/* Price and Rating Row */}
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#888EA2] line-through text-base sm:text-lg">
              ₹{formattedOriginalPrice}
            </span>
            <span className="bg-[#C4C4C4] text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
              -25%
            </span>
          </div>
          
          {/* Stars Tracker */}
          <div className="flex text-[#FFC107] gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                size={14} 
                className="sm:size-4"
                color={i < safeRating ? "#FFC107" : "#E4E5E9"} 
              />
            ))}
          </div>
        </div>

        {/* Bottom Row: Final Price & Cart */}
        <div className="flex items-center justify-between mt-1 gap-2">
          <p className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A] truncate">
            ₹{formattedPrice}
          </p>
          
          {/* Cart Button Container with touch protection */}
          <div 
            className="pointer-events-auto shrink-0"
            onClick={stopSliderBubbling}
            onTouchStart={stopSliderBubbling}
          >
            <AddtoCart productId={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellerCard;
