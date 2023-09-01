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
              maxWidth: "1240px",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: "2rem",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "100vw",
              },
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
              [theme.breakpoints.up("lg")]: {
                maxHeight: "800px",
              },
              gridTemplateRows: "repeat(30, 1fr)",
              gridTemplateColumns: "repeat(9, 1fr)",
              columnGap: "1.5rem",
              [theme.breakpoints.down("lg")]: {
                maxHeight: "800px",
                columnGap: "1rem",
              },
              [theme.breakpoints.down("md")]: {
                maxHeight: "unset",
                display: "block",
              },
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
              gridRow: "1/18",
              gridColumn: "1/11",
              gridTemplateRows: "repeat(1, 1fr)",
              gridTemplateColumns: "repeat(2, 1fr)",
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            }),
        },
        {
          props: {
            id: "description-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gridRow: 1,
              gridColumn: "1/2",
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
              maxHeight: "15rem",
              alignSelf: "center",
              gridTemplateRows: "repeat(8, 1fr)",
              gridTemplateColumns: "repeat(12, 1fr)",
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                maxHeight: "unset",
                height: "unset",
              },
            }),
        },
      ],
    },
  },
});

rootTheme.typography.h2 = {
  color: rootTheme.palette.custom?.veryDarkMagenta,
  fontSize: "4rem",
  width: "100%",
  maxWidth: "26rem",
  marginBottom: "2rem",
  [rootTheme.breakpoints.down("lg")]: {
    fontSize: "3.5rem",
  },
  [rootTheme.breakpoints.down("md")]: {
    fontSize: "3rem",
    maxWidth: "100%",
    textAlign: "center",
  },
};
rootTheme.typography.h4 = {
  color: rootTheme.palette.custom?.veryDarkMagenta,
  fontSize: "1.5rem",
  fontWeight: "400",
  lineHeight: "2rem",
  maxWidth: "28rem",
  width: "100%",
  [rootTheme.breakpoints.down("md")]: {
    fontSize: "1rem",
    maxWidth: "100%",
    marginBottom: "2rem",
    textAlign: "center",
  },
};

export default rootTheme;
