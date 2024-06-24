import { Document } from 'mongoose';

export interface UserInterface extends Document {
    _id: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}