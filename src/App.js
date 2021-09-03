import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";
import Error from "./pages/Error";
import { useAppContext } from "./context/context";
import ImageViewer from "./components/ImageViewer/ImageViewer";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Authwrapper from "./pages/Authwrapper";
import ReqExceeded from "./pages/ReqExceeded";

function App() {
  const { photos, reqExceeded } = useAppContext();
  return (
    <Authwrapper>
      {photos.length > 0 ? <ImageViewer /> : null}
      <Router>
        <Navbar />
        {reqExceeded ? (
          <ReqExceeded />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore" exact>
              <Explore />
            </Route>
            <ProtectedRoute path="/wishlist" exact>
              <Wishlist />
            </ProtectedRoute>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        )}
      </Router>
    </Authwrapper>
  );
}

export default App;
