import { useState, useMemo } from "react";
import AppContext from "./appContext";

const AppContextProvider = ({ children }) => {
    
    const [showAuthenticate, setShowAuthenticate] = useState(false);
    const [authType, setAuthType] = useState("login");
    const [auth, setAuth] = useState(null);
    
    const contextObj = useMemo(() => ({
        authType,
        setAuthType,
        showAuthenticate,
        setShowAuthenticate,
        auth,
        setAuth
    }), [authType, showAuthenticate, auth]);
    
    // console.log("contextObj : ", contextObj);
    console.log("authType : ", authType);
    console.log("showAuthenticate : ", showAuthenticate);
    
    return (
        <AppContext value={contextObj}>
            {children}
        </AppContext>
    );
}

export default AppContextProvider;