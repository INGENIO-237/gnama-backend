import { Service } from "typedi";
import User from "../models/user.model";

@Service()
export default class UserRepository {
  async getUsers() {
    return await User.find();
  }

  async getUser(filter: any) {
    return await User.findOne(filter);
  }

  async createUser(payload: any) {
    return await User.create(payload);
  }

  async updateUser(userId: string, payload: any) {
    await User.findByIdAndUpdate(userId, payload);
  }

  async getUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async deleteUser(userId: string) {
    await User.findByIdAndDelete(userId);
  }
}
