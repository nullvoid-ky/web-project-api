import authController from "../controller/auth.controller";
const authRouter = require("express").Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/change-password", authController.changePassword);
export default authRouter;
