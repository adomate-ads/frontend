import axios from "axios";

const apiUrl = "https://api.adomate.tech/";

export const API = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export default apiUrl;
