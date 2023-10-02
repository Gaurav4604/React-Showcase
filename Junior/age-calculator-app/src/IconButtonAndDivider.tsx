import { Divider, IconButton, Stack, SvgIcon } from "@mui/material";

type Props = {
  onClick?: () => void;
};

const IconButtonAndDivider = (props: Props) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%" }}
    >
      <Divider sx={{ width: "90%" }} />
      <IconButton
        onClick={props.onClick}
        sx={{ bgcolor: "hsl(259, 100%, 65%)" }}
        size="large"
      >
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </SvgIcon>
      </IconButton>
    </Stack>
  );
};

export default IconButtonAndDivider;
