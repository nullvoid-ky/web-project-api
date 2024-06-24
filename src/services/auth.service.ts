import { CommonUser } from "src/types/user.type";

const argon2 = require('argon2');
const jwt = require("jsonwebtoken");

export const authService = {
    async createAccessToken(user: CommonUser): Promise<string> {
        try {
            return await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async hashPassword(password: string): Promise<string> {
        try {
            return await argon2.hash(password);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async verifyPassword(hashedPassword: string, password: string): Promise<boolean> {
        try {
            return await argon2.verify(hashedPassword, password);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
};