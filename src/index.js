import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import SnackbarProvider from "react-simple-snackbar";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENTID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <AppProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </AppProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
