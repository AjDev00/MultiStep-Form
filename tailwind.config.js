/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileHomeBgImage: "url('/src/assets/images/bg-sidebar-mobile.svg')",
        desktopHomeBgImage: "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
