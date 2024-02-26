import { Service } from "typedi";
import User from "../models/user.model";

@Service()
export default class UserRepository {
  async getUsers() {
    return await User.find();
  }

  async createUser(payload: any) {
    return await User.create(payload);
  }

  async getUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async deleteUser(userId: string) {
    await User.findByIdAndDelete(userId);
  }
}
