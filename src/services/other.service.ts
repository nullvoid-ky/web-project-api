import mongoose from "mongoose";
import { AuthItem, AuthUser } from "../types/auth.type";
import { User } from "../models/user.model";
import { Item } from "../models/Item.model";

export const otherService = {
  async createItem(authData: AuthItem) {
    try {
      const item = new Item(authData);
      await item.save();
      return item;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },
};
