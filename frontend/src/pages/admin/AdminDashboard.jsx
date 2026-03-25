import React from 'react';
// Tip: Use an icon library like 'lucide-react' for the icons below
// import { Users, BookOpen, indian-rupee, Clock } from 'lucide-react';

const AdminDashboard = () => {
  // Summary Stats Data
  const stats = [
    { id: 1, label: "Total Students", value: "128", icon: "👥", color: "text-blue-600", bg: "bg-blue-100" },
    { id: 2, label: "Active Courses", value: "12", icon: "📚", color: "text-indigo-600", bg: "bg-indigo-100" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Professor</h1>
        <p className="text-gray-500">Here is what's happening with your institute today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-transform hover:scale-105 cursor-default">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center text-xl`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Admissions (Left Side - Takes 2/3 space) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 text-lg">Recent Admissions</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {/* Example row - repeat this via map in real app */}
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Admissions Student {i + 1}</p>
                    <p className="text-xs text-gray-500">Python Full Stack • 2 hours ago</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">Paid</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Popularity (Right Side - Takes 1/3 space) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-6">Course Popularity</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Web Development</span>
                <span className="font-bold">85%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Python</span>
                <span className="font-bold">60%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Tally Prime</span>
                <span className="font-bold">40%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-[40%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;