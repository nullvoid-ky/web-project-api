import mongoose from "mongoose";
import { User } from "src/models/user.model";
import { AuthUser } from "src/types/auth.type";

export const userService = {
    async getUserByUsername(username: string) {
        try {
            const user = await User.findOne({ username });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async createUser(authData: AuthUser) {
        try {
            const user = new User(authData);
            await user.save();
            return user;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async showAllUser() {
        try {
            const user = await User.find()
            console.log(user)
            return user

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
};