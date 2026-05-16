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