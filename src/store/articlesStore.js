import { create } from "zustand";
import { getArticles } from "../services/api";

export const useArticlesStore = create((set) => ({
  articles: [],
  loading: false,
  error: null,

  getAllArticles: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const response = await getArticles();

      set({
        articles: response.data,
        loading: false,
      });

      return true;
    } catch (error) {
      set({
        loading: false,
        error: "Something went wrong. Please try again.",
      });

      return false;
    }
  },
}));
