const utilRouter = require('express').Router();

import utilController from "src/controllers/util.controller";

utilRouter.get('/users', utilController.showAllUser);

export default utilRouter;