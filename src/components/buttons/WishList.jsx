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
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Product removed from wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsWishlisted(false);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: result.message || "Failed to remove from wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        const result = await addToWishlist(productId, userId);
        
        if (result.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added to wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsWishlisted(true);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: result.message || "Failed to add to wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Wishlist error:", error);
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
