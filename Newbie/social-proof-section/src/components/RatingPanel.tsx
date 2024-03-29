import { leagueSpartan } from "@/pages/_app";
import rootTheme from "@/theme";
import { Star } from "@mui/icons-material";
import {
  Container,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  gridRow: string;
  gridColumn: string;
  brand: string;
  animationIndex: number;
};

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom?.lightGrayishMagenta,
            minHeight: "4rem",
            maxHeight: "4rem",
            height: "100%",
            width: "100%",
            alignSelf: "center",
            justifySelf: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pl: "2rem",
            borderRadius: "0.5rem",
            [theme.breakpoints.down("md")]: {
              marginBottom: "2rem",
              pl: 0,
              flexDirection: "column",
              justifyContent: "center",
            },
          }),
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "small",
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.star,
            mr: "0.5rem",
          }),
      },
      variants: [
        {
          props: {
            id: "last-star",
          },
          style: {
            marginRight: 0,
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        caption: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: leagueSpartan.style.fontFamily,
            color: theme.palette.custom?.veryDarkMagenta,
            fontWeight: "600",
            fontSize: "1rem",
            [theme.breakpoints.down("lg")]: {
              fontSize: "0.9rem",
            },
            [theme.breakpoints.down("md")]: {
              mb: "0.5rem",
            },
          }),
      },
    },
    MuiStack: {
      defaultProps: {
        style: {
          height: "100%",
        },
      },
      variants: [
        {
          props: {
            id: "stars-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              mr: "2rem",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                mr: 0,
                my: "0.5rem",
              },
            }),
        },
      ],
    },
  },
});

const RatingPanel = (props: Props) => {
  const variants: Variants = {
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
    invisible: () => ({
      opacity: 0,
      x: 100,
    }),
  };

  return (
    <ThemeProvider theme={deepmerge(theme, rootTheme)}>
      <Paper
        component={motion.div}
        elevation={0}
        sx={{ ...props }}
        layout
        initial="invisible"
        animate="visible"
        custom={props.animationIndex}
        variants={variants}
      >
        <Stack id="stars-container" direction={"row"}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star id="last-star" />
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="caption">
            Rated 5 Stars in {props.brand}
          </Typography>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default RatingPanel;
