import { Document } from "mongoose";
import { GameType } from "../enums/gametype.enum";

export interface BoardgameInterface extends Document {
  _id: string;
  name: string;
  type: GameType[];
  pic: {
    cover: string;
    banner: string;
    item1: string;
    item2: string;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
