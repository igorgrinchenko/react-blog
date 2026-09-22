import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = ({ category, query } = {}) =>
  api.get("/articles", {
    params: {
      ...(query && { q: query }),
      ...(category && category !== "All" && { category }),
    },
  });

export const loginUser = (username, password) =>
  api.get("/users", {
    params: {
      username,
      password,
    },
  });
