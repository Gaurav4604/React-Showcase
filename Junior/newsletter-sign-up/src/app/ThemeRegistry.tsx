"use client";
import createCache, { Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { PropsWithChildren } from "react";
import { outlinedInputClasses } from "@mui/material";

interface Props extends PropsWithChildren {
  options: Options;
}

const theme = createTheme({
  palette: {
    background: {
      default: "hsl(235, 18%, 26%)",
    },
    common: {
      black: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    primary: {
      main: "hsl(4, 100%, 67%)",
      contrastText: "hsl(234, 29%, 20%)",
    },
  },
  typography: (palette) => ({
    allVariants: {
      color: palette.primary.contrastText,
    },
    h1: {
      fontSize: "3rem",
      fontWeight: "600",
      margin: "1.5rem 0",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      marginBottom: "1rem",
      fontSize: "1.2rem",
    },
    caption: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    button: {
      fontWeight: "600",
      color: palette.common.white,
      textTransform: "none",
      fontSize: "1rem",
      zIndex: 2,
    },
  }),
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
          }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ theme }) =>
          theme.unstable_sx({
            pl: "1.2rem",
            color: theme.palette.primary.contrastText,
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.primary.contrastText,
            },
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: "0.5rem",
            transition: "0.5s",
            borderColor: theme.palette.primary.contrastText,
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.primary.contrastText,
            },
          }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            my: "1rem",
          }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: "0.5rem",
            width: "100%",
            height: "3.5rem",
            mt: "1.5rem",
            mb: "3rem",
            bgcolor: "transparent",
            background: theme.palette.primary.contrastText,
            overflow: "hidden",
            ":hover": {
              bgcolor: "transparent",
              background: theme.palette.primary.contrastText,
            },
            "::before": {
              content: `""`,
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to left, #FF6A3A, #FF527B)",
              zIndex: 1,
              opacity: 0,
              transition: "opacity 0.5s",
            },
            ":hover::before": {
              opacity: 1,
            },
          }),
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            minWidth: "40px",
            top: "0.4rem",
            position: "absolute",
            "& .MuiAvatar-root": {
              height: "1.5rem",
              width: "1.5rem",
              bgcolor: theme.palette.primary.main,
              "& .MuiSvgIcon-root": {
                color: theme.palette.common.white,
                fontSize: "1.5rem",
              },
            },
          }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            mt: "1rem",
          }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            ml: "40px",
          }),
      },
    },
    MuiContainer: {
      variants: [
        {
          props: {
            component: "main",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              margin: "auto",
              position: "relative",
              bgcolor: theme.palette.common.white,
              width: "100%",
              minHeight: "100vh",
              "& > img#card-image": {
                display: "block",
                width: "100%",
                height: "unset",
              },
            }),
        },
        {
          props: {
            component: "section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              px: "1.5rem",
            }),
        },
      ],
    },
  },
});

export default function ThemeRegistry(props: Props) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
