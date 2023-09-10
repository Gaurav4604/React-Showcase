import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/HankenGrotesk-VariableFont_wght.ttf";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
