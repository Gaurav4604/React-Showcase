import React from "react";
import { Container, Stack } from "@mui/material";
import TypographySection from "./components/TypographySection";
import FormSection from "./components/FormSection";

function App() {
  return (
    <Container id="root">
      <Stack id="root-stack">
        <TypographySection />
        <FormSection />
      </Stack>
    </Container>
  );
}

export default App;
