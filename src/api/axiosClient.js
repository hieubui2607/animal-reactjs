import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.petfinder.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);