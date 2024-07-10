import axios from "axios";

export const API = axios.create({
  baseURL: "https://priceguru.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 300000,
});
