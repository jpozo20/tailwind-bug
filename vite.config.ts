import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { crx } from "rollup-plugin-chrome-extension";
import manifest from "./public/manifest.json";

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === "development";

	return {
		plugins: [
			react({ jsxRuntime: "classic" }),
			crx({
				manifest,
				contentScripts: {
					preambleCode: false,
				},
			}),
		],
		css: {
			modules: {
				generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
			},
		},
	};
});
