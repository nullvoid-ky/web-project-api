const authRouter = require('express').Router();

import authController from "src/controllers/auth.controller";

authRouter.post('/register', authController.register);

export default authRouter;