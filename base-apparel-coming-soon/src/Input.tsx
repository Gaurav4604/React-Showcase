import {
  IconButton,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React, { useState } from "react";
import {
  ArrowForwardIosRounded,
  PriorityHighRounded,
} from "@mui/icons-material";

import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";

const theme = createTheme({
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: "Josefin Sans",
            fontWeight: "400",
            fontSize: "0.85rem",
            ml: "calc(1rem + 14px)",
            mt: "5px",
            color: "hsl(0, 36%, 70%)",
          }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
            m: 0,
          }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "hsl(0, 36%, 70%)",
          borderWidth: "0.1rem",
          borderRadius: "1.75rem",
          transition: "0.2s",
        },
        input: ({ theme }) =>
          theme.unstable_sx({
            width: "calc(100% - 10rem)",
            m: 0,
            ml: "1rem",
            color: "hsl(0, 6%, 24%)",
            fontFamily: "Josefin Sans",
            fontWeight: "600",
            "::placeholder": {
              color: "hsl(0, 36%, 70%)",
              opacity: 0.8,
            },
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            pr: "0",

            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(0, 93%, 68%)",
              },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "hsl(0, 36%, 70%)",
            },
            [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(0, 36%, 70%)",
              },
          }),
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: {
            className: "icon-submit",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "100%",
              width: "6rem",
              background: "linear-gradient(135deg, #F8BFBF, #EE8C8C)",
              borderRadius: "1.75rem",
              boxShadow: "0 1px 10px #EE8C8C",
              transition: "0.5s",
              zIndex: 10,
              color: "white",
              "&:hover": {
                boxShadow: "0 10px 20px #EE8C8C",
              },
              "& .MuiTouchRipple-child": {
                backgroundColor: "white",
              },
            }),
        },
        {
          props: {
            className: "icon-alert",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "0.7rem",
              width: "0.7rem",
              color: "white",
              backgroundColor: "hsl(0, 93%, 68%)",
              p: "0.8rem",
            }),
        },
      ],
    },
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            margin: 0,
            top: "-0.25px",
            right: 0,
            position: "absolute",
            height: "3.5rem",
            width: "6rem",
            alignItems: "center",
            justifyContent: "center",
            "&.error-state": {
              justifyContent: "space-between",
              width: "8.5rem",
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

const CustomInput = () => {
  const [mail, setMail] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <TextField
        placeholder="Email Address"
        error={mail.length > 0 && !validateEmail(mail)}
        value={mail}
        helperText={
          mail.length > 0 && !validateEmail(mail)
            ? "Please provide a valid email"
            : ""
        }
        onChange={(e) => setMail(e.target.value)}
        InputProps={{
          endAdornment: (
            <Stack
              direction="row"
              className={
                mail.length > 0 && !validateEmail(mail) ? "error-state" : ""
              }
            >
              {mail.length > 0 && !validateEmail(mail) && (
                <IconButton className={`icon-alert`}>
                  <PriorityHighRounded fontSize="small" />
                </IconButton>
              )}
              <IconButton className="icon-submit">
                <ArrowForwardIosRounded />
              </IconButton>
            </Stack>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default CustomInput;
