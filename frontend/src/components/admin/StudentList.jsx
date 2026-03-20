import React from 'react';

const StudentList = () => {
  // Dummy data to visualize the design
  const students = [
    { id: 1, name: "Arun Kumar", course: "Python Full Stack", status: "Active" },
    { id: 2, name: "Priya Dharshini", course: "Web Development", status: "Completed" },
    { id: 3, name: "Sanjay Raj", course: "Java Programming", status: "On Leave" },
  ];

  return (
    <div className='w-full p-6 bg-gray-50 min-h-screen'>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Student Directory</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          + Add New Student
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100/50 border-b border-gray-200">
              <th className='px-6 py-4 text-sm font-semibold text-gray-600'>S.No</th>
              <th className='px-6 py-4 text-sm font-semibold text-gray-600'>Student Name</th>
              <th className='px-6 py-4 text-sm font-semibold text-gray-600'>Course Name</th>
              <th className='px-6 py-4 text-sm font-semibold text-gray-600'>Current Status</th>
              <th className='px-6 py-4 text-sm font-semibold text-gray-600'>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-50/80 transition-colors">
                <td className='px-6 py-4 text-gray-500 font-medium'>{index + 1}</td>
                <td className='px-6 py-4 text-gray-900 font-semibold'>{student.name}</td>
                <td className='px-6 py-4 text-gray-600'>
                   <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                     {student.course}
                   </span>
                </td>
                <td className='px-6 py-4'>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      student.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {student.status}
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <button className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;