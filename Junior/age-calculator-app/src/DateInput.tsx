import { Stack, TextField, Typography } from "@mui/material";
// import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/700.css";
type Props = {
  label: string;
  placeholder: string;
  errorHandler?: (value: string) => string;
};

const DateInput = (props: Props) => {
  return (
    <Stack>
      <Typography
        sx={{
          fontFamily: "poppins",
          color: "hsl(0, 1%, 44%)",
          letterSpacing: "0.1rem",
          fontSize: "0.9rem",
        }}
      >
        {props.label}
      </Typography>
      <TextField placeholder={props.placeholder} helperText="hello there" />
    </Stack>
  );
};

export default DateInput;
