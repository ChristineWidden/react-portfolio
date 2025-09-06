import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  // command = 'serve' for dev, 'build' for production
  return {
    plugins: [react()],
    base: command === "serve" ? "/" : "/react-portfolio/", // dev uses '/', production uses GitHub Pages base
  };
});