"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const addToWishlist = async (productId, userId) => {
  try {
    const wishlistCollection = await dbConnect(collections.WISHLIST);
    const productsCollection = await dbConnect(collections.PRODUCTS);
    
    const existing = await wishlistCollection.findOne({ productId, userId });
    
    if (existing) {
      return { success: false, message: "Item already in wishlist" };
    }

    const result = await wishlistCollection.insertOne({
      productId,
      userId,
      createdAt: new Date()
    });
    
    await productsCollection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: { isWishlisted: true } }
    );
    
    return { success: true, message: "Added to wishlist", id: result.insertedId.toString() };
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return { success: false, message: "Failed to add to wishlist" };
  }
};

export const removeFromWishlist = async (productId, userId) => {
  try {
    const wishlistCollection = await dbConnect(collections.WISHLIST);
    const productsCollection = await dbConnect(collections.PRODUCTS);
    
    const result = await wishlistCollection.deleteOne({ productId, userId });
    
    if (result.deletedCount === 0) {
      return { success: false, message: "Item not found in wishlist" };
    }
    
    await productsCollection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: { isWishlisted: false } }
    );
    
    return { success: true, message: "Removed from wishlist" };
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return { success: false, message: "Failed to remove from wishlist" };
  }
};

export const getWishlist = async (userId) => {
  try {
    const collection = await dbConnect(collections.WISHLIST);
    const result = await collection.find({ userId }).toArray();
    
    return result.map(item => ({
      ...item,
      _id: item._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return [];
  }
};
