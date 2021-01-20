import axios from "axios";
import { APIs } from "../../ApiConstants";

const httpConfig = axios.create({
    timeout: 10000,
    withCredentials: true,
});

httpConfig.interceptors.request.use((req) => {
    req.baseURL = `${APIs.RootURL}/api`
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