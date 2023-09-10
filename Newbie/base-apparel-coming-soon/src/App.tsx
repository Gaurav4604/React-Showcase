import React from "react";
import Input from "./Input";
import {
  Container,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import BackgroundImageSource from "./bg-pattern-desktop.svg";
import HeroImageSourceDesktop from "./hero-desktop.jpg";
import HeroImageSourceMobile from "./hero-mobile.jpg";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import Logo from "./Logo";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Josefin Sans",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: ({ theme }) =>
          theme.unstable_sx({
            textTransform: "uppercase",
            letterSpacing: "0.5rem",
            fontSize: "4rem",
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          }),
        caption: ({ theme }) =>
          theme.unstable_sx({
            color: "hsl(0, 36%, 70%)",
            fontSize: "0.9rem",
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
          }),
      },
      variants: [
        {
          props: {
            className: "first",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontWeight: "300",
              color: "hsl(0, 36%, 70%)",
            }),
        },
        {
          props: {
            className: "second",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontWeight: "600",
              color: "hsl(0, 6%, 24%)",
            }),
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("lg")]: {
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
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              "& #hero": {
                gridColumn: "4/6",
                gridRow: "1/3",
                width: "100%",
                height: "100%",
              },
              [theme.breakpoints.down("md")]: {
                display: "flex",
                height: "unset",
                minHeight: "100vh",
                flexDirection: "column-reverse",
                "& #hero": {
                  width: "100%",
                },
              },
            }),
        },
        {
          props: {
            id: "content-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridColumn: "1/4",
              gridRow: "1/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background:
                "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
              "& > img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 0,
              },
              [theme.breakpoints.down("md")]: {
                flex: 1,
              },
            }),
        },
        {
          props: {
            id: "content",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              zIndex: 1,
              height: "26rem",
              width: "30rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                alignItems: "center",
                justifyContent: "space-evenly",
                px: "1.5rem",
                height: "30rem",
              },
            }),
        },
      ],
    },
  },
});

function App() {
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters id="main">
        <Container component={"section"} disableGutters id="content-container">
          {!mediaQuery && <img src={BackgroundImageSource} alt="background" />}
          <Container component={"section"} id="content" disableGutters>
            <span>
              <Typography variant="h2" className="first">
                We're
              </Typography>
              <Typography variant="h2" className="second">
                Coming
              </Typography>
              <Typography variant="h2" className="second">
                Soon
              </Typography>
            </span>
            <Typography variant="caption">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </Typography>
            <Input />
          </Container>
        </Container>
        <img
          src={mediaQuery ? HeroImageSourceMobile : HeroImageSourceDesktop}
          alt="hero"
          id="hero"
        />
        <Logo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
