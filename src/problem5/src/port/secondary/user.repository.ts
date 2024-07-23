import {Repository} from "typeorm";
import {User} from "../../domain/user.entity";
import {dataSource} from "./database";

export const UserRepository: Repository<User> = dataSource.getRepository(User);