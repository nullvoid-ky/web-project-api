import express from "express";
import boardgameController from "../controller/boardgame.controller";
const boardgameRouter = express.Router();

boardgameRouter.post("/create", boardgameController.createBoardgame);
boardgameRouter.get("/read-all", boardgameController.readAllBoardgames);
boardgameRouter.get("/:id", boardgameController.readBoardgameById);
boardgameRouter.put("/:id", boardgameController.updateBoardgameById);
boardgameRouter.delete("/:id", boardgameController.deleteBoardgameById);

export default boardgameRouter;
