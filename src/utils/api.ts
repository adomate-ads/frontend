import axios from "axios";

// const apiUrl =
//   import.meta.env.VITE_API === "prod"
//     ? "https://api.adomate.ai/"
//     : "https://api.dev.adomate.ai/";

const apiUrl = "http://localhost:3000/";

export const API = axios.create({
  baseURL: apiUrl,
  // withCredentials: true,
});

export default apiUrl;
