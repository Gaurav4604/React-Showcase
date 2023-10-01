import { Stack, TextField, Typography } from "@mui/material";
// import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400-italic.css";
import { useState } from "react";
type Props = {
  label: string;
  placeholder: string;
  errorHandler?: (value: string) => string | undefined;
  error?: boolean;
};

const DateInput = (props: Props) => {
  const [value, setValue] = useState("");
  return (
    <Stack>
      <Typography
        sx={{
          fontFamily: "poppins",
          color:
            props.error ||
            (props.errorHandler && Boolean(props.errorHandler(value)))
              ? "hsl(0, 100%, 67%)"
              : "hsl(0, 1%, 44%)",
          letterSpacing: "0.1rem",
          fontSize: "0.9rem",
        }}
        component={"label"}
      >
        {props.label}
      </Typography>
      <TextField
        placeholder={props.placeholder}
        value={value}
        inputMode="numeric"
        type="number"
        sx={{
          width: "9rem",
          fontSize: "1.5rem",
          "& > .MuiInputBase-root": {
            transition: "all 0.25s ease",
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "poppins",
            borderColor: "hsl(0, 0%, 86%)",
            "& fieldset": {
              borderColor: "inherit",
            },
          },
          "& .MuiFormHelperText-root": {
            m: 0,
            color: "hsl(0, 100%, 67%)",
          },
          "& > .MuiInputBase-root:hover": {
            borderColor: "hsl(259, 100%, 65%)",
            "& fieldset": {
              borderColor: "inherit",
              borderWidth: "1px",
            },
          },
          "& > .MuiInputBase-root.Mui-focused": {
            borderColor: "hsl(259, 100%, 65%)",
            "& fieldset": {
              borderColor: "inherit",
              borderWidth: "1px",
            },
          },
          "& > .MuiInputBase-root.Mui-error": {
            borderColor: "hsl(0, 100%, 67%)",
            "& fieldset": {
              borderColor: "inherit",
              borderWidth: "1px",
            },
          },
          "& input": {
            p: "10px 8px",
            color: "hsl(0, 0%, 8%)",
            caretColor: "hsl(259, 100%, 65%)",
          },
          "& input[type=number]::-webkit-inner-spin-button,& input[type=number]::-webkit-outer-spin-button":
            {
              appearance: "none",
            },
        }}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        error={
          props.error ||
          (props.errorHandler && Boolean(props.errorHandler(value)))
        }
        helperText={
          props.errorHandler && (
            <Typography
              variant="caption"
              sx={{
                fontWeight: "400",
                fontFamily: "poppins",
                fontStyle: "italic",
                fontSize: "0.65rem",
                color: "inherit",
              }}
            >
              {props.errorHandler(value)}
            </Typography>
          )
        }
      />
    </Stack>
  );
};

export default DateInput;
