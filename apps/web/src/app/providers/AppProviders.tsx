import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/root";

export function AppProviders() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}