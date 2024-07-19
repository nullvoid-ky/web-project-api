import otherController from "../controller/other.controller";
const otherRouter = require("express").Router();
otherRouter.post("/add", otherController.add);
otherRouter.post("/check", otherController.check);
export default otherRouter;
