import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills()],
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: [
        "./src/cli.ts",
        "./src/testServer.ts"
      ],
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
      external: [
        "@modelcontextprotocol",
        "@redocly",
        "ts-morph",
        "zod",
        "fs",
        "path",
        "node:perf_hooks",
        "yaml",
        "openapi-typescript",
        "remeda",
        "prettier",
        "express",
        "async_hooks",
        "commander",
        "node-stdlib-browser",
        "detect-port",
        "crypto",
        "stream",
        "http",
        "https",
        "url",
        "os",
        "node:crypto",
        "node:stream",
        "node:http",
        "node:https",
        "node:url",
        "node:os",
        
      ],
    },
    sourcemap: true,
    target: "node16",
  },
});
