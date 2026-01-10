/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#38bdf8", // Sky 400
                dark: "#0f172a",    // Slate 900
            },
        },
    },
    plugins: [],
}