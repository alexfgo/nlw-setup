import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.27.141.127:3333'
});