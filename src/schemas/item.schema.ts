import { Schema } from "mongoose";

export const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
    },
    serial: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
