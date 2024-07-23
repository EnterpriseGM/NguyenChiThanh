import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { EMPTY_REQUEST_ERROR, UNEXPECTED_ERROR } from "../ultility/constants";
import { User } from "./user.entity";

// middleware for checking user request payload
export const _validateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //if request dont have body
    if (!req.body || !req.body.email) {
      return res.status(400).send({ message: EMPTY_REQUEST_ERROR });
    }

    //decode request body into user
    const { name, email, age } = req.body;
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.age = age;

    //validate user
    const errors = await validate(newUser);
    if (errors.length) throw errors;

    // send validate user payload to route
    res.locals.user = newUser;
    next();
  } catch (e: any) {
    // if request validation is error
    if (Array.isArray(e) && e[0] instanceof ValidationError) {
      const message = Object.values(e[0].constraints)[0];
      res.status(400).send({ message });
    } else {
      res.status(500).send({ message: UNEXPECTED_ERROR });
    }
  }
};
