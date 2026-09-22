import { create } from "zustand";
import { getArticles } from "../services/api";

export const useArticlesStore = create((set, get) => ({
  allArticles: [],
  articles: [],
  categories: [],
  selectedCategory: "All",
  searchQuery: "",
  loading: false,
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
        categories: ["All", ...new Set(data.map((article) => article.category))],
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

  applyFilters: () => {
    const { allArticles, selectedCategory, searchQuery } = get();
    const query = searchQuery.trim().toLowerCase();

    set({
      articles: allArticles.filter((article) => {
        const matchesCategory =
          selectedCategory === "All" || article.category === selectedCategory;
        const text = `${article.title} ${article.description}`.toLowerCase();

        return matchesCategory && (!query || text.includes(query));
      }),
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
