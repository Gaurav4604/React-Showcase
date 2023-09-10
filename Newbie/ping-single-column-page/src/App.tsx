import {
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import DashboardIllustrationSource from "./assets/illustration-dashboard.png";
import LogoSource from "./assets/logo.svg";
import Input from "./Input";
import "@fontsource/libre-franklin/300.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/700.css";
import IconRow from "./IconRow";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "Libre Franklin",
            fontWeight: "300",
            color: "hsl(0, 0%, 59%)",
            mb: "1rem",
            [`& > span.bold`]: {
              fontWeight: "700",
              color: " hsl(209, 33%, 12%)",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "3rem",
            },
          }),
        h5: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "1rem",
            textAlign: "center",
            fontFamily: "Libre Franklin",
            fontWeight: "300",
            color: " hsl(209, 33%, 12%)",
            mb: "1.5rem",
          }),
        body1: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
            fontSize: "0.8rem",
            textAlign: "center",
            fontFamily: "Libre Franklin",
            fontWeight: "300",
            color: "hsl(0, 0%, 59%)",
          }),
      },
    },
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            my: "2rem",
          }),
      },
    },
  },
});

function App() {
  const mediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            alt="logo"
            src={LogoSource}
            style={{
              width: "5rem",
            }}
          />
        </Stack>
        <Typography variant="h1">
          We are launching <span className="bold">soon!</span>
        </Typography>
        <Typography variant="h5">Subscribe and get notified</Typography>
        <Input />
        <img
          src={DashboardIllustrationSource}
          alt="dashboard"
          style={{
            width: "100%",
            marginBottom: mediaQuery ? "1rem" : "5rem",
          }}
        />
        <IconRow />
        <Typography variant="body1">
          &copy; Copyright Ping. All rights reserved.
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
