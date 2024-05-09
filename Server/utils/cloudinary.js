import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (localPath) => {
  try {
    if (!localPath) return null;

    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "image",
    });
    console.log("Response URL is ", response.url);
    return response.url;
  } catch (err) {
    fs.unlinkSync(localPath); //remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadImage };
