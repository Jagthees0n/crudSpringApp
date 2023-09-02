import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/', // Replace with your backend URL
    withCredentials: false,
});

export default instance;