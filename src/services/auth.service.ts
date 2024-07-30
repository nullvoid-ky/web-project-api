import { CommonUser } from "../types/user.type";
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
// Validate environment variables at module load
if (!process.env.ACCESS_TOKEN_SECRET || !process.env.ACCESS_TOKEN_EXPIRATION) {
  throw new Error("Missing environment variables for JWT secret or expiration");
}
export const authService = {
  async createAccessToken(user: CommonUser): Promise<string> {
    try {
      return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
      });
    } catch (error) {
      console.error("Error creating access token:", error);
      throw new Error("Failed to create access token");
    }
  },
  async hashPassword(password: string): Promise<string> {
    try {
      return argon2.hash(password);
    } catch (error) {
      console.error("Error hashing password:", error);
      throw new Error("Failed to hash password");
    }
  },
  async verifyPassword(
    hashedPassword: string,
    password: string
  ): Promise<boolean> {
    try {
      return argon2.verify(hashedPassword, password);
    } catch (error) {
      console.error("Error verifying password:", error);
      throw new Error("Failed to verify password");
    }
  },
};
