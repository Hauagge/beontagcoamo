import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  /* baseURL: process.env.REACT_APP_API_DOEJA_LOCAL_URL */
});

export default api;
