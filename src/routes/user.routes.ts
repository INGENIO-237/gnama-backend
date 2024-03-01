import "reflect-metadata";

import { Router } from "express";
import Container from "typedi";
import UserController from "../controllers/user.controller";
import { checkJwt, parseJwt } from "../middlewares/auth";

const UserRouter = Router();
const userController = Container.get(UserController);

UserRouter.use(checkJwt);
UserRouter.use(parseJwt);

UserRouter.get("", userController.getUsers.bind(userController));
UserRouter.get("/current", userController.getCurrentUser.bind(userController));
UserRouter.post("", userController.createUser.bind(userController));
UserRouter.put("", userController.updateUser.bind(userController));
UserRouter.delete("/:userId", userController.deleteUser.bind(userController));

export default UserRouter;
