import { Response } from "express";
import { UtilRequestDto } from "src/dto/util.dto";
import { userService } from "src/services/user.service";

const utilController = {
    async showAllUser(req: UtilRequestDto, res: Response) {
        try {
            const user = await userService.showAllUser()
            if (!user)
                return res.status(400).send("None User");
            return res.status(201).json({ user });
        } catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    },
};

export default utilController;