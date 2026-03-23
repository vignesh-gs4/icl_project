import React from "react";
import CourseDetailComp from "../components/course_components/CourseDetailComp";

const CourseDetail = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-slate-100">
      
      {/* Main Card */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091870627-3c6f1e11f5d1?q=80&w=1000&auto=format&fit=crop"
              alt="Course"
              className="w-full h-64 md:h-full object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Full Stack Web Development
              </h2>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Learn to build complete web applications using modern technologies
                like React, Node.js, and MongoDB. Perfect for beginners and
                intermediate developers.
              </p>

              {/* Info */}
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-600">
                <p>⏱ Duration: <span className="font-medium">60 Days</span></p>
                <p>👨‍🎓 Level: <span className="font-medium">Beginner</span></p>
                <p>🌐 Mode: <span className="font-medium">Online</span></p>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              
              <div>
                <p className="text-slate-400 line-through text-sm">₹1999</p>
                <p className="text-3xl font-bold text-indigo-600">₹999</p>
              </div>

              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300">
                Start Course 🚀
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow">
          <CourseDetailComp />
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;