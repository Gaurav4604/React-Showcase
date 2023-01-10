import { createTheme } from "@mui/material";
import "@fontsource/fraunces/700.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/500.css";

const theme = createTheme({
  palette: {
    custom: {
      darkCyan: "hsl(158, 36%, 37%)",
      darkerCyan: "hsl(158, 36%, 25%)",
      cream: "hsl(30, 38%, 92%)",
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  typography(palette) {
    return {
      h1: {
        fontSize: "2rem",
        fontFamily: "Fraunces",
        fontWeight: "700",
        color: palette.custom.veryDarkBlue,
      },
      price: {
        color: palette.custom.darkCyan,
        fontFamily: "Fraunces",
        fontWeight: "700",
        fontSize: "2rem",
        marginRight: "1rem",
      },
      priceDrop: {
        color: palette.custom.darkGrayishBlue,
        fontWeight: "500",
        textDecoration: "line-through",
        textDecorationColor: palette.custom.darkGrayishBlue,
        marginTop: "0.4rem",
      },
    };
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom.darkCyan,
            width: "100%",
            height: "3rem",
            "&:hover, &:active": {
              bgcolor: theme.palette.custom.darkerCyan,
            },
            "& .MuiTouchRipple-root": {
              color: theme.palette.custom.darkCyan,
            },
          }),
        startIcon: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom.white,
          }),
      },
    },
    MuiContainer: {
      variants: [
        {
          props: {
            id: "app-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.custom.cream,
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
              },
              "& img": {
                width: "50%",
                height: "100%",
                objectFit: "fill",
                [theme.breakpoints.down("sm")]: {
                  height: "40%",
                  width: "100%",
                },
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
              height: "30rem",
              width: "40rem",
              [theme.breakpoints.down("sm")]: {
                height: "95%",
                maxHeight: "40rem",
                width: "95%",
              },
              bgcolor: theme.palette.custom.white,
              borderRadius: "1rem",
              overflow: "hidden",
            }),
        },
        {
          props: {
            id: "content",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              p: "1.5rem",
              height: "100%",
              width: "50%",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                height: "60%",
                width: "100%",
                p: "1.5rem",
              },
            }),
        },
      ],
    },
  },
});

theme.typography.productType = {
  fontSize: "0.8rem",
  fontFamily: "Montserrat",
  color: theme.palette.custom.darkGrayishBlue,
  fontWeight: "500",
  letterSpacing: "0.2rem",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
};

theme.typography.body = {
  fontFamily: "Montserrat",
  fontSize: "0.8rem",
  fontWeight: "500",
  letterSpacing: "0.01rem",
  lineHeight: "1.5rem",
  color: theme.palette.custom.darkGrayishBlue,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
};

theme.typography.button = {
  color: theme.palette.custom.white,
  fontFamily: "Montserrat",
  fontWeight: "700",
};

export default theme;
