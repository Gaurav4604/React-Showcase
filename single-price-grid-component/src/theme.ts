import { createTheme } from "@mui/material";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import React from "react";

const theme = createTheme({
  palette: {
    custom: {
      cyan: "hsl(179, 62%, 50%)",
      darkCyan: "hsl(179, 62%, 43%)",
      brightYellow: "hsl(71, 73%, 54%)",
      lightGray: "hsl(204, 43%, 93%)",
      grayishBlue: "hsl(218, 22%, 67%)",
      white: "hsl(0, 100%, 100%)",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("md")]: {
              maxWidth: "100vw",
              p: 0,
              m: 0,
            },
            [theme.breakpoints.down("md")]: {
              maxWidth: "100vw",
              p: 0,
              m: 0,
            },
          }),
      },
      variants: [
        {
          props: {
            id: "app-root",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.custom.grayishBlue,
            }),
        },
        {
          props: {
            id: "card-grid",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: "0.5rem",
              overflow: "hidden",
              alignItems: "flex-start",
              justifyContent: "space-between",
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
              display: "grid",
              gridTemplate: "repeat(2, 1fr)/repeat(2, 1fr)",
              [theme.breakpoints.up("md")]: {
                maxWidth: "800px",
                height: "600px",
                maxHeight: "600px",
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "800px",
                minHeight: "600px",
                mx: "1rem",
              },
              [theme.breakpoints.down("sm")]: {
                gridTemplate: "repeat(3, 1fr)/1fr",
                maxWidth: "90vw",
              },
              "& .grid-element": {
                p: "2rem",
                height: "100%",
                alignItems: "flex-start",
                justifyContent: "space-between",
                [theme.breakpoints.down("sm")]: {
                  px: "1rem",
                  py: "1.5rem",
                  height: "32vh",
                },
              },
            }),
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "card-typography",
            className: "grid-element",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridColumn: "1 / 3",
              gridRow: "1 / 2",

              bgcolor: theme.palette.custom.lightGray,
              [theme.breakpoints.down("sm")]: {
                gridColumn: "1/2",
                gridRow: "1/2",
              },
            }),
        },
        {
          props: {
            id: "pricing",
            className: "grid-element",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridColumn: "1 / 2",
              gridRow: "2 / 3",
              bgcolor: theme.palette.custom.darkCyan,
              [theme.breakpoints.down("sm")]: {
                gridColumn: "1/2",
                gridRow: "2/3",
              },
            }),
        },
        {
          props: {
            id: "why-us",
            className: "grid-element",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              gridColumn: "2 / 3",
              gridRow: "2 / 3",
              bgcolor: theme.palette.custom.cyan,
              [theme.breakpoints.down("sm")]: {
                gridColumn: "1/2",
                gridRow: "3/4",
              },
            }),
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            bgcolor: theme.palette.custom.brightYellow,
            width: "100%",
            height: "3rem",
            borderRadius: "0.25rem",
            color: theme.palette.custom.lightGray,
            "&:hover": {
              bgcolor: theme.palette.custom.brightYellow,
            },
            textTransform: "capitalize",
            fontWeight: "700",
            fontFamily: "Karla",
            fontSize: "1.15rem",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
          }),
      },
    },
  },
});

theme.typography.h1 = {
  fontFamily: "Karla",
  fontWeight: "700",
  color: theme.palette.custom.darkCyan,
  fontSize: "2rem",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    marginBottom: 0,
  },
};

theme.typography.subtitle = {
  fontFamily: "Karla",
  fontWeight: "700",
  color: theme.palette.custom.brightYellow,
  fontSize: "1.5rem",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    marginBottom: 0,
  },
};

theme.typography.description = {
  fontFamily: "Karla",
  fontWeight: "400",
  color: theme.palette.custom.grayishBlue,
  fontSize: "1.25rem",
  lineHeight: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    lineHeight: "1.3rem",
  },
};

theme.typography.priceTitle = {
  fontFamily: "Karla",
  fontWeight: "700",
  color: theme.palette.custom.lightGray,
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.price = {
  fontFamily: "Karla",
  fontWeight: "700",
  color: theme.palette.custom.lightGray,
  fontSize: "2rem",
  marginRight: "0.75rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.priceDescription = theme.unstable_sx({
  fontFamily: "Karla",
  fontWeight: "400",
  color: theme.palette.custom.lightGray,
  opacity: 0.7,
  fontSize: "1.25rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}) as React.CSSProperties;

theme.typography.priceSubtitle = theme.unstable_sx({
  fontFamily: "Karla",
  fontWeight: "400",
  color: theme.palette.custom.lightGray,
  opacity: 0.9,
  fontSize: "1.25rem",
  mb: "1.5rem",
  [theme.breakpoints.down("md")]: {
    mt: "1rem",
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("sm")]: {
    m: 0,
    fontSize: "1.1rem",
  },
}) as React.CSSProperties;

theme.typography.whyUs = {
  fontFamily: "Karla",
  fontWeight: "700",
  color: theme.palette.custom.lightGray,
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.whyUsLinks = theme.unstable_sx({
  color: theme.palette.custom.lightGray,
  opacity: 0.8,
  fontWeight: "400",
  fontFamily: "Karla",
  fontSize: "1rem",
  cursor: "pointer",
  "&:not(:last-of-type)": {
    mb: "0.1rem",
  },
}) as React.CSSProperties;

export default theme;
