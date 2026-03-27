import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAppContext();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.log("while persist auth : ", err.message);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        }

    }, [refresh, auth?.accessToken]);

    // console.log("auth : ", auth);


    return isLoading ? (
        <div className="animate-pulse space-y-4 h-screen">

            {/* Title */}
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>

            {/* Content lines */}
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>

            {/* Big block (image / card / table) */}
            <div className="h-40 bg-gray-200 rounded"></div>

            {/* Button / action */}
            <div className="h-10 bg-gray-200 rounded w-32"></div>

        </div>
    ) : (
        <Outlet />
    )

}

export default PersistLogin;