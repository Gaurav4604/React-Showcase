import { createTheme, experimental_sx as sx } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      backgroundGlobal: " hsl(216, 12%, 8%)",
      backgroundCard: "hsl(213, 19%, 18%)",
      focus: "hsl(25, 97%, 53%)",
      main: "hsl(0, 0%, 100%)",
      secondary: "hsl(216, 12%, 54%)",
      info: "hsl(217, 12%, 63%)",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: sx({
          width: "100%",
          height: "2.5rem",
          marginTop: "1.5rem",
          borderRadius: "2rem",
          bgcolor: "primary.focus",
          fontFamily: "Overpass",
          fontWeight: "700",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 2.5,
          "&:hover": {
            backgroundColor: "primary.main",
            color: "primary.focus",
          },
        }),
      },
    },
    MuiStack: {
      variants: [
        {
          props: { variant: "content-box" },
          style: sx({
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "1rem",
          }),
        },
        {
          props: { variant: "center-text" },
          style: sx({
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }),
        },
        {
          props: { variant: "frame" },
          style: sx({
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            px: "1rem",
            bgcolor: "primary.backgroundGlobal",
          }),
        },
        {
          props: { variant: "card-frame" },
          style: sx({
            width: "100%",
            height: "100%",
            alignItems: "center",
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: sx({
          height: "70%",
          width: "100%",
          p: "2rem",
          maxHeight: {
            lg: "23rem",
            sm: "24rem",
            xs: "24rem",
          },
          maxWidth: "24rem",
          backgroundColor: "primary.backgroundCard",
          borderRadius: "1.5rem",
          boxShadow: "none",
        }),
      },
    },
    MuiFab: {
      variants: [
        {
          props: {
            variant: "icon",
          },
          style: {
            cursor: "default",
            backgroundColor: "rgba(124, 135, 152, 0.15)",
            boxShadow: "none",
            width: "3rem",
            height: "3rem",
            "&:hover": {
              backgroundColor: "rgba(124, 135, 152, 0.15)",
            },
            "&:active": {
              boxShadow: "none",
            },
          },
        },
        {
          props: {
            variant: "button",
          },
          style: sx({
            backgroundColor: "rgba(124, 135, 152, 0.15)",
            boxShadow: "none",
            width: "3rem",
            height: "3rem",
            fontFamily: "Overpass",
            fontWeight: "400",
            color: "primary.secondary",
            fontSize: 15,
            "&:hover": {
              backgroundColor: "primary.info",
              color: "primary.main",
            },
            "&:active": {
              color: "primary.main",
              backgroundColor: "primary.focus",
              boxShadow: "none",
            },
          }),
        },
        {
          props: {
            variant: "button",
            state: "active",
          },
          style: sx({
            color: "primary.main",
            backgroundColor: "primary.focus",
            "&:hover": {
              color: "primary.main",
              backgroundColor: "primary.focus",
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
            fontFamily: "Overpass",
            fontWeight: "700",
            color: "primary.main",
            marginTop: "1.5rem",
            fontSize: 22,
          }),
        },
        {
          props: {
            variant: "content",
          },
          style: sx({
            fontFamily: "Overpass",
            fontWeight: "400",
            color: "primary.info",
            marginTop: "0.7rem",
            lineHeight: "1.5",
            fontSize: 15,
          }),
        },
        {
          props: {
            variant: "content",
            type: "thank-you",
          },
          style: sx({
            fontFamily: "Overpass",
            fontWeight: "400",
            textAlign: "center",
            color: "primary.info",
            marginTop: "0.7rem",
            lineHeight: "1.5",
            fontSize: 15,
          }),
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          marginTop: "1.5rem",
          backgroundColor: "rgba(124, 135, 152, 0.15)",
        },
        label: sx({
          fontFamily: "Overpass",
          fontWeight: "400",
          color: "primary.focus",
        }),
      },
    },
  },
});

export default theme;
