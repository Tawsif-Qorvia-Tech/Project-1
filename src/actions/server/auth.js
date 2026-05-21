"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const verifyAdmin = async (email, password) => {
	try {
		const usersCollection = await dbConnect(collections.ADMIN);

		const user = await usersCollection.findOne({ email });

		if (!user) {
			return { success: false, message: "User not found" };
		}

		// NOTE: passwords are stored in plain-text in the provided DB structure.
		// In production this must use hashed passwords and proper verification.
		if (user.password !== password) {
			return { success: false, message: "Invalid credentials" };
		}

		if (user.role !== "admin") {
			return { success: false, message: "Not an admin" };
		}

		return {
			success: true,
			message: "Authenticated",
			user: {
				_id: user._id.toString(),
				email: user.email,
				role: user.role,
			},
		};
	} catch (error) {
		console.error("Error verifying admin:", error);
		return { success: false, message: "Server error" };
	}
};

