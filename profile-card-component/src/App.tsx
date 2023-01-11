import { Avatar, Container, Stack, Typography } from "@mui/material";
import BgTop from "./bg-pattern-top.svg";
import BgBottom from "./bg-pattern-bottom.svg";
import BgPatternCard from "./bg-pattern-card.svg";
import avatarPath from "./image-victor.jpg";

function App() {
  return (
    <Container id="app-container">
      <Container id="background-container">
        <Stack id="background">
          <img src={BgTop} alt="background top" />
          <img src={BgBottom} alt="background bottom" />
        </Stack>
      </Container>
      <Stack id="app">
        <Stack id="card">
          <Stack id="profile">
            <img src={BgPatternCard} alt="background card profile" />
            <Avatar alt="Victor" src={avatarPath} />
            <Stack id="profile-text">
              <Typography variant="name">Victor Crest</Typography>
              &nbsp; &nbsp;
              <Typography variant="age">26</Typography>
            </Stack>
            <Typography variant="location">London</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
