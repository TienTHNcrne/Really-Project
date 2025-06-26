import axios from "axios";
const createUserApi = (name, email, password) => {
    const URL_API = "http://localhost:8081/v1/api/Register";

    return axios.post(URL_API, { name, email, password });
};

export { createUserApi };
