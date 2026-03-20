import SingleCourse from "./SingleCourse";

const CourseComp = () => {
    const courses = [...Array(10).keys()];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.map(course => (
                    <div key={course} className="flex justify-center">
                        <SingleCourse />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseComp;