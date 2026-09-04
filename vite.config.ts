import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig(({ command }) => {
export default defineConfig(() => {
  // command = 'serve' for dev, 'build' for production
  return {
    plugins: [react()],
    base: "/",
    build: {
      rollupOptions: {
        input: {
          main: "index.html",
          links: "links.html",
        },
      },
    },
    // base: command === "serve" ? "/" : "/react-portfolio/", // dev uses '/', production uses GitHub Pages base
  };
});