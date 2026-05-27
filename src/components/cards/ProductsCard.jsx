"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import QuoteModal from "../shared/QuoteModal";

const ProductsCard = ({ product }) => {
  const { name, tagline, price, moqQuantity, image, rating, moqUnit } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Link
        href={`/our-products/${product.slug}`}
        className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[100%] snap-start block"
      >
        {/* Top slate section — image + button */}
        <div className="bg-[#F3F5F7] p-3 sm:p-5 pb-3 sm:pb-4 relative">
          {/* Product Image */}
          <div className="relative w-full h-36 sm:h-48 mb-3 sm:mb-4">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-contain p-2"
            />
          </div>
          {/* CTA with Modal trigger */}
          <div className="btn w-full bg-neutral text-white rounded-[50px] border-none hover:bg-neutral-800 font-medium text-m sm:text-[18px] tracking-wide min-h-10 h-10 sm:min-h-12 sm:h-12 flex items-center justify-center cursor-pointer">
            View Details
          </div>
        </div>

        {/* Bottom white section — info */}
        <div className="bg-white px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
          {/* Rating */}
          <div className="flex items-center gap-0.5 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating?.average ?? 0)
                    ? "text-amber-400"
                    : "text-gray-200"
                }
                size={12}
              />
            ))}
          </div>
          {/* Product Info */}
          <h3 className="text-m sm:text-[18px] font-semibold text-[#232323] leading-snug mb-1">
            {name} – {tagline}
          </h3>
          <p className="text-m sm:text-[18px] text-[#444444] font-semibold mb-1">
            MOQ: {moqQuantity} {moqUnit}
          </p>
          <p className="text-m sm:text-[18px] font-bold text-[#232323]">
            ₹{price.toFixed(2)}
          </p>
        </div>
      </Link>

      {/* Form Modal */}
      <QuoteModal
        productName={`${name} – ${tagline}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductsCard;
