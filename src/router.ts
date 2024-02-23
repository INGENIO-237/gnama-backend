import { Express } from "express";
import UserRouter from "./routes/user.routes";

export default function router(server: Express){
    server.use("/users", UserRouter)
}