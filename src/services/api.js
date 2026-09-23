import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = () => api.get("/articles");

export const addComment = async (articleId, comment) => {
  const response = await api.get(`/articles/${articleId}`);

  const article = response.data;

  return api.put(`/articles/${articleId}`, {
    ...article,
    comments: [...(article.comments || []), comment],
  });
};

export const deleteComment = async (articleId, commentId) => {
  const response = await api.get(`/articles/${articleId}`);

  const article = response.data;

  const updatedComments = (article.comments || []).filter(
    (comment) => comment.id !== Number(commentId),
  );

  return api.put(`/articles/${articleId}`, {
    ...article,
    comments: updatedComments,
  });
};

export const loginUser = (username, password) =>
  api.get("/users", {
    params: {
      username,
      password,
    },
  });
