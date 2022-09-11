import axiosClient from "./axiosClient";

const dataApi = {
    getData(config) {
        const url = "/v2/animals";
        return axiosClient.get(url, config)
    }
}

export default dataApi;