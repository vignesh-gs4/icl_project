import { privateApi } from "../api/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken"
import useAppContext from "./useAppContext"

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAppContext();

    useEffect(() => {
        const requestInterceptor = privateApi.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}` 
                }
                return config;
            },
            error => Promise.reject(error)
        );

        const responseInterceptor = privateApi.interceptors.response.use(
            response => {
                return response
            },
            async (error) => {
                const prevRequest = error?.config;

                if(error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return privateApi(prevRequest);
                }

                return Promise.reject(error);

            }
        )


        return () => {
            privateApi.interceptors.request.eject(requestInterceptor);
            privateApi.interceptors.response.eject(responseInterceptor)
        }
    }, [auth, refresh]);

    return privateApi;
}

export default useAxiosPrivate;