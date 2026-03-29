import cloudinary from "../config/cloudinaryConfig.js";
import streamifier from "streamifier";

const imageUploader = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "ic_project_image" },
            (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
    })
}

export default imageUploader;