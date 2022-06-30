import axios from "axios";

const fetcher = axios.create({
    // baseURL: "https://shrouded-caverns-22782.herokuapp.com",
    baseURL: "http://localhost:5000",
});

// Add a request interceptor
fetcher.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        if (!config.headers.authorization) {
            config.headers.authorization = `Bearer ${localStorage.getItem(
                "accessToken"
            )}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
fetcher.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default fetcher;
