import express from "express";
import cors from "cors";
import connectToDB from "./db-connection";
import router from "../router";
import { checkJwt, parseJwt } from "../middlewares/auth";

export default function createServer() {
  const server = express();

  server.use(express.json());
  server.use(cors());

  (async () => {
    await connectToDB();
  })();

  server.use(checkJwt);
  server.use(parseJwt);

  router(server);

  return server;
}
