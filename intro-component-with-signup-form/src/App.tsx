import React from "react";
import { Container } from "@mui/material";
import TypographySection from "./components/TypographySection";
import ThemedInput from "./components/ThemedInput";

function App() {
  return (
    <Container id="root">
      <TypographySection />
      <ThemedInput />
    </Container>
  );
}

export default App;
