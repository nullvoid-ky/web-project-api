import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { Role } from "../enums/role.enum";
import { AuthRequestDto } from "../dto/auth.dto";
import { UserInterface } from "../interfaces/user.interface";

const authController = {
  async register(req: AuthRequestDto, res: Response) {
    try {
      console.log("Creating User . . .");
      const user = await userService.getUserByUsername(req.body.username);
      if (user) return res.status(400).send("User already exists");
      const hashedPassword = await authService.hashPassword(req.body.password);
      const newUser = await userService.createUser({
        username: req.body.username,
        password: hashedPassword,
      });
      let accessToken = "";
      try {
        accessToken = await authService.createAccessToken({
          _id: newUser._id,
          role: Role.USER,
        });
      } catch {
        return res.status(400).send("Created but Access Token Fail");
      }
      return res.status(201).json({ accessToken, newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
  async login(req: AuthRequestDto, res: Response) {
    try {
      const user = await userService.getUserByUsername(req.body.username);
      if (!user) return res.status(400).send("User does not exist");
      const verify = await authService.verifyPassword(
        user.password,
        req.body.password
      );
      if (verify) {
        const accessToken = await authService.createAccessToken({
          _id: user._id,
          role: Role.USER,
        });
        return res.status(201).json({ accessToken, user });
      }
      return res.status(400).send("Invalid Password");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default authController;
