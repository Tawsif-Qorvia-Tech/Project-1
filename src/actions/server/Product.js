import { collections, dbConnect } from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const result = await collection.find().toArray();
    
    // Convert ObjectId to string for client components
    return result.map(product => ({
      ...product,
      _id: product._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};