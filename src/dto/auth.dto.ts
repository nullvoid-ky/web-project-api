import { Request } from "express";

// DTO for user authentication requests
export interface AuthRequestDto extends Request {
  body: {
    username: string; // Required for both registration and login
    password: string; // Required for both registration and login
    displayname?: string; // Optional during registration
    email?: string; // Optional during registration
    tel?: string; // Optional during registration
    birthdate?: string; // Optional during registration
  };
}

// DTO for changing password or updating user details
export interface AuthRePassRequestDto extends Request {
  body: {
    username: string; // Optional, if the username needs to be updated
    oldPassword: string; // Required for password change
    newPassword: string; // Required for password change
  };
}
