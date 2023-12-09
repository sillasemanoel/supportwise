// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import { GlobalStyle } from "./assets/styles/globalStyle";
// Routes
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
