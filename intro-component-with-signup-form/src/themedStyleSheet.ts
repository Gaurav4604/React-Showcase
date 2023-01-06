import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

//? module augmentation
interface customPaletteColorOptions {
  background?: string;
  text?: string;
  banner?: string;
  button?: string;
  formBackground?: string;
  formInActiveBorder?: string;
  formActiveBorder?: string;
}

interface customPaletteColor {
  background: string;
  text: string;
  banner: string;
  button: string;
  formBackground: string;
  formInActiveBorder: string;
  formActiveBorder: string;
}

declare module "@mui/material" {
  interface Palette {
    custom: customPaletteColor;
  }
  interface PaletteOptions {
    custom: customPaletteColorOptions;
  }
}

export default createTheme({
  palette: {
    custom: {
      background: "hsl(0, 100%, 74%)",
      text: "hsl(100, 100%, 100%)",
      banner: "hsl(248, 32%, 49%)",
      button: "hsl(154, 59%, 51%)",
      formBackground: "hsl(100, 100%, 100%)",
      formActiveBorder: "hsl(249, 10%, 26%)",
      formInActiveBorder: "hsl(246, 25%, 77%)",
    },
  },
  typography(palette) {
    return {
      allVariants: {
        fontFamily: "Poppins, sans-serif",
      },
      h1: {
        fontWeight: "900",
        fontSize: "4rem",
        color: palette.custom.text,
      },
      subtitle1: {
        fontWeight: "300",
        fontSize: "1rem",
        color: palette.custom.text,
      },
    } as TypographyOptions;
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            id: "form-field",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              borderColor: theme.palette.custom.formInActiveBorder,
              "& fieldset, &": {
                transition: "all 0.5s ease",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.custom.text,
                "& fieldset, &:hover fieldset": {
                  borderColor: theme.palette.custom.formInActiveBorder,
                  borderRadius: "0.25rem",
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.custom.banner,
                  borderRadius: "0.25rem",
                },
                "& input": {
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  "&:placeholder": {
                    color: "black",
                  },
                },
              },
            });
          },
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: {
            id: "root",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              [theme.breakpoints.down("md")]: {
                backgroundImage: `url("./bg-intro-mobile.png")`,
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                backgroundImage: `url("./bg-intro-desktop.png")`,
              },
              backgroundColor: theme.palette.custom.background,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              height: "100vh",
            });
          },
        },
      ],
    },
  },
});
