import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAppContext()

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch(err) {
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

    console.log("auth : ", auth);


    return isLoading ? <p>Page is Loading...</p> : <Outlet />

}

export default PersistLogin;