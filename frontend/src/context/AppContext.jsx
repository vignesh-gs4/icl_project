import { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = ({ children }) => {
    const [showAuthenticate, setShowAuthenticate] = useState(false);
    const [authType, setAuthType] = useState("login");

    return (
        <AppContext value={{ authType, setAuthType, showAuthenticate, setShowAuthenticate }}>
            { children }
        </AppContext>
    );
}

export default AppContextProvider;