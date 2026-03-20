import mongoose from "mongoose";

const lessonsSchema = new mongoose.Schema({
    course_name: {
        type: String
    },
    lessons: {
        type: []
    }
}, { timestamps: true });

export const Lesson = mongoose.model("Lesson", lessonsSchema);
