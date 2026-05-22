"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

export const LoginUser = async (payload) => {
  try {
    const { email, password } = payload;

    //check payload
    if (!email || !password) {
      return null;
    }

    //check db for user
    const usersCollection = await dbConnect(collections.USERS);
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return null;
    }

    //check if user has a password (credentials provider)
    if (!user.password) {
      return null;
    }
    
    const isMatched = await bcrypt.compare(password, user?.password);
    if (isMatched) {
      return user;
    }
    
    return null;
  } catch (error) {
    console.error('Error logging in user:', error);
    return null;
  }
};

export const PostUser = async (payload) => {
  try {
    const { email, password} = payload;
    
    //check payload
    if (!email || !password) {
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
      role: "user", 
      createdAt: new Date(),
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