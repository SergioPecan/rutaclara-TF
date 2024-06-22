import axios from 'axios';

const http = axios.create({
    baseURL: 'https://rutaclarasocialnetwork-production.up.railway.app',
    headers: {
        'Content-type': 'application/json',
    },
    });

export default http;

