import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/appContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setShowAuthenticate, setAuthType } = useContext(AppContext);

    // Toggle function
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when a link is clicked
    const closeMenu = () => setIsOpen(false);

    const handleAuthToggle = () => {
        closeMenu();
        setShowAuthenticate(prev => !prev);
    }

    return (
        <nav className="bg-blue-600 text-white relative shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo Section */}
                <div className="text-xl font-bold tracking-wider">
                    TITLE
                </div>

                {/* Desktop Menu (Hidden on mobile) */}
                <ul className="hidden md:flex gap-8 font-medium items-center
                bore">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/course">Course</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li className="bg-green-500 p-2" onClick={() => {
                        setShowAuthenticate(prev => !prev);
                        setAuthType("login");
                    }}>Login</li>
                    <li className="bg-yellow-500 p-2" onClick={() => {
                        setShowAuthenticate(prev => !prev);
                        setAuthType("signup");
                    }}>Signup</li>
                </ul>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden cursor-pointer p-2" onClick={toggleMenu}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        {isOpen ? (
                            /* "X" Icon when menu is open */
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            /* Hamburger Icon when menu is closed */
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </div>
            </div>

            {/* Mobile Menu Overlay (Animated with Tailwind) */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-blue-500 transition-all duration-300 ease-in-out z-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="flex flex-col items-center gap-6 py-8 shadow-inner">
                    <li onClick={closeMenu}><NavLink to="/">Home</NavLink></li>
                    <li onClick={closeMenu}><NavLink to="/course">Course</NavLink></li>
                    <li onClick={closeMenu}><NavLink to="/about">About</NavLink></li>
                    <li onClick={closeMenu}><NavLink to="/contact">Contact Us</NavLink></li>
                    <li onClick={() => {
                        setAuthType("login");
                        handleAuthToggle();
                    }}>Login</li>
                    <li onClick={() => {
                        setAuthType("signup");
                        handleAuthToggle();
                    }}>
                        Signup
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;