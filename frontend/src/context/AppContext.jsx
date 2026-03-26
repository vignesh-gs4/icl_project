import { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = ({ children }) => {
    const [showAuthenticate, setShowAuthenticate] = useState(false);
    const [authType, setAuthType] = useState("login");
    const [auth, setAuth] = useState({});

    const contextObj = {
        authType,
        setAuthType,
        showAuthenticate,
        setShowAuthenticate,
        auth, setAuth
    }

    return (
        <AppContext value={contextObj}>
            {children}
        </AppContext>
    );
}

export default AppContextProvider;