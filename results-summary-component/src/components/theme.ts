import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("md")]: {
              width: "60vw",
              height: "30vw",
              maxWidth: "828px",
              minWidth: "700px",
              maxHeight: "600px",
              minHeight: "450px",
              borderRadius: "2rem",
            },
            boxShadow: "3px 3px 10px hsl(221, 100%, 96%)",
            display: "flex",

            [theme.breakpoints.down("md")]: {
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
            },
          }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            flex: 1,
            fontFamily: "HankenGrotesk",
            "&:last-child": {
              p: 0,
            },
            "& > section": {
              maxWidth: "100%",
              pt: "3rem",
              pb: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            },
            "& > section.result": {
              borderRadius: "2rem",
              background:
                "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
              "& *": {
                textAlign: "center",
              },
              "& h1": {
                color: "hsl(241, 100%, 89%)",
                fontSize: "1.25rem",
              },
              "& .greeting": {
                color: "hsl(0, 0%, 100%)",
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: "0.1rem",
              },
              "& .message": {
                color: "hsl(241, 100%, 89%)",
                fontSize: "1rem",
                fontWeight: 500,
                width: "60%",
                lineHeight: "1.2rem",
              },
              "& > .score": {
                height: "12.5rem",
                width: "12.5rem",
                borderRadius: "50%",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background:
                  "linear-gradient(hsla(256, 72%, 46%, 1) 35%,  hsla(241, 72%, 46%, 0) 99%)",
                display: "grid",
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                "& .score-text": {
                  color: "white",
                  "&.value": {
                    fontSize: "4.5rem",
                    fontWeight: 700,
                  },
                  "&.total": {
                    mt: "0.5rem",
                    fontSize: "1rem",
                    color: "hsl(241, 100%, 89%)",
                    fontWeight: 500,
                  },
                },
              },
            },
            "& > section.summary": {
              px: "1.5rem",
              "& > h2": {
                width: "95%",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "HankenGrotesk",
              },
            },
            [theme.breakpoints.down("md")]: {
              gridTemplate: `
                "a" 1fr
                "a" 1fr
                "a" 1fr
                "b" 1fr
                "b" 1fr
                "b" 1fr
                "b" 1fr`,
              "& > section": {
                pt: "2.5rem",
                pb: "2.5rem",
              },
              "& > section.result": {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                gridArea: "a",

                "& .score": {
                  height: "8rem",
                  width: "8rem",

                  "& .score-text": {
                    "&.value": {
                      fontSize: "2.5rem",
                      mt: "0.5rem",
                    },
                    "&.total": {
                      fontSize: "0.9rem",
                    },
                  },
                },
                "& .message": {
                  fontSize: "1rem",
                  width: "60%",
                },
                "& .greeting": {
                  fontSize: "2rem",
                },
              },
              "& > section.summary": {
                gridArea: "b",
              },
            },
            [theme.breakpoints.down("sm")]: {
              "& > .section": {
                pt: "2rem",
                pb: "2rem",
              },
              "& > section.result": {
                "& .message": {
                  fontSize: "1rem",
                  width: "70%",
                  lineHeight: "1rem",
                },
                "& .greeting": {
                  fontSize: "1.5rem",
                },
              },
            },
            // for iphone SE and lower
            [theme.breakpoints.down(376)]: {
              "& > .section": {
                pt: "1.5rem",
                pb: "1.5rem",
              },
              "& > section.result": {
                "& .score": {
                  height: "6rem",
                  width: "6rem",

                  "& .score-text": {
                    "&.value": {
                      fontSize: "2.2rem",
                      mt: "0.5rem",
                    },
                    "&.total": {
                      fontSize: "0.8rem",
                    },
                  },
                },
                "& .message": {
                  fontSize: "0.9rem",
                  width: "70%",
                  lineHeight: "1rem",
                },
                "& .greeting": {
                  fontSize: "1.2rem",
                },
              },
            },
          }),
      },
    },
    MuiContainer: {
      variants: [
        {
          props: {
            id: "root-container",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              height: "100vh",
              width: "100vw",
              display: "grid",
              alignContent: "center",
              justifyContent: "center",
              [theme.breakpoints.between("xl", "xs")]: {
                maxWidth: "100vw",
                p: 0,
              },
            });
          },
        },
      ],
    },
    MuiAlert: {
      styleOverrides: {
        icon: ({ theme }) =>
          theme.unstable_sx({
            alignSelf: "center",
            m: 0,
          }),
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "90%",
            height: "2.5rem",
            borderRadius: "0.5rem",
            "& .MuiAlert-message": {
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              px: "0.5rem",
              "& .MuiAlertTitle-root, & p": {
                m: 0,
                fontSize: "1rem",
                fontWeight: "700",
                fontFamily: "HankenGrotesk",
              },
              "& p": {
                color: "hsl(224, 30%, 27%)",
                fontSize: "1rem",
              },
            },
          }),
      },
      variants: [
        {
          props: {
            className: "reaction",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: "hsla(0, 100%, 67%, 0.1)",
              color: "hsla(0, 100%, 67%, 0.8)",
            }),
        },
        {
          props: {
            className: "memory",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: "hsla(39, 100%, 56%, 0.1)",
              color: "hsla(39, 100%, 56%, 0.8)",
            }),
        },
        {
          props: {
            className: "verbal",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: "hsla(66, 100%, 37%, 0.1)",
              color: "hsla(66, 100%, 37%, 0.8)",
            }),
        },
        {
          props: {
            className: "visual",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: "hsla(234, 85%, 45%, 0.1)",
              color: "hsla(234, 85%, 45%, 0.8)",
            }),
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            width: "100%",
            height: "3rem",
            m: 0,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "HankenGrotesk",
            background: "hsl(224, 30%, 27%)",
            borderRadius: "2rem",
            "&:hover, &:active": {
              background:
                "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
            },
            color: "white",
          }),
      },
    },
  },
});

export default theme;
