import "reflect-metadata";

import { Router } from "express";
import Container from "typedi";
import UserController from "../controllers/user.controller";
import { checkJwt, parseJwt } from "../middlewares/auth";
import tryCatch from "../utils/trycatch";

const UserRouter = Router();
const userController = Container.get(UserController);

UserRouter.use(checkJwt);
UserRouter.use(parseJwt);

UserRouter.get("", tryCatch(userController.getUsers.bind(userController)));
UserRouter.get(
  "/current",
  tryCatch(userController.getCurrentUser.bind(userController))
);
UserRouter.post("", tryCatch(userController.createUser.bind(userController)));
UserRouter.put("", tryCatch(userController.updateUser.bind(userController)));
UserRouter.delete(
  "/:userId",
  tryCatch(userController.deleteUser.bind(userController))
);

export default UserRouter;
