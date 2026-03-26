import { Course } from "../../models/Course.js"
import { Lesson } from "../../models/Lessons.js";
import AppError from "../../utils/AppError.js"

const addCourse = async (req, res, next) => {
    try {
        const {
            courseName,
            description,
            fees,
            syllabus,
            courseImageUrl
        } = req.body;

        console.log(courseImageUrl);

        if (!courseName || !description || !fees || !syllabus) {
            throw new AppError("All provided field for course details is required", 400);
        }

        const course = await Course.create({ courseName, description, courseImageUrl });
        const lesson = await Lesson.create({
            courseId: course._id,
            fees,
            syllabus
        });

        return res
            .status(200)
            .json({
                success: true,
                message: "Course Create Successfully"
            });

    } catch (err) {
        next(err);
    }
}

export default addCourse;