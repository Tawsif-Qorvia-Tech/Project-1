"use server";

import { ObjectId } from "mongodb";
import { collections, dbConnect } from "@/lib/dbConnect";

// Helper function to upload image to imgbb
const uploadToImgbb = async (base64Image) => {
  try {
    const formData = new FormData();
    formData.append("image", base64Image);
    formData.append("key", process.env.IMAGE_HOST_KEY);

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return data.data.url;
    }
    return null;
  } catch (error) {
    console.error("Error uploading to imgbb:", error);
    return null;
  }
};

// Helper to normalize images to always be [{ url, alt }]

const normalizeImages = (images, fallbackAlt = "") => {
  if (!images) return [];
  if (typeof images === "string") return [{ url: images, alt: fallbackAlt }];
  if (Array.isArray(images)) {
    return images
      .filter(Boolean)
      .map((img) =>
        typeof img === "string" ? { url: img, alt: fallbackAlt } : img,
      );
  }
  return [];
};

export const getProducts = async () => {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const result = await collection.find().toArray();

    return result.map((product) => ({
      ...product,
      _id: product._id.toString(),
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
    console.error("Error deleting product:", error);
    return { success: false, message: "database connection failed" };
  }
};

// export const PostProduct = async (payload) => {
//   try {
//     const {
//       category,
//       name,
//       tagline,
//       price,
//       moqQuantity,
//       moqUnit,
//       summary,
//       whySupplement,
//       nutritionalValueAmount,
//       nutritionalValues,
//       uniqueFeatures,
//       indications,
//       inclusionRates,
//       images,
//     } = payload;

//     // Check payload
//     if (!name || !category || !price || !moqQuantity || !summary) {
//       return { success: false, message: "Required fields are missing" };
//     }

//     // Upload images to imgbb
//     const imageUrls = [];
//     if (images && images.length > 0) {
//       for (const image of images) {
//         const url = await uploadToImgbb(image.src);
//         if (url) {
//           imageUrls.push(url);
//         }
//       }
//     }

//     // Connect to database
//     const productsCollection = await dbConnect(collections.PRODUCTS);

//     const newProduct = {
//       category,
//       name,
//       tagline: tagline || "",
//       price: parseFloat(price),
//       moqQuantity: parseInt(moqQuantity),
//       moqUnit,
//       summary,
//       whySupplement: whySupplement || "",
//       nutritionalValueAmount: nutritionalValueAmount || "10 ml.",
//       nutritionalValues: nutritionalValues || [],
//       uniqueFeatures: uniqueFeatures || [],
//       indications: indications || [],
//       inclusionRates: inclusionRates || [],
//       images: imageUrls,
//       rating: {
//         average: 0,
//         count: 0,
//       },
//       createdAt: new Date(),
//     };

//     // Insert product
//     const result = await productsCollection.insertOne(newProduct);
//     if (result.acknowledged) {
//       return {
//         success: true,
//         message: "Product created successfully",
//         productId: result.insertedId?.toString(),
//       };
//     }

//     return { success: false, message: "Failed to create product" };
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return { success: false, message: "Database connection failed" };
//   }
// };

export const PostProduct = async (payload) => {
  try {
    const {
      category,
      name,
      tagline,
      price,
      moqQuantity,
      moqUnit,
      summary,
      whySupplement,
      nutritionalValueAmount,
      nutritionalValues,
      uniqueFeatures,
      indications,
      inclusionRates,
      images,
    } = payload;

    // Check payload
    if (!name || !category || !price || !moqQuantity || !summary) {
      return { success: false, message: "Required fields are missing" };
    }

    // Upload image to imgbb
    let uploadedImages = [];
    if (images && images.length > 0) {
      try {
        // Replace with:
        const base64Data =
          typeof images[0] === "string" && images[0].includes(",")
            ? images[0].split(",")[1]
            : images[0];

        if (typeof base64Data !== "string") {
          console.error(
            "Invalid image format — expected base64 string, got:",
            typeof base64Data,
          );
        } else {
          const formData = new FormData();
          formData.append("image", base64Data);

          const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.IMAGE_HOST_KEY}`,
            { method: "POST", body: formData },
          );

          const data = await response.json();

          if (data.success) {
            uploadedImages = [
              {
                url: data.data.url,
                alt: name,
              },
            ];
          } else {
            console.error("imgbb upload failed:", data.error);
          }
        }
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }

    // Connect to database
    const productsCollection = await dbConnect(collections.PRODUCTS);

    const newProduct = {
      category,
      name,
      tagline: tagline || "",
      price: parseFloat(price),
      moqQuantity: parseInt(moqQuantity),
      moqUnit,
      summary,
      whySupplement: whySupplement || "",
      nutritionalValueAmount: nutritionalValueAmount || "10 ml.",
      nutritionalValues: nutritionalValues || [],
      uniqueFeatures: uniqueFeatures || [],
      indications: indications || [],
      inclusionRates: inclusionRates || [],
      image: uploadedImages[0] || null, // always an array of { url, alt }
      rating: {
        average: 0,
        count: 0,
      },
      createdAt: new Date(),
    };

    const result = await productsCollection.insertOne(newProduct);
    if (result.acknowledged) {
      return {
        success: true,
        message: "Product created successfully",
        productId: result.insertedId?.toString(),
      };
    }

    return { success: false, message: "Failed to create product" };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: "Database connection failed" };
  }
};
