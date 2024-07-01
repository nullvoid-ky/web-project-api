import { Schema } from 'mongoose';

export const boardgameSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        topic: {
            type: Array,
            default: [],
            required: false,
        },
        short: {
            type: String,
            required: false,
            unique: false,
            maxlength: 200,
        },
        description: {
            type: String,
            required: true,
            unique: false,
            maxlength: 500,
        },
        imgUrl: {
            type: String,
            required: false,
            unique: false,
            maxlength: 500,
        }
    },
    { 
        timestamps: true,
    }
);