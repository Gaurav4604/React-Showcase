import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";
import BgTop from "./bg-pattern-top.svg";
import BgBottom from "./bg-pattern-bottom.svg";
import BgPatternCard from "./bg-pattern-card.svg";
import avatarPath from "./profile-image.jpeg";
import StatsComponent from "./StatsComponent";

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
            <Avatar alt="Gaurav" src={avatarPath} />
            <Stack id="profile-text">
              <Typography variant="name">Gaurav Singh</Typography>
              &nbsp; &nbsp;
              <Typography variant="age">21</Typography>
            </Stack>
            <Typography variant="location">India</Typography>
            <Divider id="profile-divider" />
          </Stack>
          <Stack id="stats-stack">
            <StatsComponent stats="80k" statsLabel="Followers" />
            <StatsComponent stats="803k" statsLabel="Likes" />
            <StatsComponent stats="1.4k" statsLabel="Photos" />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
