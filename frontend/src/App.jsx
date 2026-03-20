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

function App() {
  const { showAuthenticate } = useContext(AppContext);

  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      {showAuthenticate && <Authenticate />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
