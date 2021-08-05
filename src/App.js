import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";
import Error from "./pages/Error";
import { useAppContext } from "./context/context";
import ImageViewer from "./components/ImageViewer";
import Navbar from "./components/Navbar";

function App() {
  const { photos } = useAppContext();
  return (
    <>
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
          <Route path="/wishlist" exact>
            <Wishlist />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
