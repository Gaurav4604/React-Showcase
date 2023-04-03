import { kumbh } from "@/pages/_app";
import { createTheme } from "@mui/material";

const rootTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: kumbh.style.fontFamily,
          }),
      },
    },
    MuiContainer: {
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
              alignContent: "center",
              background:
                "linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%))",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "100vw",
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
              },
            }),
        },
        {
          props: {
            id: "card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "80vh",
              width: "90%",
              bgcolor: "hsl(240, 5%, 91%)",
              borderRadius: "1.5rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            }),
        },
        {
          props: {
            id: "card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "80vh",
              maxHeight: "800px",
              width: "90%",
              bgcolor: "hsl(240, 5%, 91%)",
              borderRadius: "1.5rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              display: "grid",
              gridTemplate: `
                "a b" 1fr
              `,
            }),
        },
        {
          props: {
            id: "faq-icon",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridArea: "a",
              borderTopLeftRadius: "1.5rem",
              borderBottomLeftRadius: "1.5rem",
              position: "relative",
            }),
        },
        {
          props: {
            id: "non-overflow",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              position: "absolute",
              overflow: "hidden",
              "& img": {
                position: "absolute",
                alignSelf: "center",
                width: "120%",
                height: "70%",
                left: "-20%",
                top: "50%",
                transform: "translate(0%,-50%)",
              },
              "& img#shadow": {
                top: "65%",
                transform: "translate(0%,-50%)",
              },
            }),
        },
        {
          props: {
            id: "overflow",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              position: "absolute",
              overflow: "visible",
              "& img": {
                width: "50%",
                height: "40%",
                position: "absolute",
                left: "-25%",
                top: "60%",
                transform: "translate(0%,-50%)",
              },
            }),
        },
      ],
    },
  },
});

export default rootTheme;
