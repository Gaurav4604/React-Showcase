import {
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LogoSource from "./assets/logo.svg";
import MockupSource from "./assets/illustration-mockups.svg";

import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/open-sans/400.css";
import IconRow from "./IconRow";

const theme = createTheme({
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            id: "app-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              minHeight: "100vh",
              width: "100vw",
              pt: "8rem",
              px: "2.5rem",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "hsl(257, 40%, 49%)",
              backgroundImage: `url("/bg-mobile.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              position: "relative",
              "& > img#logo": {
                width: "10rem",
                position: "absolute",
                top: "2rem",
                left: "2rem",
              },
              [theme.breakpoints.up("md")]: {
                height: "100vh",
                backgroundSize: "cover",
                backgroundImage: `url("/bg-desktop.svg")`,
                flexDirection: "row",
                justifyContent: "center",
              },
              "& > img#mockup": {
                width: "100%",
                display: "block",
                mb: "5rem",
                [theme.breakpoints.up("md")]: {
                  mr: "2rem",
                  mb: 0,
                  height: "90%",
                  width: "60vw",
                  objectFit: "contain",
                },
              },
            }),
        },
        {
          props: {
            id: "typography-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              [theme.breakpoints.up("md")]: {
                height: "70%",
                mr: "2rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "1.8rem",
            color: "white",
            textAlign: "center",
            lineHeight: "2.8rem",
            fontWeight: "600",
            mb: "1.5rem",
            fontFamily: "poppins",
            [theme.breakpoints.up("md")]: {
              fontSize: "3rem",
              textAlign: "start",
              lineHeight: "3.8rem",
            },
          }),
        h2: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "1rem",
            color: "white",
            textAlign: "center",
            lineHeight: "1.8rem",
            fontWeight: "400",
            mx: "1.5rem",
            mb: "1.5rem",
            fontFamily: "poppins",
            [theme.breakpoints.up("md")]: {
              fontSize: "1.25rem",
              textAlign: "start",
              mx: 0,
            },
          }),
        button: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: "Open Sans",
            textTransform: "capitalize",
            color: "inherit",
          }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "18rem",
            borderRadius: "1.5rem",
            height: "3rem",
            mb: "4rem",
            bgcolor: "white",
            color: "hsl(257, 40%, 49%)",
            "&:hover": {
              bgcolor: "hsl(300, 69%, 71%)",
              color: "white",
            },
            [theme.breakpoints.up("md")]: {
              width: "15rem",
            },
          }),
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack id="app-container">
        <img alt="logo" id="logo" src={LogoSource} />
        <img alt="mockup" id="mockup" src={MockupSource} />
        <Stack id="typography-container">
          <Typography variant="h1">
            Build The Community Your Fans Will Love
          </Typography>
          <Typography variant="h2">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </Typography>
          <Button variant="contained">
            <Typography variant="button">Register</Typography>
          </Button>
          <IconRow />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
