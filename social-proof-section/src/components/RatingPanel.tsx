import rootTheme from "@/theme";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom?.lightGrayishMagenta,
            gridRow: "1/2",
            gridColumn: "6/8",
          }),
      },
    },
  },
});

const RatingPanel = (props: Props) => {
  return (
    <ThemeProvider theme={deepmerge(theme, rootTheme)}>
      <Paper component={motion.div} elevation={0}></Paper>
    </ThemeProvider>
  );
};

export default RatingPanel;
