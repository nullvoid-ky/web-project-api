import { Response } from "express";
import { AuthRequestDto } from "src/dto/auth.dto";
import { userService } from "src/services/user.service";

const authController = {
    async register(req: AuthRequestDto, res: Response) {
        try {
            const user = await userService.getUserByUsername(req.body.username);
            if (user)
                return res.status(400).send("User already exists");
            const newUser = await userService.createUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
    },
};

export default authController;