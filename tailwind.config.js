// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // 'custom-red': '#D9534F',
//         // 'customColor': '#5BC0DE',
//         customColorA: "#F5F7F8",
//         customColorB: "#FFFFFF",
//         customColorC: "#1F6CAB",
//         customColorD: "linear-gradient(135deg, #1F6EAE 0%, #3EC1D0 100%)",

//       },
//       fontFamily: {
//         sans: [
//           "Source Sans Pro",
//           "Playball",
//           "-apple-system",
//           "BlinkMacSystemFont",
//           "Segoe UI",
//           "Roboto",
//           "Helvetica Neue",
//           "Arial",
//           "sans-serif",
//           "Instrument Sans",
//         ],
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: '#F5F7F8',
        customBackgroundA: '#EFF8FF',
        textColor:'#1F6CAB',
        loginColor:'#00D3EB',
        homeBg:'#ECFDFF'
      },
    },
  },
  plugins: [],
}

