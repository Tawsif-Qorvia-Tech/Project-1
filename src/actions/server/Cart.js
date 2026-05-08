"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const addToCart = async (productId, userId) => {
  try {
    const CartCollection = await dbConnect(collections.CART);
    
    const existing = await CartCollection.findOne({ productId, userId });
    
    if (existing) {
      return { success: false, message: "Item already in cart" };
    }

    const result = await CartCollection.insertOne({
      productId,
      userId : "101",
      createdAt: new Date()
    });
    
    return { success: true, message: "Added to cart", id: result.insertedId.toString() };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { success: false, message: "Failed to add to cart" };
  }
};