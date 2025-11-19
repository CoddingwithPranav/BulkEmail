import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

// Mock delay
api.interceptors.response.use((response) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(response), 600 + Math.random() * 800)
  );
});

// Mock data
api.interceptors.request.use((config) => {
  if (config.url?.includes("/user")) {
    config.data = { id: 1, name: "John Doe", email: "john@example.com" };
  }
  if (config.url?.includes("/dashboard/stats")) {
    config.data = {
      revenue: 12420,
      users: 1823,
      growth: "+12.5%",
      orders: 423,
    };
  }
  if (config.url?.includes("/analytics")) {
    config.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [12, 19, 3, 5, 2, 3].map(() => Math.floor(Math.random() * 100)),
    };
  }
  return config;
});

export { api };