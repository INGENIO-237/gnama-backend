import { Service } from "typedi";
import UserRepository from "../repositories/user.repository";

@Service()
export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    return await this.userRepository.getUsers();
  }

  async createUser(payload: any) {
    return this.userRepository.createUser(payload);
  }

  async deleteUser(userId: string){
    await this.userRepository.deleteUser(userId);
  }
}
