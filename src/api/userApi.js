import axiosClient from "./axiosClient";

const userApi = {
    check(data, config) {
        const url = "/v2/oauth2/token";
        return axiosClient.post(url, data, config)
    }
}

export default userApi;