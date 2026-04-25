import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';
import WishList from '../buttons/WishList';

const ProductsCard = ({ product }) => {
  const { name, tagline, price, moq, image, rating, isWishlisted } = product;

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden">

      {/* Top slate section — image + button */}
      <div className="bg-slate-50 p-4 pb-4 relative">

        {/* Wishlist Button */}
        <WishList isWishlisted={isWishlisted} productId={product._id} />

        {/* Product Image */}
        <div className="relative flex items-center justify-center h-48 mb-4">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* CTA Button */}
        <button className="btn w-full bg-neutral text-white rounded-[50px] border-none hover:bg-neutral-800 font-medium text-[18px] tracking-wide">
          Get Quote
        </button>

      </div>

      {/* Bottom white section — info */}
      <div className="bg-white px-4 pt-3 pb-4">

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(rating.average) ? 'text-amber-400' : 'text-gray-200'}
              size={14}
            />
          ))}
        </div>

        {/* Product Info */}
        <h3 className="text-[18px] font-semibold text-[#232323] leading-snug mb-1">
          {name} – {tagline}
        </h3>
        <p className="text-[18px] text-[#444444] font-semibold mb-1">
          MOQ: {moq.quantity} {moq.unit}
        </p>
        <p className="text-[18px] font-bold text-[#232323]">
          ${price.toFixed(2)}
        </p>

      </div>

    </div>
  );
};

export default ProductsCard;