import { Avatar, Divider } from "@mui/material";
import { Stack } from "@mui/material";
import "./CardText.css";
import IconChip from "./IconChip";

const CardText = () => {
  return (
    <Stack
      justifyContent="space-between"
      sx={{ height: "220px", padding: "1rem 0" }}
    >
      <h3 className="heading">Equilibrium #3429</h3>
      <p className="caption">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <IconChip
          imgSrc={"icon-ethereum.svg"}
          text={"0.041ETH"}
          textStyles={{
            color: "hsl(178, 100%, 50%)",
            fontWeight: "400",
            fontSize: "14px",
          }}
        />
        <IconChip
          imgSrc={"icon-clock.svg"}
          text={"3 days left"}
          textStyles={{
            opacity: "0.7",
            color: "#fff",
            fontWeight: "400",
            fontSize: "14px",
          }}
        />
      </Stack>

      <Divider
        variant="middle"
        style={{ backgroundColor: "hsl(0, 0%, 100%)", opacity: 0.7 }}
      />

      <Stack direction="row" alignItems="center">
        <Avatar
          sx={{
            bgcolor: "white",
            width: "30px",
            height: "30px",
            position: "relative",
          }}
        >
          <Avatar
            src="image-avatar.png"
            sx={{
              bgcolor: "white",
              width: "28px",
              height: "28px",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          />
        </Avatar>

        <p className="caption" style={{ marginLeft: "10px" }}>
          Creation of <span className="highlight">Jules Wyvern</span>
        </p>
      </Stack>
    </Stack>
  );
};

export default CardText;
