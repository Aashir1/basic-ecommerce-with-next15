import axios, { AxiosError, AxiosResponse } from "axios";

const request = axios.create({
  baseURL: "https://fakestoreapi.com", // API base_url
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("API Error:", error.message);
    return Promise.reject(error);
  }
);

export default request;
