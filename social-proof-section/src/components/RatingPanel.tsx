import rootTheme from "@/theme";
import { Star } from "@mui/icons-material";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  gridRow: string;
  gridColumn: string;
};

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom?.lightGrayishMagenta,
            maxHeight: "3.5rem",
            height: "100%",
            width: "100%",
            alignSelf: "center",
            justifySelf: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pl: "2rem",
          }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.star,
          }),
      },
    },
  },
});

const RatingPanel = (props: Props) => {
  return (
    <ThemeProvider theme={deepmerge(theme, rootTheme)}>
      <Paper component={motion.div} elevation={0} sx={{ ...props }}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Paper>
    </ThemeProvider>
  );
};

export default RatingPanel;
