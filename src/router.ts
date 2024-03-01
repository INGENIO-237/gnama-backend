import { Express, Request, Response } from "express";
import UserRouter from "./routes/user.routes";

export default function router(server: Express) {
  server.get("/healtcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  server.use("/users", UserRouter);
}
