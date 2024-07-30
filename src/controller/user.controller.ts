import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UpdateUserRequestDto } from "../dto/user.dto";
import { UserInterface } from "../interfaces/user.interface";
import { UpdateUserData } from "../types/user.type";
import tokenController from "./token.controller";
const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      return res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async readAllUsers(req: Request, res: Response) {
    try {
      console.log("Reading All Users...");
      const users = await userService.readAllUsers();
      if (!users || users.length === 0) {
        return res.status(404).send("No Users Found");
      }
      return res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async readUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.readUserById(id);
      if (!user) {
        return res.status(404).send("User Not Found");
      }
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async updateUserById(req: UpdateUserRequestDto, res: Response) {
    try {
      const { id } = req.params; // Extract ID from URL params
      const updateData = req.body;
      const { password, username, ...filteredData } = updateData;
      if (username || password) {
        return res
          .status(400)
          .send("Cannot Update Username or Password By This Method");
      }
      // Call service to update user
      const updatedUser = await userService.updateUserById(id, filteredData);

      // Check if user was found and updated
      if (!updatedUser) {
        return res.status(404).send("User Not Found");
      }

      return res.status(200).json({ updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async deleteUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await userService.deleteUserById(id);
      if (!result) {
        return res.status(404).send("User Not Found");
      }
      return res.status(200).send("User Deleted Successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default userController;
