import { Service } from "typedi";
import UserService from "../services/user.service";
import { Request, Response } from "express";

@Service()
export default class UserController {
  constructor(private userService: UserService) {}

  async getUsers(req: Request, res: Response) {
    const users = await this.userService.getUsers();

    return res.status(200).json(users);
  }

  async createUser(req: Request, res: Response) {
    const user = await this.userService.createUser(req.body);

    return res.status(201).json(user);
  }

  async updateUser(req: Request, res: Response){
    await this.userService.updateUser(req.userId, req.body);

    return res.sendStatus(200);
  }

  async deleteUser(req: Request, res: Response) {
    await this.userService.deleteUser(req.params.userId);

    return res.sendStatus(200);
  }
}
