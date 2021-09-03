import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { options } from "../../utils/options";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  const [openSnackbar] = useSnackbar(options);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect to="/">
            {openSnackbar("Please login to view Saved Photos")}
          </Redirect>
        );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
