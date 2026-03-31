import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCompCard = ({ courseDetail }) => {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

                {/* Image */}
                <div className="relative">
                    <img
                        src={courseDetail.courseImageUrl}
                        alt="Course Image"
                        className="w-full h-64 md:h-full object-cover rounded-xl"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-slate-800">
                            {courseDetail.courseName}
                        </h2>

                        <p className="text-slate-500 mt-3 leading-relaxed">
                           {courseDetail.description}
                        </p>

                        {/* Info */}
                        <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-600">
                            <p>⏱ Duration: <span className="font-medium">{courseDetail.duration} Months</span></p>
                        </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">

                        <div>
                            <p className="text-slate-400 line-through text-sm">₹10000</p>
                            <p className="text-3xl font-bold text-indigo-600">{courseDetail.fees}</p>
                        </div>

                        <button onClick={() => navigate("/course-register")} className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300">
                            Start Course 🚀
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCompCard