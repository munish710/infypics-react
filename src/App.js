import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";
import Error from "./pages/Error";
import { useAppContext } from "./context/context";
import ImageViewer from "./components/ImageViewer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Authwrapper from "./pages/Authwrapper";

//things left
//  authwrapper error page view  localstorage? favicon title

function App() {
  const { photos } = useAppContext();
  return (
    <Authwrapper>
      {photos.length > 0 && <ImageViewer />}
      <Router>
        <Navbar />
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
      </Router>
    </Authwrapper>
  );
}

export default App;
