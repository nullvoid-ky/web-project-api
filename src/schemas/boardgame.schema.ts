import { Schema } from "mongoose";
import { GameType } from "../enums/gametype.enum";

export const boardgameSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 100, // Adjust the maxlength as needed
    },
    type: {
      type: [String], // Assuming GameType is an enum of strings
      enum: Object.values(GameType), // Ensure values are from GameType enum
      required: true,
      validate: {
        validator: function (value: string[]) {
          return value.length >= 2 && value.length <= 3; // Ensures the array has at least 2 and at most 3 items
        },
        message: "The 'type' field must contain between 2 and 3 values.",
      },
    },
    pic: {
      cover: {
        type: String,
        required: true,
      },
      banner: {
        type: String,
        required: true,
      },
      item1: {
        type: String,
        required: false,
      },
      item2: {
        type: String,
        required: false,
      },
    },
    price: {
      money: {
        type: Number,
        required: true,
      },
      point: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
    // Add a pre-save hook to enforce custom validation
    hooks: {
      pre: {
        save: async function (next) {
          if (!this.pic.item1) {
            this.pic.item1 = this.pic.cover; // Set item1 to cover if item1 is not provided
          }
          if (!this.pic.item2) {
            this.pic.item1 = this.pic.cover; // Set item1 to cover if item1 is not provided
          }
          next();
        },
      },
    },
  }
);
