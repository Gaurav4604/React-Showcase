import { Card, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Grid
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "hsl(233, 47%, 7%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: useMediaQuery("(min-width:700px") ? "70vw" : "80vw",
          height: useMediaQuery("(min-width:800px") ? "50vh" : "90vh",
          backgroundColor: "hsl(244, 38%, 16%)",
          borderRadius: "0.6rem",
        }}
      >
        <Stack
          direction={
            useMediaQuery("(min-width:800px") ? "row" : "column-reverse"
          }
          height={"100%"}
        >
          <Stack
            sx={{
              paddingTop: "5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              flex: useMediaQuery("(min-width:800px)") ? "1" : "2",
              // bgcolor: "white",
              height: "100%",
            }}
          >
            <h1
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: "700",
                color: "white",
              }}
            >
              Get <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span>{" "}
              that help your business grow.
            </h1>
            <p
              style={{
                color: "hsla(0, 0%, 100%, 0.75)",
                fontFamily: "Outfit, sans-serif",
                fontWeight: "300",
              }}
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </Stack>
          <div
            style={{
              flex: 1,
              backgroundImage: `url(image-header-${
                useMediaQuery("(min-width:800px") ? "desktop" : "mobile"
              }.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(170, 92, 219, 0.4)",
              }}
            />
          </div>
        </Stack>
      </Card>
    </Grid>
  );
};

export default App;
