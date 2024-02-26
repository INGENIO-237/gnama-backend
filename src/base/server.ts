import express from "express";
import cors from "cors";
import connectToDB from "./db-connection";
import router from "../router";
import jwtCheck from "../middlewares/jwtCheck";

export default function createServer() {
  const server = express();

  server.use(express.json());
  server.use(cors());

  (async () => {
    await connectToDB();
  })();

  server.use(jwtCheck);

  router(server);

  return server;
}
