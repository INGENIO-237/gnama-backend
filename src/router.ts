import { Express, Request, Response } from "express";
import UserRouter from "./routes/user.routes";
import RestaurantRouter from "./routes/restaurant.routes";

export default function router(server: Express) {
  server.get("/healthcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  server.use("/users", UserRouter);
  server.use("/restaurants", RestaurantRouter);
}
