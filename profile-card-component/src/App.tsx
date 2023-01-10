import { Container, Stack } from "@mui/material";
import BgTop from "./bg-pattern-top.svg";
import BgBottom from "./bg-pattern-bottom.svg";

function App() {
  return (
    <Container id="app-container">
      <Container id="background-container">
        <Stack id="background">
          <img src={BgTop} alt="background top" />
          <img src={BgBottom} alt="background bottom" />
        </Stack>
      </Container>
      <Stack id="app"></Stack>
    </Container>
  );
}

export default App;
