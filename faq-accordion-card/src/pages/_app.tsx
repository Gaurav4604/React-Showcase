import "@/styles/globals.css";
import rootTheme from "@/theme/root";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Kumbh_Sans } from "next/font/google";

export const kumbh = Kumbh_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const clientSideEmotionCache = createEmotionCache();

export interface FAQAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: FAQAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={rootTheme}>
        <>
          <style jsx global>{`
            html {
              font-family: ${kumbh.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </CacheProvider>
  );
}
