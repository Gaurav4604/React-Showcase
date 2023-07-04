import { leagueSpartan } from "@/pages/_app";
import rootTheme from "@/theme";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  src: string;
  name: string;
  content: string;
  gridRow: string;
  gridColumn: string;
  animationIndex: number;
};

const cardTheme = createTheme({
  typography: {
    fontFamily: leagueSpartan.style.fontFamily,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom?.veryDarkMagenta,
            borderRadius: "0.4rem",
            py: "1rem",
            px: "0.8rem",
            height: "100%",
            maxHeight: "15rem",
            alignSelf: "start",
          }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.white,
            fontWeight: "600",
            fontSize: "1rem",
          }),
        subheader: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.softPink,
            fontSize: "1rem",
          }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "1rem",
            color: theme.palette.custom?.white,
          }),
      },
    },
  },
});

const ReviewCard = (props: Props) => {
  const variants: Variants = {
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
    invisible: () => ({
      opacity: 0,
      y: 100,
    }),
  };

  return (
    <ThemeProvider theme={deepmerge(cardTheme, rootTheme)}>
      <Card
        elevation={0}
        component={motion.div}
        sx={{
          gridRow: props.gridRow,
          gridColumn: props.gridColumn,
        }}
        initial="invisible"
        animate="visible"
        custom={props.animationIndex}
        variants={variants}
      >
        <CardHeader
          avatar={<Avatar src={props.src} />}
          title={props.name}
          subheader="Verified Buyer"
        />
        <CardContent>
          <Typography variant="body1">&quot;{props.content}&quot;</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ReviewCard;
