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
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("lg")]: {
              maxWidth: "100vw",
            },
            [theme.breakpoints.up("md")]: {
              maxWidth: "100vw",
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
              display: "grid",
              alignContent: "center",
            }),
        },
      ],
    },
  },
});

export default rootTheme;
