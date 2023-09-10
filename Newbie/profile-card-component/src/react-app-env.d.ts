/// <reference types="react-scripts" />

import "@mui/material";

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

interface customPaletteOptions {
  darkCyan?: string;
  veryDarkDesaturatedBlue?: string;
  darkGrayishBlue?: string;
  darkGray?: string;
}

interface customPalette {
  darkCyan: string;
  veryDarkDesaturatedBlue: string;
  darkGrayishBlue: string;
  darkGray: string;
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    stats?: React.CSSProperties;
    statsLabel?: React.CSSProperties;
    location?: React.CSSProperties;
    name?: React.CSSProperties;
    age?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    stats?: React.CSSProperties;
    statsLabel?: React.CSSProperties;
    location?: React.CSSProperties;
    name?: React.CSSProperties;
    age?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    stats?: true;
    statsLabel?: true;
    location?: true;
    name?: true;
    age?: true;
  }
}
declare module "@mui/material" {
  interface Palette {
    custom: customPalette;
  }
  interface PaletteOptions {
    custom?: customPaletteOptions;
  }
}
