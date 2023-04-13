import { leagueSpartan } from "./pages/_app";
import { createTheme } from "@mui/material";

import "@mui/material";
interface customPaletteOptions {
  veryDarkMagenta?: string;
  softPink?: string;
  darkGrayishMagenta?: string;
  lightGrayishMagenta?: string;
  white?: string;
}

interface customPalette {
  veryDarkMagenta: string;
  softPink: string;
  darkGrayishMagenta: string;
  lightGrayishMagenta: string;
  white: string;
}

declare module "@mui/material" {
  interface Palette {
    custom?: customPalette;
  }
  interface PaletteOptions {
    custom?: customPaletteOptions;
  }
}

const rootTheme = createTheme({
  palette: {
    custom: {
      veryDarkMagenta: "hsl(300, 43%, 22%)",
      softPink: "hsl(333, 80%, 67%)",
      darkGrayishMagenta: "hsl(303, 10%, 53%)",
      lightGrayishMagenta: "hsl(300, 24%, 96%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: leagueSpartan.style.fontFamily,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("lg")]: {
              maxWidth: "100vw",
            },
          }),
      },
    },
  },
});

export default rootTheme;
