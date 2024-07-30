import express from "express";
import userController from "../controller/user.controller";
import tokenController from "../controller/token.controller";

const userRouter = express.Router();

// userRouter.post("/create", userController.createUser);
userRouter.get("/read-all", tokenController, userController.readAllUsers);
userRouter.get("/:id", tokenController, userController.readUserById);
userRouter.put("/:id", tokenController, userController.updateUserById);
userRouter.delete("/:id", tokenController, userController.deleteUserById);

export default userRouter;
