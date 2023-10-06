import {
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  ThemeProvider,
  createTheme,
} from "@mui/material";

type Props = {
  onClick?: () => void;
};

const theme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: "hsl(259, 100%, 65%)",
            height: "4rem",
            width: "4rem",
            transition: "0.2s",
            "&:hover": {
              bgcolor: "hsl(0, 0%, 8%)",
              transform: "scale(1.2)",
            },
            "&:active": {
              transform: "scale(1)",
            },
          }),
      },
    },
  },
});

const IconButtonAndDivider = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Divider />
        <IconButton onClick={props.onClick}>
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
    </ThemeProvider>
  );
};

export default IconButtonAndDivider;
