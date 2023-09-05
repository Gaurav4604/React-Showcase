import { Stack, ThemeProvider, createTheme } from "@mui/material";
import LogoSource from "./logo.svg";

const theme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            position: "absolute",
            left: "10vw",
            top: "5vh",
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              position: "relative",
              top: "unset",
              left: "unset",
              pl: "10vw",
              py: "2rem",
            },
          }),
      },
    },
  },
});

const Logo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row">
        <img src={LogoSource} alt="logo" />
      </Stack>
    </ThemeProvider>
  );
};

export default Logo;
