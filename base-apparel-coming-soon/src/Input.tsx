import {
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React from "react";
import { ArrowForwardIosRounded } from "@mui/icons-material";

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
          borderRadius: "1.75rem",
          transition: "0.2s",
        },
        input: {
          width: "calc(100% - 6rem)",
        },
        root: ({ theme }) =>
          theme.unstable_sx({
            m: "1rem",
            pr: "0",
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
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            margin: 0,
            top: "-0.25px",
            right: 0,
            position: "absolute",
            height: "3.5rem",
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
    },
  },
});

const CustomInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        placeholder="Email Address"
        // error
        InputProps={{
          endAdornment: (
            <IconButton>
              <ArrowForwardIosRounded />
            </IconButton>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default CustomInput;
