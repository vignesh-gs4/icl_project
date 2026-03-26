import mongoose from "mongoose";

const lessonsSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },
    fees: {
        type: Number,
        required: true
    },
    duration: {
        type: String
    },
    syllabus: []
}, { timestamps: true });

export const Lesson = mongoose.model("Lesson", lessonsSchema);