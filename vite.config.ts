import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // allow Codesandbox preview hosts like d47rr5-5173.csb.app
    allowedHosts: true,
  },
});
