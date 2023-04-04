# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [FAQ Accordion Card Solution](https://faq-accordion-card-ashy-psi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [MUI](https://mui.com/material-ui/) - Component UI Library (for React)

### What I learned

Using MUI and NextJS to build a page simplified the workflow in a lot of way, Next has built-in support for fonts, which can be easily interpreted by MUI typography components

```js
import { Kumbh_Sans } from "next/font/google";

export const kumbh = Kumbh_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
```

```js
MuiTypography: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: kumbh.style.fontFamily,
          }),
      },
    },
```

Moreover, MUI can be inject styles on server side itself, helping with _Flicker_ avoidance
usually found when using client-side styles injection onto the JSX components.

(an extra step is required for the configuration of the same)

```js
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
```

```js
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
```

### Useful resources

- [Docs for getStaticProps](https://nextjs.org/docs/api-reference/data-fetching/get-static-props) - This helped me for GetStaticProps. I really liked this pattern and will use it going forward.
  Since most FAQ data used on the webpage was of a repetitive schema, I created a the given type in
  typescript, to help with ease of use

```ts
export type FAQDataSchema = {
  params: {
    id: string;
    question: string;
    answer: string;
  };
}[];
```

## Author

- Frontend Mentor - [@gaurav4604](https://www.frontendmentor.io/profile/gaurav4604)
