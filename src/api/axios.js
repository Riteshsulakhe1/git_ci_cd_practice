import axios from "axios";

const SERVER_URL = "http://localhost:3000/";

const AxiosInstance = axios.create({
    baseURL: SERVER_URL,
    timeout: 12 * 1000, // 12 second server timeout
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default AxiosInstance;