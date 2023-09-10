import { Avatar, Container, Stack } from "@mui/material";
import React from "react";
import "./index.css";

const CardBanner = () => {
  return (
    <Container
      fixed
      sx={{
        width: "100%",
        height: "65px",
        backgroundColor: "hsl(225, 100%, 98%)",
        borderRadius: "5px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ width: "100%", height: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "70%", height: "100%" }}
        >
          <Avatar>
            <img src="icon-music.svg" alt="icon for music" />
          </Avatar>

          <Container fixed>
            <h2
              style={{
                fontSize: "0.75rem",
                marginBottom: "0.2rem",
                width: "100%",
                fontWeight: "900",
                color: "hsl(223, 47%, 23%)",
              }}
            >
              Annual Plan
            </h2>
            <p
              style={{
                fontSize: "0.65rem",
                color: "hsl(224, 23%, 55%)",
                fontWeight: "500",
              }}
            >
              $59.99/year
            </p>
          </Container>
        </Stack>

        <a href="#href" className="link">
          Change
        </a>
      </Stack>
    </Container>
  );
};

export default CardBanner;
