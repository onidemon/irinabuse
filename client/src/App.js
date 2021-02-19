import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img from "./images/business.jpg";

import IrinaForm from "./components/login.component";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
        <div className="container">
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path="/" component={IrinaForm} />
                {/* <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
