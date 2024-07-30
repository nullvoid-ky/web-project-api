import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

const tokenController = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Access Denied: No Token Provided");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access Denied: Invalid Token");
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Access Denied: Invalid Token");
  }
};

export default tokenController;
