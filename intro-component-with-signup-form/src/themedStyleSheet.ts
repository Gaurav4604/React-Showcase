import { createTheme } from "@mui/material";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { TypographyOptions } from "@mui/material/styles/createTypography";

//? module augmentation
interface customPaletteColorOptions {
  background?: string;
  captionTextAndFormBackground?: string;
  bannerAndFormActiveBorder?: string;
  button?: string;
  formBackground?: string;
  formText?: string;
  formInActiveBorder?: string;
}

interface customPaletteColor {
  background: string;
  captionTextAndFormBackground: string;
  bannerAndFormActiveBorder: string;
  button: string;
  formBackground: string;
  formText: string;
  formInActiveBorder: string;
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
      captionTextAndFormBackground: "hsl(100, 100%, 100%)",
      bannerAndFormActiveBorder: "hsl(248, 32%, 49%)",
      button: "hsl(154, 59%, 51%)",
      formBackground: "hsl(100, 100%, 100%)",
      formText: "hsl(249, 10%, 26%)",
      formInActiveBorder: "hsl(246, 25%, 77%)",
    },
  },
  typography(palette) {
    return {
      allVariants: {
        fontFamily: "Poppins",
      },
      h1: {
        fontWeight: "600",
        fontSize: "4rem",
        color: palette.custom.captionTextAndFormBackground,
      },
      subtitle1: {
        fontWeight: "300",
        fontSize: "1rem",
        color: palette.custom.captionTextAndFormBackground,
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
                transition: "all 0.1s ease",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor:
                  theme.palette.custom.captionTextAndFormBackground,
                "& fieldset, &:hover fieldset": {
                  borderColor: theme.palette.custom.formInActiveBorder,
                  borderRadius: "0.25rem",
                  borderWidth: "0.1rem",
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "0.1rem",
                  borderColor: theme.palette.custom.bannerAndFormActiveBorder,
                },
                "& input": {
                  fontFamily: "Poppins",
                  caretColor: theme.palette.custom.bannerAndFormActiveBorder,
                  fontWeight: "600",
                  opacity: 0.9,
                  color: theme.palette.custom.formText,
                  "&::placeholder": {
                    opacity: 0.8,
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
