import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = () => api.get("/articles");

const normalizeCommentId = (comment) => ({
  ...comment,
  id: Number(comment.id),
});

export const addComment = async (articleId, comment) => {
  const response = await api.get(`/articles/${articleId}`);

  const article = response.data;
  const comments = (article.comments || []).map(normalizeCommentId);

  return api.put(`/articles/${articleId}`, {
    ...article,
    comments: [...comments, normalizeCommentId(comment)],
  });
};

export const deleteComment = async (articleId, commentId) => {
  const response = await api.get(`/articles/${articleId}`);

  const article = response.data;

  const updatedComments = (article.comments || [])
    .map(normalizeCommentId)
    .filter((comment) => comment.id !== Number(commentId));

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
