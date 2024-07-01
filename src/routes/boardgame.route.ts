const boardgameRouter = require('express').Router();

import boardgameController from "src/controllers/boardgame.controller";

boardgameRouter.get('/games', boardgameController.showAllGame);
boardgameRouter.post('/create-boardgame', boardgameController.createGame);

export default boardgameRouter;