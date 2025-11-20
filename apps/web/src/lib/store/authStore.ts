import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SystemRole } from "../types";

type User = {
  userId: string;
  loginName: string;
  userFullName: string;
  utypeId: string;
  role: SystemRole;
  mdmCode: null;
  empCode: string;
  braCode: string;
  comCode: string;
};

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token: string | null) => set({ token }),
      setUser: (user: User | null) => set({ user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    { name: "auth" }
  )
);
