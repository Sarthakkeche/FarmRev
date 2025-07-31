import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://farmrev-backend.onrender.com",
});

export default api;
