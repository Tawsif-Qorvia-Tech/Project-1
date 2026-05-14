"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Swal from "sweetalert2";
import { addToWishlist, removeFromWishlist } from "@/actions/server/WishList";

const WishList = ({ isWishlisted: initialWishlisted, productId }) => {
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted);
  const [isLoading, setIsLoading] = useState(false);

  const toggleWishlist = async () => {
    setIsLoading(true);

    const userId = "guest-user"; // TODO: Replace with actual authenticated user ID
    
    try {
      if (isWishlisted) {
        const result = await removeFromWishlist(productId, userId);
        
        if (result.success) {
          Toast.fire({ icon: "info", title: "Removed from wishlist" });
          setIsWishlisted(false);
        } else {
         Toast.fire({ icon: "error", title: "Failed to remove from wishlist" });
        }
      } else {
        const result = await addToWishlist(productId, userId);
        
        if (result.success) {
         Toast.fire({ icon: "success", title: "Added to wishlist" });
          setIsWishlisted(true);
        } else {
         Toast.fire({ icon: "error", title: result.message || "Failed to update wishlist" });

        }
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      Toast.fire({ icon: "error", title: "Something went wrong" });
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
    <button 
      onClick={toggleWishlist}
      disabled={isLoading}
      className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-pink-400 flex items-center justify-center hover:bg-pink-100 transition-colors duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isWishlisted ? (
        <FaHeart className="text-pink-500 text-sm" />
      ) : (
        <FiHeart className="text-pink-400 text-sm" />
      )}
    </button>
  );
};

export default WishList;
