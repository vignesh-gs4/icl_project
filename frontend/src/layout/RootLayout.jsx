import { Outlet, useLocation } from "react-router-dom"
import useAppContext from "../hooks/useAppContext";
import Authenticate from "../components/Authenticate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
    const { showAuthenticate } = useAppContext();
    const location = useLocation();
    const isAdminPath = location.pathname === "admin";

    console.log("isAdminPath : ", isAdminPath);


    return (
        <>
            {showAuthenticate && <Authenticate />}
            {!isAdminPath &&
                <header>
                    <Navbar />
                </header>
            }
            <Toaster />
            <Outlet />
            {!isAdminPath && <Footer />}
        </>

    );
}

export default RootLayout;