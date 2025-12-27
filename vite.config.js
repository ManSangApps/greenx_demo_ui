import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: "greenx-demo-ui.onrender.com",
  },
  plugins: [react()],
});
