import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { Role } from "../enums/role.enum";
import { AuthRequestDto, AuthRePassRequestDto } from "../dto/auth.dto";
import { UserInterface } from "../interfaces/user.interface";

// Password validation function
const validatePassword = (password: string): boolean => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  );
};

const validateUsername = (username: string): boolean => {
  const minLength = 4;
  return /^[a-zA-Z0-9]{4,}$/.test(username);
};

const authController = {
  async register(req: AuthRequestDto, res: Response) {
    try {
      console.log("Creating User . . .");
      const { username, password, displayname, email, tel, birthdate } =
        req.body;

      if (!validateUsername(username)) {
        return res
          .status(400)
          .send(
            "Username must be at least 4 characters long and contain only letters or numbers."
          );
      }

      if (!validatePassword(password)) {
        return res
          .status(400)
          .send(
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
          );
      }

      const existingUser = await userService.readUserByUsername(username);
      if (existingUser) {
        return res.status(400).send("User already exists");
      }

      const hashedPassword = await authService.hashPassword(password);
      const newUser: UserInterface = await userService.createUser({
        username,
        password: hashedPassword,
        displayname,
        email,
        tel,
        birthdate,
      });

      let accessToken = "";
      try {
        accessToken = await authService.createAccessToken({
          _id: newUser._id,
          role: Role.USER,
        });
      } catch (tokenError) {
        console.error("Access Token Creation Error:", tokenError);
        return res
          .status(400)
          .send("User created but failed to generate access token");
      }

      return res.status(201).json({ accessToken, newUser });
    } catch (error) {
      console.error("Registration Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async login(req: AuthRequestDto, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await userService.readUserByUsername(username);
      if (!user) {
        return res.status(400).send("User does not exist");
      }

      const isPasswordValid = await authService.verifyPassword(
        user.password,
        password
      );
      if (isPasswordValid) {
        const accessToken = await authService.createAccessToken({
          _id: user._id,
          role: Role.USER,
        });
        return res.status(200).json({ accessToken, user });
      }

      return res.status(400).send("Invalid Password");
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async changePassword(req: AuthRePassRequestDto, res: Response) {
    try {
      const { username, oldPassword, newPassword } = req.body;

      if (!username) {
        return res.status(400).send("Username is required");
      }
      if (!newPassword) {
        return res.status(400).send("New password is required");
      }
      if (!validatePassword(newPassword)) {
        return res
          .status(400)
          .send(
            "New password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
          );
      }

      // Fetch the user by username
      const user = await userService.readUserByUsername(username);
      if (!user) {
        return res.status(404).send("User not found");
      }

      // Verify the old password
      const isOldPasswordValid = await authService.verifyPassword(
        user.password,
        oldPassword
      );
      if (!isOldPasswordValid) {
        return res.status(400).send("Old password is incorrect");
      }

      // Check if the new password is the same as the old password
      const isNewPasswordSameAsOld = await authService.verifyPassword(
        user.password,
        newPassword
      );
      if (isNewPasswordSameAsOld) {
        return res
          .status(400)
          .send("New password cannot be the same as the old password");
      }

      // Hash the new password
      const hashedNewPassword = await authService.hashPassword(newPassword);

      // Update the user with the new password
      const updatedUser = await userService.updateUserById(
        user._id.toString(),
        {
          ...user.toObject(),
          password: hashedNewPassword,
        }
      );

      return res.status(200).json({ updatedUser });
    } catch (error) {
      console.error("Change Password Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default authController;
