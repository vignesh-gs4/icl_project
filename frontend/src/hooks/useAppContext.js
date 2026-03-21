import AppContext from "../context/appContext";
import { useContext } from "react";

const useAppContext = () => {
    return useContext(AppContext);
}

export default useAppContext;