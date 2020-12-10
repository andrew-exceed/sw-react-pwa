import axios from "axios";

let API = axios.create({
    baseURL: "https://swapi.dev/api/",
    responseType: "json",
    body:"json",
});

API.interceptors.response.use(
    response => response,
    error => {
        //Тут можно отловить какие-то общие ошибки, типа просроченого токена
        //проверяем и отправляем ошибку дальше
        console.error('interceptors-->', error)
        return Promise.reject(error);
});

export default API  