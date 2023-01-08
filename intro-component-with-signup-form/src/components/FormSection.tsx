import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ThemedInput from "./ThemedInput";

type Props = {};

const FormSection = (props: Props) => {
  return (
    <Stack id="form-wrapping-stack">
      <Button id="try-it-button" variant="contained" sx={{ color: "white" }}>
        <Typography id="try-it">Try it free 7 days</Typography>&nbsp;
        <Typography id="pricing">then $20/mo. thereafter</Typography>
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
          By clicking this button, you are agreeing to our{" "}
          <Typography variant="subtitle2">Terms and Services</Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FormSection;
