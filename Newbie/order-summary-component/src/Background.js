import { Container } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        bgcolor: "hsl(225, 100%, 94%)",
        backgroundImage: "url('pattern-background-desktop.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 45vh",
        overflow: "hidden",
        // eslint-disable-next-line no-useless-computed-key
        ["@media (max-width: 600px)"]: {
          backgroundImage: "url('pattern-background-mobile.svg')",
          backgroundSize: "100vw 200vh",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default Background;
