import { Stack, Typography } from "@mui/material";
import React from "react";

const ValueDisplay = ({ title, value }) => {
  return (
    <Stack variant="container" type="value-display">
      <Stack justifyContent="flex-end" sx={{ height: "85%" }}>
        <Typography variant="title">{title}</Typography>
        <Typography variant="caption">/ person</Typography>
      </Stack>
      <Typography variant="digits">${value}</Typography>
    </Stack>
  );
};

export default ValueDisplay;
