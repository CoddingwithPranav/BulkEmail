import axios from "axios";
import { toast } from "sonner";
import { clearAuthToken } from "./lib/data/cookies";
import { queryClient } from "./lib/query-client";
import { useAuthStore } from "./lib/store";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let hasLoggedOut = false;

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('accessToken');
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor track 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !hasLoggedOut) {
      hasLoggedOut = true;

      const { clearAuth } = useAuthStore.getState();
      clearAuth();
      queryClient.clear();
      toast.error("Invalid session. logging out...");
      await clearAuthToken();

      setTimeout(() => {
        hasLoggedOut = false;
      }, 2000);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
