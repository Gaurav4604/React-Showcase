import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import { IconButton, Stack, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            transition: "0.5s",
            border: "1px solid hsl(0, 0%, 59%)",
            mx: "0.2rem",
            mb: "1rem",
            color: "hsl(0, 0%, 59%)",
            ":hover": {
              color: "#fff",
              bgcolor: "hsl(223, 87%, 63%)",
              border: "1px solid transparent",
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
