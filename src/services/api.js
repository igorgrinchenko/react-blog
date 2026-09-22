import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllArticles = () => api.get("/articles");
export const getFilteredArticles = (filter) =>
  api.get(`/articles?category=${filter}`);

export const loginUser = (username, password) =>
  api.get("/users", {
    params: {
      username,
      password,
    },
  });
