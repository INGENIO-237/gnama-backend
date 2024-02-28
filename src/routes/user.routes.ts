import "reflect-metadata";

import { Router } from "express";
import Container from "typedi";
import UserController from "../controllers/user.controller";

const UserRouter = Router();
const userController = Container.get(UserController);

UserRouter.get("", userController.getUsers.bind(userController));
UserRouter.post("", userController.createUser.bind(userController));
UserRouter.put("/", userController.updateUser.bind(userController));
UserRouter.delete("/:userId", userController.deleteUser.bind(userController));

export default UserRouter;
