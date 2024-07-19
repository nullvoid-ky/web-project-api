import authController from "../controller/auth.controller";
const authRouter = require("express").Router();

authRouter.post("/register", authController.register);

export default authRouter;
