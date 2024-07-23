import { Request, Response } from "express";
import { UserService } from "../domain/user.service";
import { UNEXPECTED_ERROR } from "../ultility/constants";

//handle request and response
export class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  createUser = async (_: Request, res: Response) => {
    const newUser = res.locals.user;
    try {
      const user = await this.userService.save(newUser);
      res.send(user);
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).send({ message: e.message });
      } else {
        res.status(500).send({ message: UNEXPECTED_ERROR });
      }
    }
  };

  searchUser = async (_: Request, res: Response) => {
    const searchUser = res.locals.user;
    const users = await this.userService.search(searchUser);
    res.send(users);
  };

  findUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const user = await this.userService.findById(id);
      res.send(user);
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).send({ message: e.message });
      } else {
        res.status(500).send({ message: UNEXPECTED_ERROR });
      }
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const newUser = res.locals.user;
    const user = await this.userService.update(id, newUser);
    res.send(user);
  };

  deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await this.userService.delete(id);
    res.send(result);
  };
}
