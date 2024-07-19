import { Document } from "mongoose";

export interface ItemInterface extends Document {
  _id: string;
  name: string;
  serial: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
