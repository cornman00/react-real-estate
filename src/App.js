import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        {/* :single => react var to display unique info for each room */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} /> {/* directs 404 pages */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
