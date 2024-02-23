import "reflect-metadata";

import { Router } from "express";
import Container from "typedi";
import UserController from "../controllers/user.controller";

const UserRouter = Router();
const userController = Container.get(UserController);

UserRouter.get("", userController.getUsers.bind(userController));
UserRouter.post("", userController.createUser.bind(userController));
UserRouter.delete("/:id", userController.deleteUser.bind(userController));

export default UserRouter;
