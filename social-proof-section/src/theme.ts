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
              px: "5rem",
              py: "5rem",
              gridTemplateRows: "repeat(7, 1fr)",
              gridTemplateColumns: "repeat(7, 1fr)",
              rowGap: "1rem",
              columnGap: "1rem",
            }),
        },
      ],
    },
  },
});

export default rootTheme;
