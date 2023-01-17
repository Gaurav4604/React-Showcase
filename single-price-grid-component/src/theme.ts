import { createTheme } from "@mui/material";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";

const theme = createTheme({
  palette: {
    custom: {
      cyan: "hsl(179, 62%, 43%)",
      brightYellow: "hsl(71, 73%, 54%)",
      lightGray: "hsl(204, 43%, 93%)",
      grayishBlue: "hsl(218, 22%, 67%)",
      white: "hsl(0, 100%, 100%)",
    },
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
              width: "100vw",
              height: "100vh",
              bgcolor: theme.palette.custom.grayishBlue,
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
              },
            }),
        },
      ],
    },
  },
});

export default theme;
