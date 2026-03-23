import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAppContext from '../hooks/useAppContext'
import toast from "react-hot-toast"

const RequireAuth = () => {
    const { auth } = useAppContext();

    const authRequire = () => {
        toast.error("Please Login or Signup to View the Course Details");
        return <Navigate to="/course" />;
    }

    return (
        !auth.email ? (
            authRequire()
        ) : (
            <Outlet />
        )
  )
}

export default RequireAuth