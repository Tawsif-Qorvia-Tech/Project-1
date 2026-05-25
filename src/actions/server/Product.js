"use server";

import { ObjectId } from "mongodb";
import { collections, dbConnect } from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const result = await collection.find().toArray();
    
    return result.map(product => ({
      ...product,
      _id: product._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    if (!id || id.length !== 24) return null;

    const collection = await dbConnect(collections.PRODUCTS);
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) return null;

    return {
      ...product,
      _id: product._id.toString(),
    };
  } catch (error) {
    console.error("Error fetching single product layout data:", error);
    return null;
  }
};

export const DeleteProduct = async (payload) => {
  try {
    const { productId } = payload;

    // check payload
    if (!productId) {
      return { success: false, message: "productId is required" };
    }

    // connect to database
    const productsCollection = await dbConnect(collections.PRODUCTS);
    
    // convert string id to MongoDB ObjectId
    const objectId = new ObjectId(productId);

    // delete product
    const result = await productsCollection.deleteOne({ _id: objectId });
    
    if (result.deletedCount === 1) {
      return {
        success: true,
        message: "Product deleted successfully",
      };
    }
    
    return { success: false, message: "Product not found" };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, message: "database connection failed" };
  }
};