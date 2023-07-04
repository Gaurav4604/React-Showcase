import { leagueSpartan } from "./pages/_app";
import { createTheme } from "@mui/material";

const rootTheme = createTheme({
  palette: {
    custom: {
      veryDarkMagenta: "hsl(300, 43%, 22%)",
      softPink: "hsl(333, 80%, 67%)",
      darkGrayishMagenta: "hsl(303, 10%, 53%)",
      lightGrayishMagenta: "hsl(300, 24%, 96%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    fontFamily: leagueSpartan.style.fontFamily,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: leagueSpartan.style.fontFamily,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("lg")]: {
              maxWidth: "1440px",
            },
          }),
      },
      variants: [
        {
          props: {
            id: "main",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100vw",
              height: "100vh",
              display: "grid",
              p: "5rem",
              [theme.breakpoints.down("lg")]: {
                p: "2rem",
              },
              gridTemplateRows: "repeat(30, 1fr)",
              gridTemplateColumns: "repeat(9, 1fr)",
              columnGap: "1.5rem",
              position: "relative",
            }),
        },
        {
          props: {
            id: "rating-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridRow: "2/4",
              gridColumn: "4/8",
              display: "grid",
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(6, 1fr)",
            }),
        },
      ],
    },
  },
});

export default rootTheme;
