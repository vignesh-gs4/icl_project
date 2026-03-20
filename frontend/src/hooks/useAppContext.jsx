import AuthContext from "../context/appContext";
import { useContext } from "react";

const useAppContext = () => {
    return useContext(AuthContext);
}

export default useAppContext;