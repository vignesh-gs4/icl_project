import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAppContext from '../hooks/useAppContext'
import useRefreshToken from '../hooks/useRefreshToken';
import { useState } from 'react';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAppContext();
    const refresh = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    console.log("Before", auth);

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

    console.log("after : ", auth.roles?.find);
    console.log(allowedRoles);

    return (
       isLoading ? <p>Page is loading</p> : auth?.roles?.find(role => allowedRoles.includes(role)) ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" />
                : <Navigate to="/" />
    )
}

export default RequireAuth