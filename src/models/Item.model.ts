import mongoose, { Model } from "mongoose";
// import { userSchema } from "../schemas/user.schema";
// import { UserInterface } from "../interfaces/user.interface";
import { itemSchema } from "../schemas/item.schema";
import { ItemInterface } from "../interfaces/item.interface";
const Item: Model<ItemInterface> = mongoose.model<ItemInterface>(
  "Item",
  itemSchema,
  "ItemDataBase"
);
export { Item };
