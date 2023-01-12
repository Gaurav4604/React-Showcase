import { Container, Stack } from "@mui/material";
import drawersImg from "./assets/drawers.jpg";

type Props = {};

const App = (props: Props) => {
  return (
    <Container>
      <Stack>
        <img src={drawersImg} alt="article thumbnail" />
      </Stack>
    </Container>
  );
};

export default App;
