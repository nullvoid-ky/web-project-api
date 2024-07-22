import mongoose from "mongoose";
import { AuthUser } from "../types/auth.type";
import { User } from "../models/user.model";
import { UpdateUserData } from "../types/user.type";

export const userService = {
  async createUser(authData: AuthUser) {
    try {
      const user = new User(authData);
      await user.save();
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  },

  async readUserById(id: string) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Error reading user");
    }
  },

  async readAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error("Error reading users");
    }
  },

  async readUserByUsername(username: string) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Error reading user by username");
    }
  },

  async updateUserById(id: string, updateData: UpdateUserData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        updateData,
        { new: true } // Return the updated document
      );
      return updatedUser;
    } catch (error) {
      console.error(error);
      throw new Error("Error updating user");
    }
  },

  async deleteUserById(id: string) {
    try {
      const result = await User.findByIdAndDelete(id);
      return result !== null;
    } catch (error) {
      console.error(error);
      throw new Error("Error deleting user");
    }
  },
};
