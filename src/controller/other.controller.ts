import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { otherService } from "../services/other.service";
import { Role } from "../enums/role.enum";
import { OtherRequestDto } from "../dto/other.dto";
const otherController = {
  async add(req: OtherRequestDto, res: Response) {
    try {
      console.log("Creating item . . .");
      const hashedSerial = await authService.hashPassword(req.body.serial);
      const newItem = await otherService.createItem({
        name: req.body.name,
        serial: hashedSerial,
      });
      const accessToken = await authService.createAccessToken({
        _id: newItem._id,
        role: Role.USER,
      });
      // if (user) return res.status(400).send("User already exists");
      // const hashedPassword = await authService.hashPassword(req.body.password);
      // const newUser = await userService.createUser({
      //   username: req.body.username,
      //   password: hashedPassword,
      // });
      // const accessToken = await authService.createAccessToken({
      //   _id: newUser._id,
      //   role: Role.USER,
      // });
      return res.status(201).json({ accessToken, newItem });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
  async check(req: Request, res: Response) {
    try {
      console.log("Checked");
      res.status(201).send("Check");
    } catch {
      res.status(500).send("Internal Server Error");
    }
  },
};

export default otherController;
