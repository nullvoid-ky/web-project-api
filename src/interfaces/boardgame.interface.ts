import { Document } from 'mongoose';
export interface topic {
    name: string;
}

export interface BoardgameInterface extends Document {
    _id: string;
    name: string;
    topic: Array<string>;
    short: string
    description: string;
    imgUrl: string;
    __v: number;
}