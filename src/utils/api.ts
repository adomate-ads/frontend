import axios from "axios";

const apiUrl =
  import.meta.env.MODE === "development"
    ? "https://api.dev.adomate.ai/"
    : "https://api.adomate.ai/";

// const apiUrl = "http://localhost:3000/";

export const API = axios.create({
  baseURL: apiUrl,
  // withCredentials: true,
});

export default apiUrl;
