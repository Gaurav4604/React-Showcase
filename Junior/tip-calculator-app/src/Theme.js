import { createTheme, experimental_sx as sx } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(183, 100%, 15%)",
      digits: "hsl(172, 67%, 45%)",
      backgroundGlobal: "hsl(185, 41%, 84%)",
      backgroundCard: "hsl(0, 0%, 100%)",
      input: "hsl(189, 41%, 97%)",
      inputText: "hsl(186, 14%, 43%)",
      globalText: "hsl(184, 14%, 56%)",
    },
  },
  typography: {
    fontFamily: "Space Mono",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: sx({
          boxShadow: "none",
          maxWidth: "900px",
          width: "80%",
          height: "55%",
          padding: "1.5rem",
          backgroundColor: "primary.backgroundCard",
          borderRadius: "1.5rem",
          display: "flex",
        }),
      },
    },
    MuiStack: {
      variants: [
        {
          props: {
            variant: "background",
          },
          style: sx({
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "primary.backgroundGlobal",
          }),
        },
        {
          props: {
            variant: "container",
          },
          style: sx({
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }),
        },
        {
          props: {
            variant: "container",
            type: "data-display",
          },
          style: sx({
            width: "50%",
            borderRadius: "1rem",
            padding: "2.5rem",
            backgroundColor: "primary.main",
          }),
        },
        {
          props: {
            variant: "container",
            type: "value-display",
          },
          style: sx({
            width: "100%",
            height: "4rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }),
        },
        {
          props: {
            variant: "container",
            type: "value-display-wrapper",
          },
          style: sx({
            width: "100%",
            height: "10rem",
            flexDirection: "column",
            justifyContent: "space-between",
          }),
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "reset",
          },
          style: sx({
            fontSize: "1rem",
            width: "100%",
            height: "2.7rem",
            backgroundColor: "primary.digits",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "primary.digits",
              opacity: 0.9,
            },
          }),
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "title",
          },
          style: sx({
            color: "primary.backgroundCard",
            fontSize: "0.9rem",
          }),
        },
        {
          props: {
            variant: "caption",
          },
          style: sx({
            color: "primary.globalText",
            fontSize: "0.8rem",
          }),
        },
        {
          props: {
            variant: "digits",
          },
          style: sx({
            color: "primary.digits",
            fontSize: "2.8rem",
          }),
        },
      ],
    },
  },
});

export default theme;
