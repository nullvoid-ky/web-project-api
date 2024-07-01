const authRouter = require('express').Router();

import authController from "src/controllers/auth.controller";

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

export default authRouter;