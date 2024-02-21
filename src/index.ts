import express from "express";
import cors from "cors";
import connectToDB from "./db/db-connection";
import { PORT } from "./config";

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
  await connectToDB();
})();

app.listen(PORT, () => console.log("Server running"));
