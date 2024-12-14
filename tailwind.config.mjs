/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        textGray1: 'var(--text-gray-1)',
        textGray2: 'var(--text-gray-2)',
        noStock: 'var(--out-of-stock)',
        borderDefault: 'var(--border-default)',
        borderActive : 'var(--border-active)',
        divider : 'var(--divider)'
      },
    },
  },
  plugins: [],
};
