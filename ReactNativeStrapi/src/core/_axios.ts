import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'http://localhost:1337'
})

export default baseUrl;