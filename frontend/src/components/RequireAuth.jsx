import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAppContext from '../hooks/useAppContext'
import toast from "react-hot-toast"

const RequireAuth = ({ allowedRoles=[1000] }) => {
    const { auth, setShowAuthenticate } = useAppContext();
    const location = useLocation();

    const authRequire = () => {
        toast.error("Please Login or Signup to View the Course Details");
        setShowAuthenticate(prev => !prev);
        console.log("require auth");
        return <Navigate to="/" state={{from: location}} replace />;
    }

    return (
        auth?.roles?.find(role => allowedRoles.includes(role)) ? <Outlet />
           : auth?.email
           ? <Navigate to="/unauthorized" />
           : authRequire()
  )
}

export default RequireAuth