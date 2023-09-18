"use client";
import createCache, { Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { PropsWithChildren } from "react";
import { outlinedInputClasses } from "@mui/material";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

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
  }),
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
            borderWidth: "0.1rem",
            "& fieldset": {
              borderWidth: "0.1rem",
              transition: "all 0.5s ease",
            },
          }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ theme }) =>
          theme.unstable_sx({
            pl: "1.2rem",
            color: "inherit",
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: "0.5rem",
            borderColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.contrastText,
            [`&.${outlinedInputClasses.error}`]: {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                bgcolor: "rgba(255, 98, 87, 0.4)",
                borderWidth: "0.1rem",
              },
            [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
              {
                borderColor: "inherit",
                borderWidth: "0.1rem",
              },
          }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            mt: "1rem",
            mb: "2rem",
            [theme.breakpoints.up("md")]: {
              mb: "unset",
              mt: "unset",
              my: "1rem",
              p: "0",
            },
          }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: "0.5rem",
            height: "3.5rem",
            mt: "1.5rem",
            mb: "3rem",
            bgcolor: "transparent",
            width: "100%",
            background: theme.palette.primary.contrastText,
            overflow: "hidden",
            [theme.breakpoints.up("md")]: {
              mb: "unset",
            },
            "&#success": {
              position: "absolute",
              left: "1.5rem",
              bottom: "3rem",
              mb: "unset",
              width: "calc(100vw - 3rem)",
              [theme.breakpoints.up("md")]: {
                width: "100%",
                position: "relative",
                left: "unset",
                bottom: "unset",
              },
            },
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
            [theme.breakpoints.up("md")]: {
              minWidth: "30px",
              top: "0.35rem",
            },
            "& .MuiAvatar-root": {
              height: "1.5rem",
              width: "1.5rem",
              bgcolor: theme.palette.primary.main,
              [theme.breakpoints.up("md")]: {
                height: "1.2rem",
                width: "1.2rem",
              },
              "& .MuiSvgIcon-root": {
                color: theme.palette.common.white,
                fontSize: "1.5rem",
                [theme.breakpoints.up("md")]: {
                  height: "1.2rem",
                },
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
            [theme.breakpoints.up("md")]: {
              mt: "unset",
            },
          }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            ml: "40px",
            [theme.breakpoints.up("md")]: {
              ml: "35px",
            },
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
                [theme.breakpoints.up("md")]: {
                  display: "block",
                  height: "100%",

                  width: "unset",
                },
              },
              "& img#success-image": {
                display: "block",
                width: "5rem",
                mb: "3rem",
                pt: "25vh",
                height: "unset",
                [theme.breakpoints.up("md")]: {
                  pt: "unset",
                  width: "4rem",
                  mb: "1rem",
                },
              },
              [theme.breakpoints.up("md")]: {
                minHeight: "unset",
                maxHeight: "768px",
                maxWidth: "920px",
                minWidth: 0,
                overflow: "hidden",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                p: "1rem",
                borderRadius: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row-reverse",
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
              [theme.breakpoints.up("md")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                height: "80%",
                px: "3rem",
              },
            }),
        },
        {
          props: {
            component: "main",
            id: "success",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              px: "1.5rem",
              [theme.breakpoints.up("md")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                px: "3rem",
                width: "25rem",
                height: "30rem",
              },
            }),
        },
      ],
    },
  },
});

theme.typography.h1 = {
  fontFamily: "Roboto",
  fontSize: "3rem",
  fontWeight: "700",
  margin: "1.5rem 0",
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    fontSize: "3rem",
    marginBottom: "1rem",
  },
};
theme.typography.body1 = {
  fontFamily: "Roboto",
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    fontSize: "1.1rem",
    marginBottom: "unset",
  },
};
theme.typography.body2 = {
  fontFamily: "Roboto",
  marginBottom: "1rem",
  fontSize: "1.2rem",
  maxWidth: "95%",
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    fontSize: "1.1rem",
    marginBottom: "unset",
  },
};
theme.typography.subtitle1 = {
  fontFamily: "Roboto",
  fontSize: "0.8rem",
  fontWeight: "700",
  [theme.breakpoints.up("md")]: {
    marginTop: "1rem",
    marginBottom: "0.2rem",
    fontSize: "0.8rem",
    fontWeight: "700",
  },
};
theme.typography.subtitle2 = {
  fontFamily: "Roboto",
  fontSize: "0.8rem",
  fontWeight: "700",
  color: theme.palette.primary.main,
};
theme.typography.button = {
  fontFamily: "Roboto",
  fontWeight: "700",
  color: theme.palette.common.white,
  textTransform: "none",
  fontSize: "1rem",
  zIndex: 2,
};

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
