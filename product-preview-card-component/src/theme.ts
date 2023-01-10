import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    custom: {
      darkCyan: "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    title: {},
    productName: {},
    body: {},
    price: {},
    priceDrop: {},
    button: {},
  },
});

export default theme;
