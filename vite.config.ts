import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Para GitHub Pages em https://USER.github.io/REPO/ defina VITE_BASE_PATH=/REPO/
// Para domínio raiz / custom domain mantenha "/".
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [
    tsconfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  server: { host: "::", port: 8080 },
});
