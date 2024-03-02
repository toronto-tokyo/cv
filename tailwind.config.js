/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        skills: 'repeat(auto-fit, minmax(170px, 1fr))',
        contacts: 'repeat(auto-fit, minmax(258px, 270px))',
        contactsPrint: 'repeat(auto-fit, 220px)',
        languages: 'repeat(auto-fit, minmax(230px, 1fr))',
      },
    },
  },
  plugins: [],
};
