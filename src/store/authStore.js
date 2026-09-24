import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser } from "../services/api";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      loading: false,
      error: null,

      login: async (username, password) => {
        set({
          loading: true,
          error: null,
        });

        try {
          const response = await loginUser(username, password);

          if (response.data.length === 0) {
            set({
              loading: false,
              error: "Invalid username or password",
            });

            return false;
          }

          const user = response.data[0];

          set({
            user,
            isLoggedIn: true,
            loading: false,
            error: null,
          });

          return true;
        } catch (error) {
          set({
            loading: false,
            error,
          });

          return false;
        }
      },

      logout: () =>
        set({
          user: null,
          isLoggedIn: false,
          error: null,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        user: state.user ? { username: state.user.username } : null,
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState,
        user:
          persistedState?.user ??
          (persistedState?.username
            ? { username: persistedState.username }
            : null),
      }),
    },
  ),
);
