import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    courseImageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Course = mongoose.model("Course", courseSchema);