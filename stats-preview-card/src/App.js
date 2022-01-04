import { Card, Grid, Stack, useMediaQuery } from "@mui/material";
import React from "react";

const StatsField = ({ value, name }) => {
  return (
    <Stack>
      <h1
        style={{
          color: "white",
          fontFamily: "Outfit, sans-serif",
          fontWeight: "700",
          fontSize: "1.5rem",
          textAlign: useMediaQuery("(min-width: 1000px)") ? "start" : "center",
          letterSpacing: "0.1rem",
          marginBottom: "0.2rem",
        }}
      >
        {value}
      </h1>
      <p
        style={{
          color: "hsla(0, 0%, 100%, 0.6)",
          fontFamily: "Outfit, sans-serif",
          fontWeight: "300",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
          fontSize: "0.7rem",
          textAlign: useMediaQuery("(min-width: 1000px)") ? "start" : "center",
        }}
      >
        {name}
      </p>
    </Stack>
  );
};

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
          width: useMediaQuery("(min-width:1000px)") ? "90vw" : "80vw",
          height: useMediaQuery("(min-width:1000px)") ? "50vh" : "90vh",
          maxWidth: "1000px",
          backgroundColor: "hsl(244, 38%, 16%)",
          borderRadius: "0.6rem",
        }}
      >
        <Stack
          sx={{
            flexDirection: useMediaQuery("(min-width:1000px)")
              ? "row"
              : "column-reverse",
          }}
          height={"100%"}
        >
          <Stack
            sx={{
              paddingTop: useMediaQuery("(min-width: 1000px)")
                ? "5rem"
                : "2rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              flex: useMediaQuery("(min-width:1000px)") ? "1" : "2",
              // bgcolor: "white",
              height: "100%",
            }}
          >
            <h1
              style={{
                fontSize: useMediaQuery("(min-width:1000px)")
                  ? "2.5rem"
                  : "3rem",
                fontFamily: "Outfit, sans-serif",
                fontWeight: "700",
                textAlign: useMediaQuery("(min-width: 1000px)")
                  ? "start"
                  : "center",
                color: "white",
              }}
            >
              Get <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span>{" "}
              that help
              {useMediaQuery("(min-width:1150px)") ? <br /> : " "}
              your business grow.
            </h1>
            <p
              style={{
                marginTop: "1.5rem",
                color: "hsla(0, 0%, 100%, 0.75)",
                fontFamily: "Outfit, sans-serif",
                fontWeight: "300",
                lineHeight: "150%",
                textAlign: useMediaQuery("(min-width: 1000px)")
                  ? "start"
                  : "center",
                fontSize: "1.1rem",
              }}
            >
              Discover the benefits of data analytics and make <br /> better
              decisions regarding revenue, customer <br /> experience, and
              overall efficiency.
            </p>

            <Stack
              spacing={6}
              direction={
                useMediaQuery("(min-width: 1000px)") ? "row" : "column"
              }
              sx={{
                height: "20%",
                width: "100%",
                flexDirection: useMediaQuery("(min-width: 1000px)")
                  ? "row"
                  : "column",
                alignItems: useMediaQuery("(min-width: 1000px)")
                  ? "flex-start"
                  : "center",
                marginTop: "2.5rem",
              }}
            >
              <StatsField value={"10k+"} name={"companies"} />
              <StatsField value={"314"} name={"templates"} />
              <StatsField value={"12M+"} name={"queries"} />
            </Stack>
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
