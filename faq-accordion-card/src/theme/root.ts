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
              height: "70vh",
              maxHeight: "700px",
              width: "70vw",
              bgcolor: "hsl(240, 5%, 91%)",
              borderRadius: "1.5rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              display: "grid",
              gridTemplate: `
                "a b" 1fr
              `,
              "& > .MuiContainer-root": {
                position: "relative",
                width: "35vw",
                maxWidth: "600px",
              },
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
            }),
        },

        {
          props: {
            className: "faq-icon-wrapper",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              position: "absolute",
              "& img": {
                top: "50%",
                transform: "translate(0%,-50%)",
                position: "absolute",
              },
            }),
        },
        {
          props: {
            id: "non-overflow",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              overflow: "hidden",
              "& img": {
                alignSelf: "center",
                width: "105%",
                height: "70%",
                left: "-19%",
              },
              "& img#shadow": {
                top: "65%",
              },
            }),
        },
        {
          props: {
            id: "overflow",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              overflow: "visible",
              "& img": {
                width: "37%",
                height: "32%",
                left: "-19%",
                top: "60%",
              },
            }),
        },
        {
          props: {
            id: "faq-accordion",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridArea: "b",
              borderTopRightRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }),
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "70%",
            bgcolor: "hsl(240, 5%, 91%)",
            boxShadow: "none",
            "::before": {
              width: "98%",
            },
            "& .MuiAccordionDetails-root": {
              p: 0,
              my: "1rem",
            },
          }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            p: 0,
            "& .MuiTypography-root": {
              color: " hsl(237, 12%, 33%)",
              fontFamily: "500",
            },
            "& .Mui-expanded > .MuiTypography-root": {
              color: "hsl(238, 29%, 16%)",
              fontWeight: "700",
            },
          }),
      },
    },
  },
});

export default rootTheme;
