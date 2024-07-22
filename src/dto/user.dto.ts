import { Request } from "express";

export interface UpdateUserRequestDto extends Request {
  params: {
    id: string; // User ID from URL params
  };
  body: {
    displayname?: string;
    email?: string;
    tel?: string;
    birthdate?: string;
    password?: string;
    username?: string;
  };
}
