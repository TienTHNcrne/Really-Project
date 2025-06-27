import axios from "axios";
const createUserApi = (name, email, password) => {
    const URL_API = "http://localhost:8081/v1/api/Register";

    return axios.post(URL_API, { name, email, password });
};
const FindUserApi = (email, password) => {
    const URL_API = "http://localhost:8081/v1/api/Login";

    return axios.post(URL_API, { email, password });
};

export { createUserApi, FindUserApi };
