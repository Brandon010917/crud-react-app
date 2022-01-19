module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bright-blue": "#3a7bfd",
      "very-dark-blue": "#161722",
      "very-dark-desaturated-blue": "#25273c",
      "light-grayish-blue": "#cacde8",
      "light-grayish-blue-hover": "#e4e5f1",
      "dark-grayish-blue": "#777a92",
      "very-dark-grayish-blue-opacity": "#4d5066",
      "very-dark-grayish-blue": "#393a4c",
      white: "#fff",
      green: {
        ["100"]: "rgb(220 252 231)",
        ["800"]: "rgb(22 101 52)",
      },
      red: {
        ["100"]: "rgb(254 226 226)",
        ["500"]: "rgb(239 68 68)",
        ["800"]: "rgb(153 27 27)",
      },
    },
  },
  plugins: [],
};
