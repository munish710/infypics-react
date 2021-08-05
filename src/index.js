import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import SnackbarProvider from "react-simple-snackbar";

ReactDOM.render(
  <AppProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </AppProvider>,
  document.getElementById("root")
);
