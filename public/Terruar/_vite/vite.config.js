import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "_holyxey",
  },
  server: {
    port: 3030,
    host: '0.0.0.0'
  }
});
