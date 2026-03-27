import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import CourseDetail from "./pages/CourseDetail";
import AdminLayout from "./layout/AdminLayout";
import CourseList from "./components/admin/CourseList";
import StudentList from "./components/admin/StudentList";
import AdminDashboard from "./pages/admin/AdminDashboard";
// import api from "./api/api" 
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import PersistLogin from "./components/PersistLogin"
import RootLayout from "./layout/RootLayout";

function App() {
  const ROLE_LIST = {
    "Admin": import.meta.env.VITE_ADMIN,
    "User": import.meta.env.VITE_USER
  };

  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<RootLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route element={<RequireAuth allowedRoles={[ROLE_LIST.User]} />}>
            <Route path="/course-detail/:courseId" element={<CourseDetail />} />
          </Route>
          <Route path="/admin" element={<RequireAuth allowedRoles={[ROLE_LIST.Admin]} />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="courses" element={<CourseList />} />
              <Route path="students" element={<StudentList />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
