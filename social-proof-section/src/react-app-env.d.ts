/// <reference types="react-scripts" />

import "@mui/material";
import React from "react";

export interface CustomPaletteOptions {
  veryDarkMagenta?: string;
  softPink?: string;
  darkGrayishMagenta?: string;
  lightGrayishMagenta?: string;
  white?: string;
  yellow?: string;
}

export interface CustomPalette {
  veryDarkMagenta?: string;
  softPink?: string;
  darkGrayishMagenta?: string;
  lightGrayishMagenta?: string;
  white?: string;
  yellow?: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    custom?: CustomPalette;
  }
  interface PaletteOptions {
    custom?: CustomPaletteOptions;
  }
  interface TypographyVariants {
    rating: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    rating?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    rating: true;
  }
}
