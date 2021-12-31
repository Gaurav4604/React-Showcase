import { Button, Card, CardMedia, Stack } from "@mui/material";
import React from "react";
import CardBanner from "./CardBanner";

const MediaCard = () => {
  return (
    <Card
      sx={{
        width: "350px",
        height: "550px",
        borderRadius: "1rem",
        boxShadow: "1px 10px 10px hsl(225, 100%, 90%)",
      }}
    >
      <CardMedia
        component="img"
        height="175px"
        image="illustration-hero.svg"
        alt="hero"
      />

      <Stack
        spacing={3}
        alignItems="center"
        sx={{ marginTop: "2rem", padding: "0 2rem" }}
      >
        <h2
          style={{
            fontWeight: 900,
            fontFamily: "1rem",
            color: "hsl(223, 47%, 23%)",
          }}
        >
          Order Summary
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "0.8rem",
            textAlign: "center",
            color: "hsl(224, 23%, 55%)",
          }}
        >
          You can now listen to millions of songs,
          <br />
          audiobooks, and podcasts on any device
          <br />
          anywhere you like!
        </p>

        <CardBanner />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "hsl(245, 75%, 52%)",
            color: "#fff",
            textTransform: "capitalize",
            fontFamily: `Red Hat Display, sans-serif`,
            fontSize: "0.7rem",
            fontWeight: 900,
            width: "100%",
            height: "35px",
            verticalAlign: "center",
            boxShadow: "1px 10px 10px hsl(225, 100%, 90%)",
            // eslint-disable-next-line no-useless-computed-key
            ["&:hover"]: {
              backgroundColor: "hsl(245, 75%, 60%)",
            },
          }}
        >
          Proceed to Payment
        </Button>
        <Button
          variant="text"
          sx={{
            color: "hsl(223, 47%, 23%)",
            textTransform: "capitalize",
            fontFamily: `Red Hat Display, sans-serif`,
            fontSize: "0.7rem",
            fontWeight: 700,
            width: "100%",
            height: "35px",
            verticalAlign: "center",
            // eslint-disable-next-line no-useless-computed-key
            ["&:hover"]: {
              color: "hsl(223, 47%, 30%)",
            },
          }}
        >
          Cancel Order
        </Button>
      </Stack>
    </Card>
  );
};

export default MediaCard;
