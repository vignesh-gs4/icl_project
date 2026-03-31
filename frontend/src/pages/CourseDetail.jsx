import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import CourseCompCard from "../components/course_components/CourseCompCard";
import CourseLesson from "../components/course_components/CourseLesson";
import AboutCourse from "../components/course_components/AboutCourse";
import Skeleton from "../components/Skeleton";

const CourseDetail = () => {
  const { courseId } = useParams();
  const privateApi = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({})

  console.log("courseId : ", courseId);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const { data } = await privateApi("/courses/" + courseId);
        setData(data);
        console.log(data.lessons);
        setIsLoading(false);
      } catch (err) {
        console.log("error while fetching course details : ", err.message);
      }
    };

    fetchCourseDetail();
  }, []);

  return (
    isLoading ? (
      <Skeleton />) : (
      <section className="py-14 bg-gradient-to-b from-slate-50 to-slate-100">
        <CourseCompCard courseDetail={data?.courseDetail} />
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow">
            <CourseLesson lessons={data?.lessons} />
            <AboutCourse />
          </div>
        </div>
      </section>
    )
  );
};

export default CourseDetail;