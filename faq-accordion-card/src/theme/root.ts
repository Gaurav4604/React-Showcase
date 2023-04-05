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
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: "hsl(238, 29%, 16%)",
              width: "70%",
              fontWeight: "700",
              fontSize: "3rem",
              textAlign: "start",
              mb: "2rem",
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
                fontSize: "2rem",
                mb: "1.5rem",
              },
            }),
        },
        {
          props: {
            id: "answer",
          },
          style: {
            color: "hsl(240, 6%, 50%)",
          },
        },
      ],
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
              height: "90vh",
              maxHeight: "700px",
              width: "80vw",
              maxWidth: "1200px",
              bgcolor: "hsl(240, 5%, 91%)",
              borderRadius: "1.5rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              display: "grid",
              gridTemplate: `
                "a b" 1fr
              `,
              "& > .MuiContainer-root": {
                position: "relative",
                width: "40vw",
                maxWidth: "600px",
              },
              [theme.breakpoints.down("lg")]: {
                width: "90vw",
                "& > .MuiContainer-root": {
                  width: "45vw",
                },
              },

              [theme.breakpoints.down("md")]: {
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                "& > .MuiContainer-root": {
                  width: "80vw",
                },
              },
              ["@media(max-height: 670px)"]: {
                height: "85vh",
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
              [theme.breakpoints.down("md")]: {
                position: "absolute",
                top: 0,
                width: "100%",
                height: 0,
              },
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
                top: "55%",
                transform: "translate(0%,-50%)",
                position: "absolute",
              },
              [theme.breakpoints.down("md")]: {
                overflow: "visible",
                "& img": {
                  position: "absolute",
                  top: 0,

                  transform: "unset",
                },
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
                height: "75%",
                top: "62%",
              },
              [theme.breakpoints.down("md")]: {
                position: "relative",
                overflow: "visible",
                "& img": {
                  position: "absolute",
                  left: "50%",
                  top: "-5.5rem",
                  transform: "translateX(-50%)",
                  alignSelf: "center",
                  width: "10rem",
                  height: "10rem",
                },
                "& img#shadow": {
                  width: "10rem",
                  height: "4rem",
                  top: "1rem",
                },
              },
              ["@media(max-height: 670px)"]: {
                "& img": {
                  top: "-4rem",
                },
                "& img#shadow": {
                  top: "1.5rem",
                },
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
                left: "-18%",
                top: "65%",
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
              [theme.breakpoints.down("md")]: {
                height: "100%",
              },
              ["@media(max-height: 670px)"]: {
                mt: "5rem",
              },
            }),
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "70%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
            "&.Mui-expanded": {
              ["@media(max-height: 670px)"]: {
                m: 0,
                "& .MuiCollapse-root": {
                  maxHeight: "3rem",
                  overflow: "scroll",
                },
              },
            },
            bgcolor: "hsl(240, 5%, 91%)",
            boxShadow: "none",
            "::before": {
              width: "98%",
            },
            "& .MuiAccordionDetails-root": {
              p: 0,
              my: "1rem",
              ["@media(max-height: 670px)"]: {
                my: 0,
              },
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
