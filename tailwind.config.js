module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background.png')",
        'hero-pattern2': "url('/background@2x.png')",
      },
      colors: {
        brand: '#01B100', // Logoning asosiy rangi
        light: {
          background: "#f9fafb", // Umumiy fon rangi
          text: "#111827", // Matn rangi
          navbar: "#ffffff", // Navbar orqa fon
          accent: "#1BFA7C", // Aksent rangi
        },
        // Dark mode ranglari
        dark: {
          background: "#1f2937", // Umumiy fon rangi
          text: "#f9fafb", // Matn rangi
          navbar: "#101010af", // Navbar orqa fon
          accent: "#1BFA7C", // Aksent rangi
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
