import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
    },
    globals: true,
    environment: "happy-dom",
    // exclude: [...configDefaults.exclude, 'e2e/*'],
    // root: fileURLToPath(new URL('./', import.meta.url))
  },
});
