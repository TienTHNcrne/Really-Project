import axios from "axios";
const HTAPI = process.env.REACT_APP_URL;
export const createUserApi = (name, email, password) => {
    return axios.post(`${HTAPI}/user/Register`, { name, email, password });
};

export const FindUserApi = (email, password) => {
    return axios.post(`${HTAPI}/user/Login`, { email, password });
};

export const Diary_every = (Id) => {
    return axios.get(`${HTAPI}/Diaries/all`, { params: { Id } });
};

export const CreateDiary = (data) => {
    return axios.post(`${HTAPI}/Diaries`, { data });
};
