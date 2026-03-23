import useAppContext from "../hooks/useAppContext";
import api from "../api/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Authenticate = () => {
  const {
    setShowAuthenticate,
    authType,
    setAuthType,
    setAuth
  } = useAppContext();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const { data } = await api.post("/users/" + authType, {
        email, name, password
      });
      if (data.success) {
        toast.success(data.message)
        setAuth({ email, accessToken: data.accessToken })
        setShowAuthenticate(false);
        navigate("/");
      }
    } catch (err) {
      console.log(err?.response?.message);
      toast.error(err?.response?.data.message);
    }
  };

  return (
    <div
      onClick={() => setShowAuthenticate(false)}
      className="fixed z-100 inset-0 flex
      justify-center items-center bg-black/50"
    >
      <form onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 w-full max-w-[340px]
        mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg
        shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2
          className="text-2xl font-bold mb-6 text-center text-gray-800"
        >
          {authType === "login" ? "Login" : "Signup"}
        </h2>

        {
          authType === "signup" &&
          <input
            id="email"
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10
            outline-none rounded py-2.5 px-3"
            type="text"
            placeholder="Username"
            onChange={e => setName(e.target.value)}
            value={name}
            required />
        }

        <input
          id="email"
          className="w-full border mt-1 bg-indigo-500/5 mb-2
          border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          id="email"
          className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10
          outline-none rounded py-2.5 px-3"
          type="password"
          placeholder="Password"
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <button
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600
         transition-all active:scale-95 py-2.5 rounded text-white
         font-medium"
        >
          {authType === "login" ? "Login" : "Signup"}
        </button>

        <p className="text-center mt-4">
          {authType === "login" ? (
            "Don’t have an account?"
          ) : (
            "Already have an account?"
          )}
          <span onClick={() => {
            setAuthType(prev => prev === "login" ? "signup" : "login")
          }} className="text-blue-500 underline cursor-pointer">
            {authType === "login" ? "Sign Up" : "Log In"}
          </span></p>
      </form>
    </div>
  );
};

export default Authenticate;