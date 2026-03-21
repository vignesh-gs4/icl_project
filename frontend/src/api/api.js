import axios from "axios";

const BASE_URL = "http://localhost:3500";

const api = axios.create({
    baseURL: BASE_URL
});

export const privateApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

export default api;