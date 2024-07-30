import { Request, Response } from "express";
import { boardgameService } from "../services/boardgame.service";
const boardgameController = {
  async createBoardgame(req: Request, res: Response) {
    try {
      const boardgameData = req.body;
      const boardgame = await boardgameService.createBoardgame(boardgameData);
      return res.status(201).json({ boardgame });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async readAllBoardgames(req: Request, res: Response) {
    try {
      console.log("Reading All Users...");
      const boardgames = await boardgameService.readAllBoardgames();
      if (!boardgames || boardgames.length === 0) {
        return res.status(404).send("No Users Found");
      }
      return res.status(200).json({ boardgames });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async readBoardgameById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const boardgame = await boardgameService.readBoardgameById(id);
      if (!boardgame) {
        return res.status(404).send("Boardgame Not Found");
      }
      return res.status(200).json({ boardgame });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async updateBoardgameById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedUser = await boardgameService.updateBoardgameById(
        id,
        updateData
      );
      if (!updatedUser) {
        return res.status(404).send("User Not Found");
      }
      return res.status(200).json({ updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async deleteBoardgameById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await boardgameService.deleteBoardgameById(id);
      if (!result) {
        return res.status(404).send("Boardgame Not Found");
      }
      return res.status(200).send("Boardgame Deleted Successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default boardgameController;
