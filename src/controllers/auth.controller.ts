import { Response } from "express";
import { AuthRequestDto } from "src/dto/auth.dto";
import { userService } from "src/services/user.service";
import { authService } from "src/services/auth.service";
import { Role } from "src/enums/role.enum";

const authController = {
    async register(req: AuthRequestDto, res: Response) {
        try {
            const user = await userService.getUserByUsername(req.body.username);
            if (user)
                return res.status(400).send("User already exists");
            const hashedPassword = await authService.hashPassword(req.body.password);
            const newUser = await userService.createUser({ username: req.body.username, password: hashedPassword });
            const accessToken = await authService.createAccessToken({ _id: newUser._id, role: Role.USER });
            return res.status(201).json({ accessToken, newUser });
        } catch (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
    },
};

export default authController;