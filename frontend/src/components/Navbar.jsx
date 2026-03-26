import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/appContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowAuthenticate, setAuthType, auth } = useContext(AppContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleAuthToggle = (type) => {
    closeMenu();
    setAuthType(type);
    setShowAuthenticate(true);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-lime-400 font-semibold"
      : "hover:text-lime-400 transition";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-primary/90 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          TITLE
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-lg">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/course" className={navLinkClass}>Course</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

          {auth?.accessToken ? (
            <li>
              <div className="px-4 py-2 rounded-lg text-white font-semibold bg-red-500">
                Logout
              </div>
            </li>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => handleAuthToggle("login")}
                className="px-4 py-2 rounded-lg bg-white text-primary font-semibold hover:bg-gray-200 transition"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthToggle("signup")}
                className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition font-semibold"
              >
                Signup
              </button>
            </div>
          )}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer p-2" onClick={toggleMenu}>
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-primary/95 backdrop-blur transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-lg">
          <li onClick={closeMenu}><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/course" className={navLinkClass}>Course</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li onClick={closeMenu}><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

          {!auth?.accessToken ? (
            <div className="flex flex-col gap-3 w-40">
              <button
                onClick={() => handleAuthToggle("login")}
                className="bg-white text-primary py-2 rounded-lg font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthToggle("signup")}
                className="bg-yellow-500 py-2 rounded-lg font-semibold"
              >
                Signup
              </button>
            </div>
          ) : (
            <div>
              <button
                className="text-white bg-red-500 p-2 rounded-lg font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;