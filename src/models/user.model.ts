import mongoose, { Model } from "mongoose";
import { userSchema } from "../schemas/user.schema";
import { UserInterface } from "../interfaces/user.interface";

const User: Model<UserInterface> = mongoose.model<UserInterface>(
  "User",
  userSchema,
  "users"
);
export { User };