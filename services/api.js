import axios from "axios";

export const API = axios.create({
  baseURL: "http://price-guru.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});
