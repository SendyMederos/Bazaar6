import axios from "axios";

const httpConfig = axios.create({
    timeout: 10000,
    withCredentials: true,
});

httpConfig.interceptors.request.use((req) => {
    req.baseURL = 'https://blooming-garden-49666.herokuapp.com/api';
    req.headers = {
        ...req.headers,
    };
    return req;
});

httpConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error)
        throw error;
    }
);

export default httpConfig;