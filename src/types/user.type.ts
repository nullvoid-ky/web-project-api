import { Role } from "../enums/role.enum";

export type CommonUser = {
  _id: string;
  role: Role;
};
export type UpdateUserData = {
  displayname?: string;
  email?: string;
  tel?: string;
  birthdate?: string;
  password?: string;
};
