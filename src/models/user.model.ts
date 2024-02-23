import { Document, Schema, model } from "mongoose";
import { Address } from "../types/Address";

export interface UserDocument extends Document {
  authProviderId: string;
  email: string;
  name: string | undefined;
  address: Address | undefined;
  updatedAt: Date;
  createdAt: Date;
}

const userSchema = new Schema(
  {
    authProviderId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: String,
    address: Address,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
