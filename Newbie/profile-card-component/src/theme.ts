import { createTheme } from "@mui/material";
import "@fontsource/kumbh-sans/400.css";
import "@fontsource/kumbh-sans/700.css";

const theme = createTheme({
  palette: {
    custom: {
      darkCyan: "hsl(185, 75%, 39%)",
      veryDarkDesaturatedBlue: " hsl(229, 23%, 23%)",
      darkGrayishBlue: "hsl(227, 10%, 46%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
  },
  typography: (palette) => ({
    name: {
      fontWeight: "700",
      fontFamily: "Kumbh Sans",
      color: palette.custom.veryDarkDesaturatedBlue,
      fontSize: "1.2rem",
    },
    age: {
      fontWeight: "400",
      fontFamily: "Kumbh Sans",
      color: palette.custom.darkGrayishBlue,
      fontSize: "1.3rem",
    },
    location: {
      fontWeight: "400",
      fontFamily: "Kumbh Sans",
      color: palette.custom.darkGrayishBlue,
      fontSize: "1.1rem",
      marginBottom: "1.5rem",
    },
    stats: {
      fontFamily: "Kumbh Sans",
      fontWeight: "700",
      color: palette.custom.veryDarkDesaturatedBlue,
      fontSize: "1.2rem",
      textAlign: "center",
      textTransform: "uppercase",
    },
    statsLabel: {
      fontFamily: "Kumbh Sans",
      fontWeight: "400",
      color: palette.custom.darkGray,
      textTransform: "capitalize",
      fontSize: "0.75rem",
      textAlign: "center",
      letterSpacing: "0.1rem",
    },
  }),
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
              alignItems: "center",
              justifyContent: "center",
            }),
        },
        {
          props: {
            id: "card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "70%",
              width: "90%",
              maxWidth: "20rem",
              maxHeight: "25rem",
              borderRadius: "1rem",
              bgcolor: "white",
              overflow: "hidden",
              boxShadow: "0px 2px 10px rgb(0, 0, 0, 0.1)",
            }),
        },
        {
          props: {
            id: "profile",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "80%",
              position: "relative",
              alignItems: "center",
              "&  > img": {
                width: "100%",
                height: "50%",
                overflow: "hidden",
                marginBottom: "4.5rem",
              },
              "& .MuiAvatar-root": {
                position: "absolute",
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
                width: "7rem",
                height: "7rem",
                border: "1px solid black",
                borderRadius: "50%",
                borderColor: "white",
                borderWidth: "0.3rem",
              },
            }),
        },
        {
          props: {
            id: "profile-text",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0.5rem",
            }),
        },
        {
          props: {
            id: "stats-stack",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "20%",
              px: "2rem",
              py: "0.8rem",
              flexDirection: "row",
              justifyContent: "space-between",
            }),
        },
        {
          props: {
            id: "stats-component",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
            }),
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: {
            id: "profile-divider",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: theme.palette.custom.darkGray,
              opacity: 0.4,
              width: "100%",
            }),
        },
      ],
    },
  },
});

export default theme;
