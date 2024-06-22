import axios from 'axios';

const http = axios.create({
    baseURL: 'https://rutaclarasocialnetwork-production.up.railway.app',
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true, // Include this if you need to send credentials (cookies, HTTP authentication) in your CORS requests
});

export default http;