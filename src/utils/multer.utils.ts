import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { uploadSingleImage } from "./cloudinary.utils";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

export async function parseSingleImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const image = req.file as Express.Multer.File;
  const base64Image = Buffer.from(image.buffer).toString("base64");
  const dataUri = `data:${image.mimetype};base64,${base64Image}`;

  const uploadResponse = await uploadSingleImage(dataUri);

  req.body.image = uploadResponse.url;

  return next();
}
