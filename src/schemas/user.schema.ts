import { Schema } from 'mongoose';

export const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            maxlength: 20,
        },
        displayname:{
            type: String,
            required: false,
            unique: false,
            maxlength: 30,
        },
        password: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: false,
            unique: false,
            maxlength: 50,
        },
        tel:{
            type: String,
            required: false,
            unique: false,
            maxlength: 20,
        },
        birthdate:{
            type: String,
            required: false,
            unique: false,
            maxlength: 20,
        }
    },
    { 
        timestamps: true,
    }
);