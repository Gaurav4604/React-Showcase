import React from "react";
import { Button as MuiButton, Typography } from "@mui/material";

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return (
    <MuiButton
      variant="contained"
      onClick={props.onClick}
      disableElevation
      disableRipple
      disableTouchRipple
    >
      <Typography variant="button">{props.text}</Typography>
    </MuiButton>
  );
};

export default Button;
