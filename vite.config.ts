import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@interfaces": resolve(root, "interfaces"),
      context: resolve(root, "context"),
      services: resolve(root, "services"),
      shared: resolve(root, "shared"),
      widget: resolve(root, "widget"),
      assets: resolve(root, "app/assets"),
    },
  },
});
