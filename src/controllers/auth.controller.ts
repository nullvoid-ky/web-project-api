import { Request, Response } from "express";

export const authController = {
    async login(req: Request, res: Response) {
        res.send("Login successful!");
    },
};