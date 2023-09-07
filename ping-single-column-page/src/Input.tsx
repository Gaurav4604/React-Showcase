import {
  Button,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  useMediaQuery,
} from "@mui/material";

import "@fontsource/libre-franklin/300.css";
import "@fontsource/libre-franklin/300-italic.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/700.css";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [`&.${outlinedInputClasses.error}`]: {
              color: "hsl(354, 100%, 66%)",
              fontStyle: "italic",
              fontWeight: "300",
              fontFamily: "Libre Franklin",
              textAlign: "center",
              mb: "1.5rem",
              [theme.breakpoints.up("md")]: {
                mb: "unset",
                textAlign: "start",
                pl: "1rem",
              },
            },
          }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
            flex: 1,
            mb: "0.5rem",
            height: "3.5rem",
            fontFamily: "Libre Franklin",
          }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "2rem",
          borderColor: "hsl(223, 87%, 63%)",
        },
        input: ({ theme }) =>
          theme.unstable_sx({
            pl: "2rem",
            color: "hsl(209, 33%, 12%)",
            fontFamily: "Libre Franklin",
            fontWeight: "300",
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(354, 100%, 66%)",
              },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "hsl(223, 87%, 63%)",
            },
          }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            flex: 1,
            height: "3.5rem",
            borderRadius: "2rem",
            backgroundColor: "hsl(223, 87%, 63%)",
            boxShadow: "0px 2px 10px hsl(223, 87%, 63%)",
            textTransform: "capitalize",
            fontFamily: "Libre Franklin",
            fontWeight: "600",
            fontSize: "1.2rem",
            ":hover": {
              backgroundColor: "hsl(223, 87%, 73%)",
              boxShadow: "0px 0px 10px hsl(223, 87%, 63%)",
            },
            ":focus": {
              boxShadow: "0px 0px 10px hsl(223, 87%, 63%)",
            },
            [theme.breakpoints.up("md")]: {
              maxWidth: "10rem",
              fontSize: "1rem",
              ml: "0.5rem",
            },
          }),
      },
    },
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            minHeight: "8rem",
            marginBottom: "5rem",
            [theme.breakpoints.up("md")]: {
              minHeight: "unset",
              marginBottom: "2rem",
            },
          }),
      },
    },
  },
});

const validateEmail = (email: string) => {
  return Boolean(
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

const Input = () => {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const mediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={mediaQuery ? "row" : "column"}>
        <TextField
          placeholder="Your email address..."
          error={error}
          value={input}
          helperText={error ? "Please provide a valid email address" : ""}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (!mediaQuery) {
              setError(input.length > 0 && !validateEmail(input));
            }
          }}
          onMouseEnter={() => {
            setError(mediaQuery && input.length > 0 && !validateEmail(input));
          }}
          onMouseLeave={() => setError(false)}
        >
          Notify Me
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default Input;
