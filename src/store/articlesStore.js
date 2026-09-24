import { create } from "zustand";
import { getArticles, addComment, deleteComment } from "../services/api";

export const useArticlesStore = create((set, get) => ({
  allArticles: [],
  articles: [],
  categories: [],
  selectedCategory: "All",
  searchQuery: "",
  loading: false,
  commentsLoading: false,
  error: null,

  getArticles: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const { data } = await getArticles();

      set({
        allArticles: data,
        categories: [
          "All",
          ...new Set(data.map((article) => article.category)),
        ],
        loading: false,
      });

      get().applyFilters();
    } catch (error) {
      set({
        loading: false,
        error,
      });
    }
  },

  setComment: async (articleId, comment) => {
    set({
      commentsLoading: true,
      error: null,
    });

    try {
      const response = await addComment(articleId, comment);
      const updatedArticle = response.data;

      set((state) => {
        const updatedAllArticles = state.allArticles.map((article) =>
          String(article.id) === String(articleId) ? updatedArticle : article,
        );

        return {
          allArticles: updatedAllArticles,
          commentsLoading: false,
        };
      });

      get().applyFilters();

      return true;
    } catch (error) {
      set({
        commentsLoading: false,
        error,
      });

      return false;
    }
  },

  deleteComment: async (articleId, commentId) => {
    set({
      commentsLoading: true,
      error: null,
    });

    try {
      const response = await deleteComment(articleId, commentId);
      const updatedArticle = response.data;

      set((state) => {
        const updatedAllArticles = state.allArticles.map((article) =>
          String(article.id) === String(articleId) ? updatedArticle : article,
        );

        return {
          allArticles: updatedAllArticles,
          commentsLoading: false,
        };
      });

      get().applyFilters();

      return true;
    } catch (error) {
      set({
        commentsLoading: false,
        error,
      });

      return false;
    }
  },

  applyFilters: () => {
    const { allArticles, selectedCategory, searchQuery } = get();

    const query = searchQuery.trim().toLowerCase();

    const filteredArticles = allArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const text = `${article.title} ${article.description}`.toLowerCase();

      return matchesCategory && (!query || text.includes(query));
    });

    set({
      articles: filteredArticles,
    });
  },

  setSelectedCategory: (selectedCategory) => {
    set({ selectedCategory });
    get().applyFilters();
  },

  setSearchQuery: (searchQuery) => {
    set({ searchQuery });
    get().applyFilters();
  },
}));
