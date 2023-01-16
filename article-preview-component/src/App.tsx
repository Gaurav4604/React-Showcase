import { Container, Stack, Typography } from "@mui/material";
import drawersImg from "./assets/drawers.jpg";

type Props = {};

const App = (props: Props) => {
  return (
    <Container id="app-root">
      <Stack id="app-card">
        <img src={drawersImg} alt="article thumbnail" />
        <Stack id="typography-section">
          <Typography variant="articleTitle">
            Shift the overall look and feel by
            <br /> adding these wonderful touches to
            <br /> furniture in your home
          </Typography>
          <Typography variant="articleBody">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
