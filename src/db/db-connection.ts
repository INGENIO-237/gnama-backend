import mongoose from "mongoose";
import { DB_URI } from "../config";

async function connectToDB() {
  try {
    await mongoose.connect(DB_URI as string);
    console.log("Connected to DB");
  } catch (error) {
    // console.log({ error });
    console.log("Failed to connect to DB.");

    console.log("Retrying...");

    setTimeout(connectToDB, 5000);
  }
}

export default connectToDB;
