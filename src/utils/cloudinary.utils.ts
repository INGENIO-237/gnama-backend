import { v2 as cloudinary } from "cloudinary";

export async function uploadSingleImage(dataUri: string) {
  const uploadResponse = await cloudinary.uploader.upload(dataUri);

  return uploadResponse;
}
