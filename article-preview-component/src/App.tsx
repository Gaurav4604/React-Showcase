import {
  Avatar,
  Container,
  IconButton,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import drawersImg from "./assets/drawers.jpg";
import avatarMichelle from "./assets/avatar-michelle.jpg";
import { Facebook, Pinterest, Reply, Twitter } from "@mui/icons-material";
import { useState } from "react";

const SocialsContainer: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Stack id="socials-container" className={open ? "popover-open" : ""}>
      <Typography variant="popOverText">Share</Typography>
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <Pinterest />
      </IconButton>
    </Stack>
  );
};

const App = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container id="app-root">
      {/* to help screen readers identify content */}
      <h1 style={{ display: "none" }}>Article preview</h1>
      <Stack id="app-card">
        <img src={drawersImg} alt="article thumbnail" />
        <Stack id="typography-section">
          <Typography variant="articleTitle">
            Shift the overall look and feel by
            <br /> adding these wonderful touches{" "}
            {(breakpoint && <br />) || <></>}to
            {(breakpoint && <></>) || <br />} furniture in your home
          </Typography>
          <Typography variant="articleBody">
            Ever been in a room and felt like {(breakpoint && <br />) || <></>}
            something was missing?
            {(breakpoint && <></>) || <br />} Perhaps it felt
            {(breakpoint && <br />) || <></>} slightly bare and uninviting. I've
            got some
            <br />
            simple tips to help you make any room feel
            {(breakpoint && <br />) || <></>} complete.
          </Typography>
          <Stack id="profile-socials" className={open ? "popover-open" : ""}>
            <Stack id="profile-container">
              <Stack direction="row" id="profile-details">
                <Avatar alt="Michelle" src={avatarMichelle} id="avatar" />
                <Stack direction="column" id="profile-info">
                  <Typography variant="name">Michelle Appleton</Typography>
                  <Typography variant="date">28 Jun 2020</Typography>
                </Stack>
              </Stack>
              {(breakpoint && <SocialsContainer open={open} />) || <></>}
            </Stack>
            <IconButton
              id="share"
              className={open ? "popover-open" : ""}
              onClick={(e) => {
                open ? handlePopoverClose() : handlePopoverOpen(e);
              }}
            >
              <Reply />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      {/* this element is not a part of the content flow, and thus can be showed outside */}
      {(breakpoint && <></>) || (
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: 70,
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          id="tooltip"
        >
          <SocialsContainer open={open} />
        </Popover>
      )}
    </Container>
  );
};

export default App;
