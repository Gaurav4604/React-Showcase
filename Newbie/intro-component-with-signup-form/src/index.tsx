import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import themeStyleSheet from "./themedStyleSheet";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeStyleSheet}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
