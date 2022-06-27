import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Stack, ThemeProvider } from "@mui/material";

import theme from "./Theme";
import RatingCard from "./RatingCard";
import ThankyouCard from "./ThankyouCard";

const Routing = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Stack variant="frame">
          <Routes>
            <Route path="/" element={<RatingCard />} />

            <Route path="/thanks/:rating" element={<ThankyouCard />} />
          </Routes>
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Routing;
