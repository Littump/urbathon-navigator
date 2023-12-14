import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";
export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      backgroundImage: {
        signin: "url('./src/assets/login_bg.png')",
        addpost: "url('./src/assets/addpost_bg.png')",
      },
    },
    fontFamily: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
});
