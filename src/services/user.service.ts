import { Service } from "typedi";
import UserRepository from "../repositories/user.repository";

@Service()
export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    return await this.userRepository.getUsers();
  }

  async getUser(filter: any) {
    return await this.userRepository.getUser(filter);
  }

  async createUser(payload: any) {
    let user = await this.userRepository.getUserByEmail(payload.email);

    if (!user) {
      user = await this.userRepository.createUser(payload);
    }

    return user;
  }

  async updateUser(userId: string, payload: any){
    await this.userRepository.updateUser(userId, payload);
  }

  async deleteUser(userId: string) {
    await this.userRepository.deleteUser(userId);
  }
}
