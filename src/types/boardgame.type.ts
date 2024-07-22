import { GameType } from "../enums/gametype.enum";

export type Boardgame = {
  _id: string;
  name: string;
  type: GameType[];
  pic: {
    cover: string;
    banner: string;
    item1: string;
    item2: string;
  };
};
