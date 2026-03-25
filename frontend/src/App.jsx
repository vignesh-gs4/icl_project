import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import AppContext from "./context/appContext";
import { useContext } from "react";
import Authenticate from "./components/Authenticate";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import CourseDetail from "./pages/CourseDetail";
import AdminLayout from "./layout/AdminLayout";
import { useLocation } from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import CourseList from "./components/admin/CourseList";
import StudentList from "./components/admin/StudentList";
import AdminDashboard from "./pages/admin/AdminDashboard";
// import api from "./api/api" 
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";

function App() {
  const { showAuthenticate, showAlert, adminAuth } = useContext(AppContext);
  const location = useLocation();
  const isAdminPath = location.pathname.includes("admin");
  const ROLE_LIST = {
    "Admin": import.meta.env.VITE_ADMIN,
    "User": import.meta.env.VITE_USER
  };

  console.log("role list :", ROLE_LIST);

  return (
    <div className="min-h-screen">
      {showAlert && <Alert />}
      {showAuthenticate && <Authenticate />}
      {!isAdminPath && <header>
        <Navbar />
      </header>}
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth allowedRoles={[ROLE_LIST.User]} />}>
          <Route path="/course-detail" element={<CourseDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={adminAuth.email ? <AdminLayout /> : <AdminLogin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="students" element={<StudentList />} />
        </Route>
      </Routes>
      {!isAdminPath && <Footer />}
    </div>
  );
}

export default App
