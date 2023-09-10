import "@/styles/globals.css";
import rootTheme from "@/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";

export const leagueSpartan = League_Spartan({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const clientSideEmotionCache = createEmotionCache();

export interface SocialProofSection extends AppProps {
  emotionCache: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: SocialProofSection) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={rootTheme}>
        <>
          <style jsx global>{`
            html {
              font-family: ${leagueSpartan.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </CacheProvider>
  );
}
