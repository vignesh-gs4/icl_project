import AppError from "../../utils/AppError.js";
import { Course } from "../../models/Course.js"
import { Lesson } from "../../models/Lessons.js"
import mongoose from "mongoose";

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

        const courseInfo = await Lesson.find({ courseId }).populate("courseId");

        console.log("courseInfo : ", courseInfo);

        return res
            .status(200)
            .json(courseInfo);

    } catch (err) {
        next(err);
    }
}