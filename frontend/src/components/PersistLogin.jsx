import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";
import Skeleton from "./Skeleton";

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
       <Skeleton />
    ) : (
        <Outlet />
    )

}

export default PersistLogin;