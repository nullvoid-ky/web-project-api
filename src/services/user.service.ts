import mongoose from "mongoose";
import { AuthUser } from "../types/auth.type";
import { User } from "../models/user.model";

export const userService = {
    async getUserByUsername(username: string){
        try {
            const user = await User.findOne({ username });
            return user;
        } catch (error) {
            console.error(error);
            const err : Error = error as Error;
            throw new Error(err.message);
        }
    },
    async createUser(authData: AuthUser){
        try {
            const user = new User(authData);
            await user.save();
            return user;
        } catch (error) {
            console.error(error);
            const err : Error = error as Error;
            throw new Error(err.message);
        }
    }
};