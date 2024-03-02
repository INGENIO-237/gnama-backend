import { NextFunction, Request, Response } from "express";

export default function tryCatch(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };
}
