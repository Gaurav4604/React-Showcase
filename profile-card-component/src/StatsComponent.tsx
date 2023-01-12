import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  stats: string;
  statsLabel: string;
};

const StatsComponent = (props: Props) => {
  return (
    <Stack id="stats-component">
      <Typography variant="stats">{props.stats}</Typography>
      <Typography variant="statsLabel">{props.statsLabel}</Typography>
    </Stack>
  );
};

export default StatsComponent;
