import { create } from "zustand";
import { getAllArticles, getFilteredArticles } from "../services/api";

export const useArticlesStore = create((set) => ({
  articles: [],
  categories: [],
  loading: false,
  error: null,

  getAllArticles: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const { data } = await getAllArticles();

      set({
        articles: data,
        categories: [
          "All",
          ...new Set(data.map((article) => article.category)),
        ],
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error,
      });
    }
  },

  getFilteredArticles: async (filter) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const response = await getFilteredArticles(filter);

      set({
        articles: response.data,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error,
      });
    }
  },
}));
