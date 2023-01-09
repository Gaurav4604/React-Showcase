import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ThemedInput from "./ThemedInput";

type Props = {};

const FormSection = (props: Props) => {
  const theme = useTheme();
  const mediaMatcher = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack id="form-wrapping-stack">
      <Button id="try-it-button" variant="contained" sx={{ color: "white" }}>
        <span>
          <b>Try it free 7 days</b> then
          {(mediaMatcher && <br />) || <></>}
          $20/mo. thereafter
        </span>
      </Button>
      <Stack id="form-stack">
        <ThemedInput
          helperText="First Name cannot be empty"
          placeholder="First Name"
          type="text"
          validation={(input) => input.length < 1}
        />
        <ThemedInput
          helperText="Last Name cannot be empty"
          placeholder="Last Name"
          type="text"
          validation={(input) => input.length < 1}
        />
        <ThemedInput
          helperText="Looks like this is not an email"
          placeholder="Email Address"
          type="email"
          validation={(input) => {
            const checker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return !checker.test(input);
          }}
        />
        <ThemedInput
          helperText="Password cannot be empty"
          placeholder="Password"
          type="password"
          validation={(input) => input.length < 1}
        />
        <Button id="form-button" variant="contained" sx={{ color: "white" }}>
          claim your free trial
        </Button>
        <Typography variant="overline">
          <span>By clicking this button, you are agreeing to our </span>
          <span>Terms and Services</span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FormSection;
