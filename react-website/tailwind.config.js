/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        mono: 'var(--font-mono)',
        sentient: 'var(--font-sentient)',
      },
      boxShadow: {
        glow: '0 0 8px 2px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}


