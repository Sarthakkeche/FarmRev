import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://farmrev-backend.onrender.com"
      : "http://localhost:5000",
});

export default api;
