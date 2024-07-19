import { Request } from "express";

export interface OtherRequestDto extends Request {
  body: {
    name: string;
    serial: string;
  };
}
