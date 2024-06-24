import { Request, Response } from "express";
import { AuthRequestDto } from "src/dto/auth.dto";

const authController = {
    async register(req: AuthRequestDto, res: Response) {
        try {
            res.status(201).json(req.body);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
};

export default authController;