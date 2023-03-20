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
            },
            "& > section.result": {
              borderRadius: "2rem",
              background:
                "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
              pt: "3rem",
              pb: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
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
            "& > section.summary": {},
            [theme.breakpoints.down("md")]: {
              gridTemplate: `
                "a" 1fr
                "a" 1fr
                "b" 1fr
                "b" 1fr
                "b" 1fr
            `,
              "& > section.result": {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                gridArea: "a",
              },
              "& > section.summary": {
                gridArea: "b",
              },
            },
            [theme.breakpoints.between("xl", "xs")]: {
              p: 0,
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
  },
});

export default theme;
