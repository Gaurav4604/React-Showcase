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
      star: "#EF9546",
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
              p: "5rem",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "100vw",
              },
              [theme.breakpoints.down("lg")]: {
                p: "2rem",
              },
              gridTemplateRows: "repeat(30, 1fr)",
              gridTemplateColumns: "repeat(10, 1fr)",
              columnGap: "1.5rem",
              position: "relative",
              overflow: "hidden",
              [theme.breakpoints.down("md")]: {
                overflowY: "auto",
              },
            }),
        },
        {
          props: {
            id: "app-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "grid",
              width: "100%",
              height: "100%",
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
            id: "description",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "grid",
              gridRow: "1/16",
              gridColumn: "1/11",
              gridTemplateRows: "repeat(1, 1fr)",
              gridTemplateColumns: "repeat(2, 1fr)",
            }),
        },
        {
          props: {
            id: "description-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "grid",
              gridRow: 1,
              gridColumn: "1/2",
              bgcolor: "blue",
            }),
        },
        {
          props: {
            id: "rating-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "grid",
              gridRow: 1,
              gridColumn: "2/3",
              height: "70%",
              alignSelf: "center",
              bgcolor: "red",
              gridTemplateRows: "repeat(8, 1fr)",
              gridTemplateColumns: "repeat(12, 1fr)",
            }),
        },
      ],
    },
  },
});

export default rootTheme;
