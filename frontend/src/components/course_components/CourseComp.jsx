import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";
import api from "../../api/api";
import Skeleton from "../Skeleton";

const CourseComp = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const { data } = await api.get("/courses");
                setCourses(data);
                setIsLoading(false);
            } catch (err) {
                console.log("error : ", err.message);
            }
        }

        getCourses();
    }, []);

    if (isLoading) {
        return <Skeleton />
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.map(course => (
                    <div key={course._id} className="flex justify-center">
                        <SingleCourse courseImageUrl={course.courseImageUrl} title={course.title} description={course.description} courseId={course._id} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseComp;