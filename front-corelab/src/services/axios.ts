import axios, { AxiosInstance } from 'axios';

const api = import.meta.env.VITE_API_LINK;

const API_URL: AxiosInstance = axios.create({
    baseURL: api,
});

export default API_URL;
