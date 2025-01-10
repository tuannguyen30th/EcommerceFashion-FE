import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default httpRequest;
