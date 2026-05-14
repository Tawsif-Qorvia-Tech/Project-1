"use client";

import { addToCart } from "@/actions/server/Cart";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import Swal from "sweetalert2";

const AddtoCart = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      const result = await addToCart(productId);

      if (result.success) {
       Toast.fire({ icon: "success", title: "Product added to cart" });
      } else {
       Toast.fire({ icon: "info", title: result.message || "Failed to add to cart" });
      }
    } catch (error) {
      console.error("Cart error:", error);
    Toast.fire({ icon: "info", title: "Something went wrong" });
    } finally {
      setIsLoading(false);
    }
  };

    const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      popup: "!flex !flex-row !items-center !gap-3 !px-4 !py-2 !min-h-0 !w-auto",
      icon: "!m-0 !w-7 !h-7 !text-sm",
      title: "!m-0 !text-sm !font-medium",
    },
  });

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
