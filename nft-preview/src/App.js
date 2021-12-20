import { Card, Grid, Stack } from "@mui/material";
import React from "react";

import "./App.css";
import CardImage from "./components/CardImage";
import CardText from "./components/CardText";

const App = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          bgcolor: "hsl(217, 54%, 11%)",
        }}
      >
        <Card
          sx={{
            bgcolor: "hsl(216, 50%, 16%)",
            width: "350px",
            height: "550px",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <Stack alignItems="center">
            <CardImage />
            <CardText />
          </Stack>
        </Card>
      </Grid>
    </div>
  );
};

export default App;
