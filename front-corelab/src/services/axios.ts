import axios, { AxiosInstance } from 'axios';

const API_URL: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3002',
});

export default API_URL;
