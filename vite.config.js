import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  test: {
    // testy jednostkowe czystych funkcji — środowisko Node wystarczy
    environment: "node",
  },
});
