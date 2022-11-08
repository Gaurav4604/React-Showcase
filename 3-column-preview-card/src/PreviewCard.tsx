import React from "react";

import "@fontsource/big-shoulders-display";
import "@fontsource/lexend-deca";

import {
  Button,
  createTheme,
  experimental_sx as sx,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            id: "title",
          },
          style: {
            fontFamily: "Big Shoulders Display",
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: "3rem",
            color: "hsl(0, 0%, 95%)",
          },
        },
        {
          props: {
            id: "body",
          },
          style: {
            fontFamily: "Lexend Deca",
            color: "hsla(0, 0%, 100%, 0.75)",
            fontSize: "1rem",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: sx({
          backgroundColor: "hsl(0, 0%, 95%)",
          borderRadius: "2rem",
          px: "1rem",
          py: "0.5rem",
          marginTop: "1rem",
          border: "0.1rem solid transparent",
          "&:hover, &:active": {
            border: "0.1rem solid hsl(0, 0%, 95%)",
          },
        }),
        text: sx({
          fontSize: "0.8rem",
          fontFamily: "Lexend Deca",
        }),
      },
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "preview-card",
          },
          style: sx({
            width: "100%",
            height: "100%",
            py: "3rem",
            paddingLeft: "2rem",
            paddingRight: "3rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
            "& img": {
              width: "4.5rem",
              height: "3rem",
            },
          }),
        },
      ],
    },
  },
});

const PreviewCard: React.FC<{
  iconSrc: string;
  title: string;
  body: string;
  cardColor: string;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomLeftRadius?: string;
}> = ({
  borderBottomLeftRadius = "",
  borderTopLeftRadius = "",
  borderTopRightRadius = "",
  borderBottomRightRadius = "",
  iconSrc,
  title,
  body,
  cardColor,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        id="preview-card"
        sx={{
          bgcolor: cardColor,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          borderTopRightRadius,
          borderTopLeftRadius,
        }}
      >
        <img src={iconSrc} alt="car type" />
        <Typography id="title">{title}</Typography>
        <Typography id="body">{body}</Typography>
        <Button
          sx={{
            color: cardColor,
            "&: hover, &:active": {
              color: "hsl(0, 0%, 95%)",
            },
          }}
        >
          Learn More
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default PreviewCard;
