import { Routes, Route } from "react-router-dom";
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
import AdminLogin from "./pages/AdminLogin";
import CourseList from "./components/admin/CourseList";
import StudentList from "./components/admin/StudentList";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { showAuthenticate } = useContext(AppContext);
  const location = useLocation();
  const isAdminPath = location.pathname.includes("admin");
  const isAdmin = true;

  return (
    <div className="min-h-screen">
      {showAuthenticate && <Authenticate />}
      {!isAdminPath && <header>
        <Navbar />
      </header>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={isAdmin ? <AdminLayout /> : <AdminLogin />}>
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
