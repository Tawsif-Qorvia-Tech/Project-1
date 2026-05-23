"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const getUsers = async () => {
  try {
    const collection = await dbConnect(collections.USERS);
    const result = await collection.find().toArray();
    
    return result.map(user => ({
      ...user,
      _id: user._id.toString()
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const PostUser = async (payload) => {
  try {
    const { email, password, name, number } = payload;
    
    //check payload
    if (!email || !password || !name || !number) {
      return { success: false, message: "empty payload" };
    }
    
    //check user
    const usersCollection = await dbConnect(collections.USERS);
    const isExist = await usersCollection.findOne({ email });
    if (isExist) {
      return { success: false, message: "user already exists" };
    }

    const newUser = {
      email,
      password: await bcrypt.hash(password, 10),

      role: "manager", 
      createdAt: new Date(),
      name,
      number,
    };

    //insert user
    const result = await usersCollection.insertOne(newUser);
    if (result.acknowledged) {
      return {
        success: true,
        message: "User created successfully",
        userId: result.insertedId?.toString(),
      };
    }
    
    return { success: false, message: "failed to create user" };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, message: "database connection failed" };
  }
};

export const DeleteUser = async (payload) => {
  try {
    const { userId } = payload;

    // check payload
    if (!userId) {
      return { success: false, message: "userId is required" };
    }

    // connect to database
    const usersCollection = await dbConnect(collections.USERS);
    
    // convert string id to MongoDB ObjectId
    const { ObjectId } = require("mongodb");
    const objectId = new ObjectId(userId);

    // delete user
    const result = await usersCollection.deleteOne({ _id: objectId });
    
    if (result.deletedCount === 1) {
      return {
        success: true,
        message: "User deleted successfully",
      };
    }
    
    return { success: false, message: "User not found" };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, message: "database connection failed" };
  }
};