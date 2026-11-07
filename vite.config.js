import { fileURLToPath, URL } from "node:url";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "FAVORIT_");
  if (!env.FAVORIT_API_BASE_URL || !env.FAVORIT_API_KEY) {
    throw new Error(
      "FAVORIT_API_BASE_URL и FAVORIT_API_KEY не найдены. Для локального запуска скопируйте .env.example в .env.local: cp .env.example .env.local",
    );
  }

  const apiUrl = new URL(env.FAVORIT_API_BASE_URL);
  const apiKey = env.FAVORIT_API_KEY;

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "^/api/parts(?:\\?|$)": {
          target: apiUrl.origin,
          changeOrigin: true,
          proxyTimeout: 10_000,
          rewrite: path => {
            const url = new URL(path, apiUrl.origin);
            url.searchParams.set("key", apiKey);
            return `${apiUrl.pathname}?${url.searchParams}`;
          },
        },
      },
    },
  };
});
