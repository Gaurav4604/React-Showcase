import { Card, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { Navigate, useParams } from "react-router";
import SvgIllustrationThankYou from "./IllustrationThankyou";

const ThankyouCard = () => {
  const { rating } = useParams();

  return typeof rating !== "undefined" && !isNaN(rating) ? (
    <Card>
      <Stack variant="card-frame">
        <SvgIllustrationThankYou width="11rem" height="7rem" />
        <Chip label={`You selected ${rating} out of 5`} />
        <Typography variant="title">Thank you!</Typography>
        <Typography variant="content" type="thank-you">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Typography>
      </Stack>
    </Card>
  ) : (
    <Navigate to="/" />
  );
};

export default ThankyouCard;
