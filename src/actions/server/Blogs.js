import { collections, dbConnect } from "@/lib/dbConnect";

export const getBlogs = async () => {
  try {
    const collection = await dbConnect(collections.BLOGS);
    const result = await collection.find().toArray();
    
    return result.map(blog => ({
      ...blog,
      _id: blog._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};