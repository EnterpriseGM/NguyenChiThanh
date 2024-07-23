import { Request, Response } from "express";

export class HealthController {
  check(_: Request, res: Response) {
    const SUCCESSFULL_HEALTH_CHECK_MESSAGE = "Ok!";
    res.send(SUCCESSFULL_HEALTH_CHECK_MESSAGE);
  }

  unknow(_: Request, res: Response) {
    const UNKNOW_ROUTE_MESSAGE = "API not found!";
    res.status(404).send(UNKNOW_ROUTE_MESSAGE);
  }
}
