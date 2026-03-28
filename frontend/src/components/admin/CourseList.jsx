import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: "Python Full Stack Development", price: "15,000", duration: "6 Months", category: "Programming" },
    { id: 2, name: "Web Development (MERN Stack)", price: "12,500", duration: "4 Months", category: "Development" },
    { id: 3, name: "C & C++ Programming", price: "5,000", duration: "3 Months", category: "Core" },
    { id: 4, name: "Tally Prime with GST", price: "4,500", duration: "2 Months", category: "Accounting" },
    { id: 5, name: "Computer Office Automation", price: "6,000", duration: "6 Months", category: "Office" },
  ];

  return (
    <div className='w-full p-6 bg-gray-50 min-h-screen'>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Institute Courses</h2>
          <p className="text-gray-500 text-sm">Manage curriculum, pricing, and durations.</p>
        </div>
        <button onClick={() => navigate("add-course")} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium">
          + Add New Course
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100/50 border-b border-gray-200">
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider'>S.No</th>
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider'>Course Name</th>
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider'>Category</th>
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider'>Price</th>
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider'>Duration</th>
              <th className='px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right'>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map((course, index) => (
              <tr key={course.id} className="hover:bg-gray-50/50 transition-colors">
                <td className='px-6 py-4 text-gray-400 font-medium'>{index + 1}</td>
                <td className='px-6 py-4'>
                  <div className="text-sm font-bold text-gray-900">{course.name}</div>
                </td>
                <td className='px-6 py-4'>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {course.category}
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <div className="text-sm font-semibold text-indigo-600">₹{course.price}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                    {course.duration}
                  </div>
                </td>
                <td className='px-6 py-4 text-right'>
                  <button className="text-gray-400 hover:text-indigo-600 font-medium text-sm mr-3">Edit</button>
                  <button className="text-gray-400 hover:text-red-500 font-medium text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;