import api from "../api/api";
import toast from "react-hot-toast";
import useAppContext from "./useAppContext";

const useLogout = () => {
    const { setAuth } = useAppContext();
    const logout = async () => {
        try {
            setAuth({});
            const {data} =  await api.get("/common/logout", {
                withCredentials: true
            });
            console.log("data" , data);
            toast.success(data.message);
        } catch(err) {
            console.log("error while use logout : ", err);
        }
    }

    return logout;
}

export default useLogout