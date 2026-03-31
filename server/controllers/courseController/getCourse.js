import AppError from "../../utils/AppError.js";
import { Course } from "../../models/Course.js"
import { Lesson } from "../../models/Lessons.js"

export const getCourse = async (req, res, next) => {
    try {
        const courses = await Course.find({});
        return res
            .status(200)
            .json(courses);
    } catch (err) {
        next(err);
    }
};

export const getCourseInfo = async (req, res, next) => {
    try {
        const courseId = req.params?.courseId
       
        console.log(courseId);

        if (!courseId) {
            throw new AppError("course id required", 400);
        }

        const {
            courseId: { courseName, courseImageUrl, description },
            fees,
            duration,
            syllabus: lessons
        } = await Lesson.findOne({ courseId }).populate("courseId")

        return res
            .status(200)
            .json({
                courseDetail: {
                    courseName,
                    fees,
                    description,
                    courseImageUrl,
                    duration
                },
                lessons
            });

    } catch (err) {
        next(err);
    }
}