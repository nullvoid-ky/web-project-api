import { boardgame } from "../models/boardgame.model";
import { BoardgameInterface } from "../interfaces/boardgame.interface";

export const boardgameService = {
  async createBoardgame(boardgameData: BoardgameInterface) {
    try {
      const game = new boardgame(boardgameData);
      await game.save();
      return game;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },

  async readBoardgameById(id: string) {
    try {
      const game = await boardgame.findById(id);
      return game;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },

  async readAllBoardgames() {
    try {
      const games = await boardgame.find();
      return games;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },

  async updateBoardgameById(id: string, boardgameData: BoardgameInterface) {
    try {
      const game = await boardgame.findByIdAndUpdate(id, boardgameData, {
        new: true,
      });
      return game;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },

  async deleteBoardgameById(id: string) {
    try {
      const game = await boardgame.findByIdAndDelete(id);
      return game;
    } catch (error) {
      console.error(error);
      const err: Error = error as Error;
      throw new Error(err.message);
    }
  },
};
