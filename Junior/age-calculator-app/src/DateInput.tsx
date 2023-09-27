import { Stack, TextField, Typography } from "@mui/material";
// import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/700.css";
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
          color: "hsl(0, 1%, 44%)",
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
          width: "8rem",
          fontSize: "1.5rem",
          "& > .MuiInputBase-root": {
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "poppins",
            borderColor: "hsl(0, 1%, 44%)",
            "& fieldset": {
              borderColor: "inherit",
            },
          },
          "& > .MuiInputBase-root.Mui-focused": {
            borderColor: "hsl(259, 100%, 65%)",
            "& fieldset": {
              borderColor: "inherit",
            },
          },
          "& input": {
            p: "10px 8px",
            color: "hsl(0, 0%, 8%)",
            caretColor: "hsl(259, 100%, 65%)",
          },
        }}
        onChange={(e) => setValue(e.target.value)}
        error={
          props.error ||
          (props.errorHandler && Boolean(props.errorHandler(value)))
        }
        helperText={props.errorHandler && Boolean(props.errorHandler(value))}
      />
    </Stack>
  );
};

export default DateInput;
