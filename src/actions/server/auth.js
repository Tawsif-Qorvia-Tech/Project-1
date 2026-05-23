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

