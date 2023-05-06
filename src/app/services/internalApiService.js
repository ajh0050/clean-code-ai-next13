class InternalApiService {
    constructor() {
      this.baseURL = `/api`;
    }
  
    async get(path) {
      const response = await fetch(`${this.baseURL}${path}`);
      return response.json();
    }
  
    async post(path, body) {
      const response = await fetch(`${this.baseURL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response.json();
    }
  }
  
  export default InternalApiService;