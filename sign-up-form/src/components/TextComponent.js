import React from "react";
import { Container, useMediaQuery } from "@mui/material";

function TextComponent() {
  return (
    <Container sx={{ flex: 1 }}>
      <h2
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "2.5rem",
          textAlign: useMediaQuery("@media (max-width: 600px)")
            ? "center"
            : "left",
          marginBottom: "2rem",
        }}
      >
        Learn to code by <br />
        watching others
      </h2>
      <p
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: "1rem",
          textAlign: useMediaQuery("@media (max-width: 600px)")
            ? "center"
            : "left",
        }}
      >
        See how experienced developers solve problems in real-time.
        <br />
        Watching scripted tutorials is great, but understanding how
        <br />
        developers think is invaluable.
      </p>
    </Container>
  );
}

export default TextComponent;
