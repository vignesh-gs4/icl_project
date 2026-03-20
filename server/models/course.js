import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    course: {
        type: String
    },
    fees: {
        type: Number
    },
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
    }
}, { timestamps: true })

export const Course = mongoose.model("Course", courseSchema);