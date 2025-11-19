import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: { id: number; name: string; email: string } | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,

        login: async (email: string, password: string) => {
          // Fake login
          if (email && password) {
            set({
              user: { id: 1, name: "John Doe", email },
              isAuthenticated: true,
            });
          }
        },

        logout: () => {
          set({ user: null, isAuthenticated: false });
        },
      }),
      { name: "auth-storage" }
    )
  )
);