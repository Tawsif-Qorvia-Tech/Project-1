'use client';

import { addToCart } from '@/actions/server/Cart';
import React, { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { LuShoppingCart } from 'react-icons/lu';
import Swal from 'sweetalert2';

const AddtoCart = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      const result = await addToCart(productId);

      if (result.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: result.message === "Item already in cart" ? "info" : "error",
          title: result.message || "Failed to add to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Cart error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="bg-[#AF008C]/60 hover:bg-[#c05da4] text-white p-3 rounded-2xl transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Add to cart"
      >
        <LuShoppingCart size={28} />
      </button>
    </div>
  );
};

export default AddtoCart;