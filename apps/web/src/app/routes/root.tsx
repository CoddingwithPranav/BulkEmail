import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// Route components
import Home from "./index.route";
import DashboardLayout from "./dashboard/layout";
import DashboardHome from "./dashboard/index.route";
import Settings from "./dashboard/settings.route";
import Analytics from "./dashboard/analytics/route";
import type { JSX } from "react";
import Login from "./login.route";

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "settings", element: <Settings /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },
]);