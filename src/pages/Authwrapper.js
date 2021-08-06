import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "../components/Loading";

const Authwrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div className="section">{error.message}</div>;
  }
  return <>{children}</>;
};

export default Authwrapper;
