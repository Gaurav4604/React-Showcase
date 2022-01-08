import React from "react";
import { Container, Stack, useMediaQuery } from "@mui/material";
import TextComponent from "./components/TextComponent";
import Background from "./Background";

function App() {
  return (
    <Background>
      <Stack
        direction={
          useMediaQuery("@media (max-width: 600px)") ? "column" : "row"
        }
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "80vw",
          height: "80vh",
        }}
      >
        <TextComponent />
        <Container sx={{ flex: 1 }}></Container>
      </Stack>
    </Background>
  );
}

export default App;
