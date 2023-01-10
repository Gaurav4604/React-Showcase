import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    custom: {
      darkCyan: "hsl(185, 75%, 39%)",
      veryDarkDesaturatedBlue: " hsl(229, 23%, 23%)",
      darkGrayishBlue: "hsl(227, 10%, 46%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: {
            id: "app-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: theme.palette.custom.darkCyan,
              width: "100vw",
              height: "100vh",
              p: 0,
              position: "relative",
              overflow: "hidden",
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
            }),
        },
        {
          props: {
            id: "background-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              position: "relative",
              p: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.up("md")]: {
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
            id: "background",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "absolute",
              top: " 50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              flexDirection: "row",
              zIndex: 0,
              "& img": {
                height: "100%",
                minWidth: "50rem",
                position: "absolute",
              },
              "& img:first-of-type": {
                right: "50%",
                bottom: "50%",
                width: "45%",
                [theme.breakpoints.down("sm")]: {
                  right: "45%",
                },
              },
              "& img:last-of-type": {
                left: "55%",
                top: "55%",
                width: "55%",
                [theme.breakpoints.down("sm")]: {
                  left: "40%",
                },
              },
            }),
        },
        {
          props: {
            id: "app",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              position: "absolute",
              top: " 50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }),
        },
      ],
    },
  },
});

export default theme;
