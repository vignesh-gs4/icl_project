import useAppContext from "./useAppContext";
import api from "../api/api"

const useRefreshToken = () => {
    const { setAuth } = useAppContext();

    const refresh = async () => {
        try {
            const response = await api.get("/common/refresh", {
                withCredentials: true
            });
            setAuth(prev => {
                return {
                    ...prev,
                    roles: response.data.roles,
                    accessToken: response.data.accessToken
                }
            })
            return response.data.accessToken
        } catch(err) {
            console.log("error getting refresh token", err.message);
        }
    }

    return refresh;

}

export default useRefreshToken;