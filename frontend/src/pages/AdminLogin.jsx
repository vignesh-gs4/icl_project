import { useState } from 'react'
import api from "../api/api"
import useAppContext from "../hooks/useAppContext.js";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAdminAuth } = useAppContext();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post("/admin", {
                email,
                password
            });
            if(data.success) {
                toast.success(data.message);
                setAdminAuth({ accessToken: data.accessToken, email });
                navigate("/admin");
            }
        } catch(err) {
            toast.error(err?.response?.data?.message);
            console.log("error admin login : ", err.message);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="flex flex-col gap-4 m-auto items-center p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white" onSubmit={submitHandler}>
                <p className="text-2xl font-medium m-auto">
                    <span className="text-indigo-500">Admin</span> Login
                </p>
                <div className="w-full ">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
                </div>
                <div className="w-full ">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin