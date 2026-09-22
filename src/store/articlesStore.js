import { create } from "zustand";
import { getArticles } from "../services/api";

export const useArticlesStore = create((set) => ({
  articles: [],
  categories: [],
  loading: false,
  error: null,

  getArticles: async (filters) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const { data } = await getArticles(filters);
      const isAllArticlesRequest =
        !filters?.query &&
        (!filters?.category || filters.category === "All");

      set({
        articles: data,
        ...(isAllArticlesRequest && {
          categories: [
            "All",
            ...new Set(data.map((article) => article.category)),
          ],
        }),
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
