import {
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
// import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400-italic.css";
import { Ref, forwardRef, useImperativeHandle, useState } from "react";
type Props = {
  label: string;
  placeholder: string;
  errorHandler?: (value: string) => string | undefined;
  error?: boolean;
};

const textTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "poppins",
    },
    caption: {
      fontWeight: "400",
      fontStyle: "italic",
      fontSize: "0.65rem",
      color: "inherit",
    },
    h2: {
      letterSpacing: "0.1rem",
      fontSize: "0.7rem",
      marginBottom: "0.1rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "8rem",
          fontSize: "1.5rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "poppins",
            borderColor: "hsl(0, 0%, 86%)",
            transition: "all 0.5s",
            [`&.${outlinedInputClasses.error}`]: {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "hsl(259, 100%, 65%)",
              transition: "all 0.5s",
            },
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(259, 100%, 65%)",
                bgcolor: "hsl(0, 100%, 67%)",
                borderWidth: "0.1rem",
              },
            [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "hsl(259, 100%, 65%)",
                borderWidth: "0.1rem",
              },
          }),
        input: ({ theme }) =>
          theme.unstable_sx({
            p: "10px 8px",
            color: "hsl(0, 0%, 8%)",
            caretColor: "hsl(259, 100%, 65%)",

            "&[type=number]::-webkit-inner-spin-button,& input[type=number]::-webkit-outer-spin-button":
              {
                appearance: "none",
              },
          }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          m: 0,
          color: "hsl(0, 100%, 67%)",
        },
      },
    },
  },
});

export type DateInputRef = {
  getValue: () => string;
};

const DateInput = forwardRef((props: Props, ref: Ref<DateInputRef>) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  return (
    <ThemeProvider theme={textTheme}>
      <Stack>
        <Typography
          sx={{
            color:
              props.error ||
              (props.errorHandler && Boolean(props.errorHandler(value)))
                ? "hsl(0, 100%, 67%)"
                : "hsl(0, 1%, 44%)",
          }}
          component={"label"}
          variant="h2"
        >
          {props.label}
        </Typography>
        <TextField
          placeholder={props.placeholder}
          value={value}
          inputMode="numeric"
          type="number"
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
          error={
            props.error ||
            (props.errorHandler && Boolean(props.errorHandler(value)))
          }
          helperText={
            props.errorHandler && (
              <Typography variant="caption">
                {props.errorHandler(value)}
              </Typography>
            )
          }
        />
      </Stack>
    </ThemeProvider>
  );
});

export default DateInput;
