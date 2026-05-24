"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const PostLeads = async (payload) => {
  try {
    const { productName, name, email, number, query } = payload;

    // Validate payload
    if (!productName || !name || !email || !number || !query) {
      return { success: false, message: "All fields are required" };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Invalid email format" };
    }

    // Connect to database
    const leadsCollection = await dbConnect(collections.LEADS);

    // Create new lead document
    const newLead = {
      productName,
      name,
      email,
      number,
      query,
      createdAt: new Date(),
      status: "pending", // Default status for new leads
    };

    // Insert lead into database
    const result = await leadsCollection.insertOne(newLead);

    if (result.acknowledged) {
      return {
        success: true,
        message: "Lead submitted successfully. We will contact you soon!",
        leadId: result.insertedId?.toString(),
      };
    }

    return { success: false, message: "Failed to submit lead" };
  } catch (error) {
    console.error("Error creating lead:", error);
    return { success: false, message: "Database connection failed" };
  }
};


export const getLeads = async () => {
  try {
    const collection = await dbConnect(collections.LEADS);
    const result = await collection.find().toArray();
    
    return result.map(lead => ({
      ...lead,
      _id: lead._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
  }
};

