import express from "express";
import userController from "../controller/user.controller";

const userRouter = express.Router();

// userRouter.post("/create", userController.createUser);
userRouter.get("/read-all", userController.readAllUsers);
userRouter.get("/:id", userController.readUserById);
userRouter.put("/:id", userController.updateUserById);
userRouter.delete("/:id", userController.deleteUserById);

export default userRouter;
