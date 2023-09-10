import React from "react";
import { Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(0, 0%, 100%)",
      contrastText: "hsl(218, 44%, 22%)",
      dark: "hsl(220, 15%, 55%)",
      light: "hsl(212, 45%, 89%)",
    },
  },

  typography(palette) {
    return {
      allVariants: {
        fontFamily: "Outfit",
      },
      caption: {
        fontWeight: "700",
        color: palette.primary.contrastText,
        fontSize: "1.3rem",
        textAlign: "center",
        lineHeight: "1.8rem",
        "&:last-of-type": {
          marginBottom: "1rem",
        },
      },
      body1: {
        fontWeight: "400",
        color: palette.primary.dark,
        fontSize: "0.9rem",
        textAlign: "center",
        lineHeight: "1.2rem",
      },
    } as TypographyOptions;
  },
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            className: "app-root",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.primary.light,
            });
          },
        },
        {
          props: {
            className: "card",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              maxWidth: "20rem",
              height: "60vh",
              maxHeight: "30rem",
              minHeight: "20rem",
              padding: "1rem",
              borderRadius: "1rem",
              alignItems: "center",
              justifyContent: "flex-start",
              bgcolor: theme.palette.primary.main,
              "& img": {
                width: "100%",
                height: "60%",
                borderRadius: "1rem",
                objectFit: "fill",
                marginBottom: "1rem",
              },
            });
          },
        },
      ],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack className="app-root">
        <Stack className="card">
          <img src={require("./image-qr-code.png")} alt="qr-code" />
          <Typography variant="caption">Improve your front-end</Typography>
          <Typography variant="caption">skills by building projects</Typography>

          <Typography variant="body1">
            Scan the QR code to visit Frontend
          </Typography>
          <Typography variant="body1">
            Mentor and take your coding skills to
          </Typography>
          <Typography variant="body1">the next level</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
