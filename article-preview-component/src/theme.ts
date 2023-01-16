import { createTheme } from "@mui/material";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

const theme = createTheme({
  palette: {
    custom: {
      veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      desaturatedDarkBlue: "hsl(214, 17%, 51%)",
      grayishBlue: "hsl(212, 23%, 69%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
      white: "hsl(0, 100%, 100%)",
    },
  },
  typography: (palette) => {
    return {
      articleTitle: {
        fontFamily: "Manrope",
        color: palette.custom.veryDarkGrayishBlue,
        fontWeight: "700",
        fontSize: "1.15rem",
        lineHeight: "1.75rem",
      },
      articleBody: {
        fontFamily: "Manrope",
        fontWeight: "500",
        color: palette.custom.desaturatedDarkBlue,
        fontSize: "0.85rem",
        lineHeight: "1.4rem",
      },
    };
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: {
            id: "app-root",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.custom.lightGrayishBlue,
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100vw",
                p: 0,
              },
            }),
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "app-card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: "1rem",
              width: "95%",
              height: "20rem",
              maxWidth: "800px",
              overflow: "hidden",
              bgcolor: theme.palette.custom.white,
              boxShadow:
                "0px 20px 5px" + theme.palette.custom.veryDarkGrayishBlue,
              flexDirection: "row",
              "& img": {
                height: "100%",
                width: "40%",
                objectPosition: "0 0",
                objectFit: "cover",
              },
              [theme.breakpoints.down("md")]: {
                height: "90%",
                width: "95%",
                flexDirection: "column",
                "& img": {
                  height: "40%",
                  width: "100%",
                },
              },
            }),
        },
        {
          props: {
            id: "typography-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              p: "2rem",
              justifyContent: "space-between",
            }),
        },
      ],
    },
  },
});

export default theme;
