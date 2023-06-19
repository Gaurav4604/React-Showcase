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
import React from "react";

type Props = {
  src: string;
  name: string;
  content: string;
  positionHorizontal: {
    start: number;
    end: number;
  };
  alignment: "start" | "center" | "end";
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
            height: "14rem",
            width: "21rem",
            bgcolor: theme.palette.custom?.veryDarkMagenta,
            borderRadius: "0.4rem",
            py: "0.8rem",
            px: "0.5rem",
            alignSelf: "center",
            justifySelf: "center",
          }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.white,
            fontWeight: "600",
            fontSize: "0.9rem",
          }),
        subheader: ({ theme }) =>
          theme.unstable_sx({
            color: theme.palette.custom?.softPink,
            fontSize: "0.95rem",
          }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "0.9rem",
            color: theme.palette.custom?.white,
          }),
      },
    },
  },
});

const ReviewCard = (props: Props) => {
  return (
    <ThemeProvider theme={deepmerge(cardTheme, rootTheme)}>
      <Card
        elevation={0}
        sx={{
          gridRow: "5/8",
          gridColumnStart: props.positionHorizontal.start,
          gridColumnEnd: props.positionHorizontal.end,
          alignSelf: props.alignment,
        }}
      >
        <CardHeader
          avatar={<Avatar src={props.src} />}
          title={props.name}
          subheader="Verified Buyer"
        />
        <CardContent>
          <Typography variant="body1">&quot; {props.content} &quot;</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ReviewCard;
