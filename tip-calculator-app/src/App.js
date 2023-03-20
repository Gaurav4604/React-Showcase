import { Button, Card, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "./Theme";
import ValueDisplay from "./ValueDisplay";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack variant="background">
        <Card>
          <Stack variant="container"></Stack>
          <Stack variant="container" type="data-display">
            <Stack variant="container" type="value-display-wrapper">
              <ValueDisplay title={"Tip Amount"} value={4.97} />
              <ValueDisplay title={"Total"} value={32.79} />
            </Stack>
            <Button variant="reset">reset</Button>
          </Stack>
        </Card>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
