import axios from 'axios';

class InternalApiService {
    constructor() {
        this.baseURL = `/api`;
    }

    async get(path) {
        const response = await fetch(`${this.baseURL}${path}`);
        return response.json();
    }

    async post(path, body) {
        const response = await axios.post(`${this.baseURL}${path}`, {
            codeToReview: body.codeToReview,
            language: body.language,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;
    }
}

export default InternalApiService;