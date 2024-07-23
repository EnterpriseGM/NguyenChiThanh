import {Repository} from "typeorm";
import { User } from "./user.entity";
import { UserRepository } from "../port/secondary/user.repository";
import {
  DuplicateUserEmailError,
  NotExistedUserError,
} from "../ultility/error";

//handle business logic
export class UserService {
  userRepository: Repository<User>;

  constructor() {
    this.userRepository = UserRepository;
  }

  save = async (newUser: User) => {
    try {
      const user = await this.userRepository.save(newUser);
      return user;
    } catch {
      throw new DuplicateUserEmailError();
    }
  };

  search = async (user: User) => {
    const { name, email, age } = user;
    const users = await this.userRepository.find({
      where: { name, email, age },
    });
    return users;
  };

  findById = async (id: string) => {
    const users = await this.userRepository.find({
      where: { id },
    });
    if (users.length) {
      return users[0];
    } else {
      throw new NotExistedUserError();
    }
  };

  update = async (id: string, newUser: User) => {
    const user = await this.userRepository.update(id, newUser);
    return user;
  };

  delete = async (id: string) => {
    const result = await this.userRepository.delete(id);
    return result;
  };
}
