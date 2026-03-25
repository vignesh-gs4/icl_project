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
    syllabus: [{
        title: {
            subtopics: [
                {
                    title: String
                }
            ]
        }
    }]
}, { timestamps: true });

export const Lesson = mongoose.model("Lesson", lessonsSchema);
