import api from "../api/api";
import toast from "react-hot-toast";

const useLogout = () => {
    const logout = async () => {
        try {
            const {data} =  await api.get("/common/logout");
            toast.success(data);
        } catch(err) {
            console.log("error while use logout : ", err);
        }
    }

    return logout;
}

export default useLogout