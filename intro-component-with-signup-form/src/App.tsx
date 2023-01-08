import React from "react";
import { Container } from "@mui/material";
import TypographySection from "./components/TypographySection";
import FormSection from "./components/FormSection";

function App() {
  return (
    <Container id="root">
      <TypographySection />
      <FormSection />
    </Container>
  );
}

export default App;
