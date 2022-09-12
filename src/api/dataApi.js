import axiosClient from "./axiosClient";

const dataApi = {
    getData(config, param) {
        console.log(param.pageCurrent)
        const url = `/v2/animals?page=${param.pageCurrent}`;
        return axiosClient.get(url, config, param)
    }
}

export default dataApi;