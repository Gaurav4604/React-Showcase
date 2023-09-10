import "@mui/material";
interface customPaletteOptions {
  veryDarkMagenta?: string;
  softPink?: string;
  darkGrayishMagenta?: string;
  lightGrayishMagenta?: string;
  white?: string;
  star?: string;
}

interface customPalette {
  veryDarkMagenta: string;
  softPink: string;
  darkGrayishMagenta: string;
  lightGrayishMagenta: string;
  white: string;
  star: string;
}

declare module "@mui/material" {
  interface Palette {
    custom?: customPalette;
  }
  interface PaletteOptions {
    custom?: customPaletteOptions;
  }
}
