import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import { IconButton, Stack, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("md")]: {
              position: "absolute",
              bottom: "1rem",
              right: "5rem",
            },
          }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            transition: "0.5s",
            border: "1px solid white",
            mx: "0.2rem",
            mb: "1rem",
            color: "white",
            ":hover": {
              color: "hsl(300, 69%, 71%)",
              border: "1px solid hsl(300, 69%, 71%)",
            },
          }),
      },
    },
  },
});

const IconRow = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <IconButton>
          <FacebookRounded />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
};

export default IconRow;
