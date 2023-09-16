import React from "react";
import { Button as MuiButton, Typography } from "@mui/material";

type Props = {
  id?: string;
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
      id={props.id}
    >
      <Typography variant="button">{props.text}</Typography>
    </MuiButton>
  );
};

export default Button;
