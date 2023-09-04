import {
  Button,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
          }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "hsl(0, 36%, 70%)",
          borderWidth: "0.1rem",
          borderRadius: "2rem",
          transition: "0.2s",
        },
        input: {
          width: "calc(100% - 6rem)",
        },
        adornedEnd: ({ theme }) =>
          theme.unstable_sx({
            [`& > .MuiButton-root`]: {
              position: "absolute",
              right: 0,
            },
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            mt: "1rem",
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(0, 93%, 68%)",
              },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "hsl(0, 36%, 70%)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "hsl(0, 36%, 70%)",
            },
          }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            margin: 0,
            height: "100%",
            width: "6rem",
            background: "linear-gradient(135deg, #F8BFBF, #EE8C8C)",
            borderRadius: "2rem",

            zIndex: 10,
          }),
      },
    },
  },
});

const CustomInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        // error
        InputProps={{
          endAdornment: <Button disableRipple>hi</Button>,
        }}
      />
    </ThemeProvider>
  );
};

export default CustomInput;
