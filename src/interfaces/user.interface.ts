import { Document } from "mongoose";

export interface UserInterface extends Document {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  displayname?: string;
  email?: string;
  tel?: string;
  birthdate?: string;
  __v: number;
}
