import express from "express";
import cors from "cors";
import connectToDB from "./db-connection";
import router from "../router";
import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";

export default function createServer() {
  const server = express();

  server.use(express.json());
  server.use(cors());

  (async () => {
    await connectToDB();
  })();

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME as string,
    api_key: CLOUDINARY_API_KEY as string,
    api_secret: CLOUDINARY_API_SECRET as string,
  });

  router(server);

  return server;
}
