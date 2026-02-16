/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F7F6F3',
                primary: '#111111',
                accent: 'hsl(245, 58%, 51%)',
                brand: {
                    DEFAULT: 'hsl(245, 58%, 51%)',
                    dark: 'hsl(245, 58%, 41%)',
                },
            },
            fontFamily: {
                serif: ['Crimson Pro', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                '8': '8px',
                '16': '16px',
                '24': '24px',
                '40': '40px',
                '64': '64px',
            }
        },
    },
    plugins: [],
}
