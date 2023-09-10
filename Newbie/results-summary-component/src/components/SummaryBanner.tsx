import { Alert, AlertTitle, SvgIcon } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  score: string;
  variant: string;
  icon: ReactNode;
};

const SummaryBanner = (props: Props) => {
  return (
    <Alert
      icon={<SvgIcon>{props.icon}</SvgIcon>}
      severity="info"
      className={props.variant}
    >
      <AlertTitle>{props.title}</AlertTitle>
      <p>{props.score}</p>
    </Alert>
  );
};

export default SummaryBanner;
