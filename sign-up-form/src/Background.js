import React from "react";
import { Grid } from "@mui/material";

function Background({ children }) {
  return (
    <Grid
      sx={{
        width: "100vw",
        height: "100vh",
        background: "hsl(0, 100%, 74%)",
        zIndex: "-10",
      }}
    >
      <Grid
        sx={{
          width: "100vw",
          height: "100vh",
          background: "url('bg-intro-desktop.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // eslint-disable-next-line no-useless-computed-key
          ["@media (max-width: 600px)"]: {
            backgroundImage: "url('bg-intro-mobile.png')",
          },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default Background;
