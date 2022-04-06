const forms = require("@tailwindcss/forms");

module.exports = {
	content: ["./*.html", "./src/**/*.css", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [forms],
};
