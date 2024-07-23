import {DataSource, Repository} from "typeorm";
import { User } from "../../domain/user.entity";

//third party connection
export const dataSource: DataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [User],
});