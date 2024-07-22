import mongoose, { Model } from "mongoose";
import { BoardgameInterface } from "../interfaces/boardgame.interface";
import { boardgameSchema } from "../schemas/boardgame.schema";

const boardgame: Model<BoardgameInterface> = mongoose.model<BoardgameInterface>(
  "boardgame",
  boardgameSchema,
  "BoardgamesDatabase"
);
export { boardgame };
